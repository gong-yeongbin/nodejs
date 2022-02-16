import mongoose from 'mongoose';
import config from '@config/index';

export default async () => {
  mongoose.connect(config.mongodb);
};
