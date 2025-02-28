import mongoose, {Schema, Document} from "mongoose";

interface IResult extends Document{
    driverId: mongoose.Schema.Types.ObjectId,
    championshipId: mongoose.Schema.Types.ObjectId,
    year: number,
    finalPosition: number,
    pointsEarned: number
}

const ResultSchema = new Schema<IResult>({
    driverId: { type: Schema.Types.ObjectId, ref: "Driver", required: true },
    championshipId: { type: Schema.Types.ObjectId, ref: "Championship", required: true },
    year: { type: Number, required: true },
    finalPosition: { type: Number, required: true },
    pointsEarned: { type: Number, required: true }
  });


  export default mongoose.model<IResult>("Results", ResultSchema)