import mongoose, { Schema } from 'mongoose';

interface IAdvertiser {
  name: string;
  regDate: Date;
}

const advertiserSchema: Schema<IAdvertiser> = new Schema(
  {
    name: { type: String, required: true, unique: true },
    regDate: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

export default mongoose.model<IAdvertiser>('Advertiser', advertiserSchema);
