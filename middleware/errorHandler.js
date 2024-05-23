// errorHandler.js
function errorHandler(err, req, res, next) {
    // Log the error stack for debugging purposes
    console.error(err.stack);
  
    // Determine the HTTP status code to send
    const status = err.status || 500;
  
    // Construct the error response object
    const response = {
      message: err.message || 'Internal Server Error',
      // In development, include the error object for more details
      error: process.env.NODE_ENV === 'development' ? err : {},
    };
  
    // Send the error response
    res.status(status).json(response);
  }
  
  module.exports = errorHandler;
  