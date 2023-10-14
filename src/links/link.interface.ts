import { Document, Types } from 'mongoose';

export interface Link extends Document {
    readonly user : Types.ObjectId;
    readonly url: string;
    readonly short: string;
}