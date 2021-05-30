import * as bodyParser from 'body-parser';
import "reflect-metadata";


import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';

// declare metadata by @controller annotation
import "./controllers/UserController";

// set up container
let container = new Container();

// set up bindings
// container.bind<FooService>('FooService').to(FooService);

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


