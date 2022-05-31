const CustomAPIError = require('./custom-error');
class ForbiddenAccessError extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = 401
    }
  }
  
  module.exports = ForbiddenAccessError;