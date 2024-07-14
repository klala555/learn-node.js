
    import express from 'express';
    import chalk from 'chalk';
    import createDebug from 'debug';
    import morgan from 'morgan';

    const debug = createDebug('app');
    const app = express();
    const port = 4000;

    app.use(morgan('combined'));
  
    app.get("/", (req, res) => {
      res.send('Hello borntodev');
    });
  
    app.listen(port, () => {
      console.log("listening on port " + chalk.red(" : "+ port));
    });

  