import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreatePostDto) {
    try {
      const post = await this.prisma.post.create({
        data: {
          title: data.title,
          body: data.body,
          subTitle: data.subTitle,
          imgPath: data.imgPath,
          thumbnailPath: data.thumbnailPath
        }
      });

      return post;
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const post = await this.prisma.post.findMany();
      return post;
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: string) {
    try {
      const singleProduct = await this.prisma.post.findUnique({
        where: {
          id: id
        }
      });

      return singleProduct;
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }

  async remove(id: string) {
    try {
      const deleteItem = await this.prisma.post.delete({
        where: {
          id: id
        }
      });
      return deleteItem;
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }
}
