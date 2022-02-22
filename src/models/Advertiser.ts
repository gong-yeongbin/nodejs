import mongoose, { Model, Schema } from 'mongoose';

interface IAdvertiser {
  name: string;
  regDate: number;
}

const AdvertiserSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  regDate: {
    type: Number,
    default: Date.now,
  },
});

export default mongoose.model<IAdvertiser>('Advertiser', AdvertiserSchema);
