import mongoose, { Model, Schema } from 'mongoose';

interface IAdvertising {
  id: Schema.Types.ObjectId;
  name: string;
  platform: string;
  imageUrl: string;
  status: boolean;
  advertiser: Schema.Types.ObjectId;
  tracker: Schema.Types.ObjectId;
  event: {
    admin: String;
    tracker: String;
    media: String;
  }[];
  regDate: Date;
}

interface IAdvertisingModel extends Model<IAdvertising> {
  findByAdvertisingId: (id: string) => Promise<IAdvertising>;
}

const advertisingSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    platform: { type: String, lowercase: true, required: true },
    imageUrl: { type: String, default: '' },
    status: { type: Boolean, default: true },
    advertiser: { type: Schema.Types.ObjectId, ref: 'Advertiser', required: true },
    tracker: { type: Schema.Types.ObjectId, ref: 'Tracker', required: true },
    event: [{ admin: String, tracker: String, media: String, _id: false }],
    regDate: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

advertisingSchema.statics.findByAdvertisingId = function (id: string) {
  return this.findById({ _id: id });
};

export default mongoose.model<IAdvertising, IAdvertisingModel>('Advertising', advertisingSchema);
