/**
 * Entry-point.
 */
import 'dotenv/config';
import App from './app';

const app = new App(/* Controller[]*/ []);

app.listen();
