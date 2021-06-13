import * as bodyParser from 'body-parser';
import "reflect-metadata";
import mongoose from 'mongoose';


import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';

import { IUser } from "./services/UserService";

// declare metadata by @controller annotation
import "./controllers/UserController";
import { SERVICE_IDENTIFIER } from "./constant";
import { UserServiceImpl } from "./services/impl/UserServiceImpl";


// configure mongodb and connect to it
mongoose.connect('mongodb://localhost:27017/b2b_bill_generator?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) {
    console.log('Mongoose connection Failed !');
  }
  console.log('Connected With Database');
})

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


