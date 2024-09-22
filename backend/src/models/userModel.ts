import mongoose from 'mongoose';

export interface IUser extends Document{
    _id: mongoose.Types.ObjectId;
    username: string;
    password: string;
    role:string;
}

const userSchema = new mongoose.Schema<IUser>({
  username: { 
    type: String,
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true
  },
  role:{
    type:String,
    enum:['user','admin'],
    default:'user'
  },
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;
