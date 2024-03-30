import mongoose from 'mongoose';

const checkObjectId = (req, res, next) => {
  const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!isValidObjectId) {
    res.status(404);
    throw new Error(`Invalid ObjectId of:  ${req.params.id}`);
  }

  next();
};

export default checkObjectId;