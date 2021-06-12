import * as bodyParser from 'body-parser';
import "reflect-metadata";


import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';

import { IUser } from "./services/UserService";

// declare metadata by @controller annotation
import "./controllers/UserController";
import { SERVICE_IDENTIFIER } from "./constant";
import { UserServiceImpl } from "./services/impl/UserServiceImpl";

// set up container
let container = new Container();

// set up bindings
// container.bind<FooService>('FooService').to(FooService);
container.bind<IUser>(SERVICE_IDENTIFIER.UserService).to(UserServiceImpl);


// create server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000);


