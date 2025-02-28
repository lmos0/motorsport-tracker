import mongoose, { Schema, Document } from "mongoose";

interface IChampionship extends Document{
    name: string,
    year: number,
    organization: string;
    superLicensePoints: Record<string, number>;
}

const ChampionshipSchema = new Schema <IChampionship>({
name: { type: String, required: true },
  year: { type: Number, required: true },
  organization: { type: String },
  superLicensePoints: { type: Object, default: {} }

})

export default mongoose.model<IChampionship>("Championship", ChampionshipSchema)