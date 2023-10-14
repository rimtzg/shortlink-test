import { Module } from '@nestjs/common';

import { LinksController } from './links.controller';
import { LinksService } from './links.service';
import { linksProviders } from './links.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [LinksController],
    providers: [LinksService, ...linksProviders],
})
export class LinksModule {}