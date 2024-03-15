import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PostModule } from './post/post.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [ProductModule, ServeStaticModule.forRoot({
    serveRoot: '/images',
    rootPath: join(__dirname, '..', 'images/'),
  }), PostModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
