// Nueva clase de error para poder entregar un mensaje y un statusCode
class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = { ClientError };
