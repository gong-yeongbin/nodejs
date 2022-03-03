import mongoose, { Model, Schema } from 'mongoose';

interface IAdvertiser {
  id: Schema.Types.ObjectId;
  name: string;
  regDate: Date;
}

interface IAdvertiserModel extends Model<IAdvertiser> {
  findByAdvertiserId: (id: string) => Promise<IAdvertiser>;
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

advertiserSchema.statics.findByAdvertiserId = function (id: string) {
  return this.findById({ _id: id });
};

export default mongoose.model<IAdvertiser, IAdvertiserModel>('Advertiser', advertiserSchema);
