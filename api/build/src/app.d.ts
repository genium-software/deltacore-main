/** TODO (aksh0001): implement corresponding functionality */
declare type Controller = {
    [key: string]: any;
};
declare class App {
    private readonly controllers;
    private readonly port;
    private readonly version;
    private readonly express;
    constructor(controllers: Controller[], port: number, version?: string);
    listen(): void;
    private static initDBConnection;
    private initMiddleware;
    private initControllers;
    private initErrorHandling;
}
export default App;
