# React Router Express Location - Server Side Rendering (isomorphic)


```javascript
// server.js

import express from 'express';
import ExpressLocation from 'express-location';
import ReactRouter from 'react-router';

import routes from './routes';


const server = express();

server.use(function (req, res, next) {
  const location = new ExpressLocation(req.url, res);

  ReactRouter.run(routes, location, (Handler, state) => {
    if (location.redirect()) return;
    
    // ...
  });
})
```
