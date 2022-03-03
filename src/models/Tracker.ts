import mongoose, { Model, Schema } from 'mongoose';

interface ITracker {
  id: Schema.Types.ObjectId;
  name: string;
  trackingUrl: string;
  installPostbackUrl: string;
  eventPostbackUrl: string;
  regDate: Date;
}

interface ITrackerModel extends Model<ITracker> {
  findByTrackerId: (id: string) => Promise<ITracker>;
}

const trackerSchema: Schema<ITracker> = new Schema(
  {
    name: { type: String, required: true, unique: true },
    trackingUrl: { type: String, required: true, unique: true },
    installPostbackUrl: { type: String, required: true, unique: true },
    eventPostbackUrl: { type: String, required: true, unique: true },
    regDate: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

trackerSchema.statics.findByTrackerId = function (id: string) {
  return this.findById({ _id: id });
};

export default mongoose.model<ITracker, ITrackerModel>('Tracker', trackerSchema);
