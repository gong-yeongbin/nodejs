import mongoose, { Schema } from 'mongoose';

export interface ICampaign {
  token: string;
  name: string;
  type: string;
  trackerTrackingUrl: string;
  advertising: Schema.Types.ObjectId;
  media: Schema.Types.ObjectId;
  status: boolean;
  regDate: Date;
}

const campaignSchema: Schema<ICampaign> = new Schema(
  {
    token: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    type: { type: String, lowercase: true, required: true },
    trackerTrackingUrl: { type: String, required: true },
    advertising: { type: Schema.Types.ObjectId, ref: 'Advertising', required: true },
    media: { type: Schema.Types.ObjectId, ref: 'Media', required: true },
    status: { type: Boolean, default: true },
    regDate: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<ICampaign>('Campaign', campaignSchema);
