import mongoose, { Model, Schema, Types } from 'mongoose';

interface IMedia {
  id: Schema.Types.ObjectId;
  name: string;
  installPostbackUrl: string;
  eventPostbackUrl: string;
  regDate: Date;
}

interface IMediaModel extends Model<IMedia> {
  findByMediaId: (id: string) => Promise<IMedia>;
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

mediaSchema.statics.findByMediaId = function (id: string) {
  return this.findById({ _id: id });
};

export default mongoose.model<IMedia, IMediaModel>('Media', mediaSchema);
