"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
require("reflect-metadata");
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
// declare metadata by @controller annotation
require("./controllers/UserController");
const constant_1 = require("./constant");
const UserServiceImpl_1 = require("./services/impl/UserServiceImpl");
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
