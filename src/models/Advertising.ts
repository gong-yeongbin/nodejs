import mongoose, { Schema } from 'mongoose';

export interface IAdvertising {
  name: string;
  platform: string;
  imageUrl: string;
  status: boolean;
  advertiser: Schema.Types.ObjectId;
  tracker: Schema.Types.ObjectId;
  regDate: Date;
}

const advertisingSchema: Schema<IAdvertising> = new Schema(
  {
    name: { type: String, required: true, unique: true },
    platform: { type: String, lowercase: true, required: true },
    imageUrl: { type: String, default: '' },
    status: { type: Boolean, default: true },
    advertiser: { type: Schema.Types.ObjectId, ref: 'Advertiser', required: true },
    tracker: { type: Schema.Types.ObjectId, ref: 'Tracker', required: true },
    regDate: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export default mongoose.model<IAdvertising>('Advertising', advertisingSchema);
