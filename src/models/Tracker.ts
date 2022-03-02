import mongoose, { Schema } from 'mongoose';

export interface ITracker {
  name: string;
  trackingUrl: string;
  installPostbackUrl: string;
  eventPostbackUrl: string;
  regDate: Date;
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

export default mongoose.model<ITracker>('Tracker', trackerSchema);
