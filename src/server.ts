#!/usr/bin/env node
/* eslint-disable no-use-before-define */

/**
 * Module dependencies.
 */

import http from 'http';
import debug from 'debug';
import dotenv from 'dotenv';
import createError from 'http-errors';
import RED from 'node-red';
import app from './app';

const log = debug('http:server');
const errorLog = debug('http:error');

dotenv.config();

// eslint-disable-next-line import/first
import nodeRedSettings from './nodered-settings';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

// Initialise the runtime with a server and settings
RED.init(server, nodeRedSettings);

// NOTE: RED.httpAdmin and RED.httpNode only valid after 'init', so I have to move
// error handling route from file 'app.js' to this file

// Serve the editor UI from /red
app.use(nodeRedSettings.httpAdminRoot, RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(nodeRedSettings.httpNodeRoot, RED.httpNode);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  errorLog(err);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// Start the runtime
RED.start();

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  // eslint-disable-next-line no-shadow
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      // eslint-disable-next-line no-console
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // eslint-disable-next-line no-console
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr!.port}`;
  log(`Listening on ${bind}`);
}
