import mongoose from 'mongoose';
import config from '@src/config/index';

export default async () => {
  mongoose.connect(config.mongodb);
};
