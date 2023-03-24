import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PageSchema } from './page.model';
import { PagesService } from './page.service';
import { PagesController } from './pages.controller';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Page', schema: PageSchema }])],
  controllers: [PagesController],
  providers: [PagesService],
})
export class PagesModule {}
