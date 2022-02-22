import mongoose, { Schema, Document, Model } from 'mongoose';

interface ITest {
  name: string;
  saveDate: Date;
}

interface ITestDocument extends ITest, Document {}

interface ITestMedel extends Model<ITestDocument> {
  findAllTest: () => Promise<ITestDocument>;
}

const TestSchema: Schema<ITestDocument> = new Schema({
  name: { type: String, required: true, unique: true },
  saveDate: {
    type: Date,
    default: Date.now,
  },
});

TestSchema.statics.findAllTest = function () {
  return this.find();
};

export default mongoose.model<ITestDocument, ITestMedel>('Test', TestSchema);
