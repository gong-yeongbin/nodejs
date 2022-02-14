import mongoose from 'mongoose';

const user = new mongoose.Schema({
  name: String,
  age: Number,
  saveDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('User', user);
