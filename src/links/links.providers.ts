import { Mongoose } from 'mongoose';
import { LinkSchema } from './link.schema';

export const linksProviders = [
  {
    provide: 'LINK_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Link', LinkSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];