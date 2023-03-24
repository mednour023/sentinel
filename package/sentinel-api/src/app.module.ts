import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.modules';
import { PagesModule } from './pages/pages.modules';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    PagesModule,
    MongooseModule.forRoot(
      'mongodb+srv://nour:d2a38azmEb5TbD68@cluster0.ybnvf.mongodb.net/sentinel?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
