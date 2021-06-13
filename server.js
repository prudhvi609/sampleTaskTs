"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
require("reflect-metadata");
const mongoose_1 = __importDefault(require("mongoose"));
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
// declare metadata by @controller annotation
require("./controllers/UserController");
const constant_1 = require("./constant");
const UserServiceImpl_1 = require("./services/impl/UserServiceImpl");
// configure mongodb and connect to it
mongoose_1.default.connect('mongodb://localhost:27017/b2b_bill_generator?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log('Mongoose connection Failed !');
    }
    console.log('Connected With Database');
});
// set up container
let container = new inversify_1.Container();
// set up bindings
// container.bind<FooService>('FooService').to(FooService);
container.bind(constant_1.SERVICE_IDENTIFIER.UserService).to(UserServiceImpl_1.UserServiceImpl);
// create server
let server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
let app = server.build();
app.listen(3000);
