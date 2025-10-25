const logger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} at ${new Date().toISOString()}`);
  next(); // Pass control to next middleware
};

module.exports = logger;
