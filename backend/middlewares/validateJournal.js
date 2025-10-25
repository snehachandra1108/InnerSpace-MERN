// Middleware to validate journal data
module.exports = (req, res, next) => {
  const { mood, stressLevel } = req.body;

  // Check if required fields exist
  if (!mood || !stressLevel) {
    return res.status(400).json({
      success: false,
      message: "Mood and Stress Level are required",
    });
  }

  // Optional: check stressLevel is a number between 1-10
  const stressNum = Number(stressLevel);
  if (isNaN(stressNum) || stressNum < 1 || stressNum > 10) {
    return res.status(400).json({
      success: false,
      message: "Stress Level must be a number between 1 and 10",
    });
  }

  // Everything is fine, continue to controller
  next();
};
