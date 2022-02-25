import mongoose, { Schema } from 'mongoose';

interface IMedia {
  name: string;
  installPostbackUrl: string;
  eventPostbackUrl: string;
  regDate: Date;
}

const mediaSchema: Schema<IMedia> = new Schema(
  {
    name: { type: String, unique: true, required: true },
    installPostbackUrl: { type: String, required: true },
    eventPostbackUrl: { type: String, required: true },
    regDate: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

export default mongoose.model<IMedia>('Media', mediaSchema);
