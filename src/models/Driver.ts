import mongoose, { Schema, Document } from "mongoose";


enum DevelopmentProgram {
    RED_BULL_JUNIOR_TEAM = "Red Bull Junior Team",
    FERRARI_DRIVER_ACADEMY = "Ferrari Driver Academy",
    MERCEDES_JUNIOR_TEAM = "Mercedes Junior Team",
    ALPINE_ACADEMY = "Alpine Academy",
    MCLAREN_YOUNG_DRIVER_PROGRAM = "McLaren Young Driver Program",
    WILLIAMS_DRIVER_ACADEMY = "Williams Driver Academy",
    SAUBER_ACADEMY = "Sauber Academy",
    ASTON_MARTIN_YOUNG_DRIVER_PROGRAM = "Aston Martin Young Driver Program",
    NONE = "None" 
  }

  enum MotorsportCategory{
        F2 = 'Formula 2',
        F3 = 'Formula 3',
        F4 = 'Formula 4',
        WEC = 'WEC',
        Indy = 'Indy',
        FE = 'Formula E',
  }


interface IDriver extends Document{
    name:string;
    nationality: string;
    dob:Date;
    developmentProgram: DevelopmentProgram;
    photoUrl?: string;
    category?: MotorsportCategory;
    


}

const DriverSchema = new Schema<IDriver>({
    name:{type:String, required:true},
    nationality:{type:String, required:true},
    dob:{type:Date, required:true},
    developmentProgram: {
        type:String,
        enum:Object.values(DevelopmentProgram),
        default:DevelopmentProgram.NONE
    },
    photoUrl: { type: String },
    category: {
        type: String,
        enum: Object.values(MotorsportCategory)
    }

})

export default mongoose.model<IDriver>("Driver", DriverSchema)