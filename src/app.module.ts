import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { LinksModule } from './links/links.module';

@Module({
  imports: [UsersModule, LinksModule],
  // controllers: [AppController, LinksController, UsersController],
  // providers: [UsersService, AppService],
})
export class AppModule {}
