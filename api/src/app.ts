/**
 * The {@link App} class configures the Express API server.
 */
import express, {Application} from 'express';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import logger from 'winston';

/** TODO (aksh0001): implement corresponding functionality */
declare type Controller = {[key: string]: any};

class App {
  private readonly express: Application = express();

  constructor(
    private readonly controllers: Controller[],
    private readonly port: number = 5000,
    private readonly version: string = ''
  ) {
    App.initDBConnection();
    this.initMiddleware();
    this.initControllers();
    this.initErrorHandling();
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      logger.info(`Server running on port: ${this.port}`);
    });
  }

  private static initDBConnection(): void {}

  private initMiddleware(): void {
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(morgan('dev'));
    this.express.use(express.json());
    this.express.use(express.urlencoded({extended: false}));
    this.express.use(compression());
  }

  private initControllers(): void {
    this.controllers.forEach((controller: Controller) => {
      this.express.use(
        `/${this.version}/${controller.pathPrefix}`,
        controller.router
      );
    });
  }

  private initErrorHandling(): void {}
}

export default App;
