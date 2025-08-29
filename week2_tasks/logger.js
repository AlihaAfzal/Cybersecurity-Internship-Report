const winston = require('winston');

// Create a logger with two transports: Console and File
const logger = winston.createLogger({
  transports: [
    // This transport logs to the console
    new winston.transports.Console(),
    
    // This transport logs to a file named 'security.log'
    new winston.transports.File({ filename: 'security.log' })
  ]
});

// Log a few messages with different levels
logger.info('Application started successfully.');
logger.warn('A suspicious login attempt was detected.');
logger.error('An unhandled error occurred.');

console.log('Logs written successfully. Check the security.log file in your folder.');