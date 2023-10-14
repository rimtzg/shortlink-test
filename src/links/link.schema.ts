import * as mongoose from 'mongoose';

export const LinkSchema = new mongoose.Schema({
    user : mongoose.Types.ObjectId,
    url: String,
    short: String,
});