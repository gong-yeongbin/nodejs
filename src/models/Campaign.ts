import mongoose, { Model, Schema } from 'mongoose';

interface ICampaign extends Document {
  id: Schema.Types.ObjectId;
  name: string;
  type: string;
  trackerTrackingUrl: string;
  advertising: Schema.Types.ObjectId;
  media: Schema.Types.ObjectId;
  event: {
    admin: String;
    tracker: String;
    media: String;
    status?: boolean;
  }[];
  status: boolean;
  regDate: Date;
}

interface ICampaignModel extends Model<ICampaign> {
  findByCampaignId: (id: string) => Promise<ICampaign>;
}

const campaignSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    type: { type: String, lowercase: true, required: true },
    trackerTrackingUrl: { type: String, required: true },
    advertising: { type: Schema.Types.ObjectId, ref: 'Advertising', required: true },
    media: { type: Schema.Types.ObjectId, ref: 'Media', required: true },
    event: [
      {
        admin: String,
        tracker: String,
        media: String,
        status: { type: Boolean, default: true },
        _id: false,
      },
    ],
    status: { type: Boolean, default: true },
    regDate: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

campaignSchema.statics.findByCampaignId = function (id: string) {
  return this.findById({ _id: id });
};

export default mongoose.model<ICampaign, ICampaignModel>('Campaign', campaignSchema);
