module.exports = (err, req, res, next) => {
  if (err === 'NOT_FOUND') {
    res.status(404);
    res.json({message: 'Resource not found'});
  } else {
    res.status(500);
    res.json({message: 'Internal Error'});
  }
  next();
};