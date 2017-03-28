const User = require('mongoose').model('User');

exports.create = function(req, res, next) {
  const user = new User(req.body);
  user.save((err) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(user);
    }
  });
};

exports.list = function(req, res, next) {
  User.find({}, 'username', {limit:2}, (err,users) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(users);
    }
  });
};
