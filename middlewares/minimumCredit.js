
module.exports = (req, res, next) => {
    if (!req.user.credit < 1) {
      return res.status(403).sent({ error: "At least 1 credit is required to create survey" });
    }
    next(); //everything is good, continue passing the request
  };