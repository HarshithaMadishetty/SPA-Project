import mongoose from 'mongoose';

export interface IUser extends Document{
    _id: mongoose.Types.ObjectId;
    username: string;
    password: string;
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
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;
