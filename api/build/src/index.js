"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Entry-point.
 */
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const app = new app_1.default(/* Controller[]*/ [], Number(process.env.PORT));
app.listen();
//# sourceMappingURL=index.js.map