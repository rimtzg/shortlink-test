import * as mongoose from 'mongoose';

export const LinkSchema = new mongoose.Schema({
    url: String,
    short: String,
});