import mongoose, {Schema, Document} from "mongoose";



interface IContact extends Document{
    name:string;
    subject:string;
    email:string;
    message:string;
}

const ContactSchema = new Schema<IContact>({
    name:{type:String, required:true},
    subject:{type:String, required:true},
    email:{type:String, required:true},
    message:{type:String, required:true}
})

export default mongoose.model<IContact>("Contact", ContactSchema)