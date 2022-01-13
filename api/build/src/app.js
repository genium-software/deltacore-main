"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The {@link App} class configures the Express API server.
 */
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const winston_1 = __importDefault(require("winston"));
class App {
    constructor(controllers, port, version = '') {
        this.controllers = controllers;
        this.port = port;
        this.version = version;
        this.express = (0, express_1.default)();
        App.initDBConnection();
        this.initMiddleware();
        this.initControllers();
        this.initErrorHandling();
    }
    listen() {
        this.express.listen(this.port, () => {
            winston_1.default.info(`Server running on port: ${this.port}`);
        });
    }
    static initDBConnection() { }
    initMiddleware() {
        this.express.use((0, helmet_1.default)());
        this.express.use((0, cors_1.default)());
        this.express.use((0, morgan_1.default)('dev'));
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: false }));
        this.express.use((0, compression_1.default)());
    }
    initControllers() {
        this.controllers.forEach((controller) => {
            this.express.use(`/${this.version}/${controller.pathPrefix}`, controller.router);
        });
    }
    initErrorHandling() { }
}
exports.default = App;
//# sourceMappingURL=app.js.map