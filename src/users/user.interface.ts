import { Document } from 'mongoose';

export interface User extends Document {
    readonly username: string;
    readonly password: string;
    readonly token : string;
}

export interface Token {
    token : string;
}