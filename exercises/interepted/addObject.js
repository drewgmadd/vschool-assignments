function addObject(req, res, next) {
  req.newObj = {
    first: "Value-One",
    second: "Value-Two",
    third: "Value-Three"
  }
  next();
}

module.exports = addObject;
