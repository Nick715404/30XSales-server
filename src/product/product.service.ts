import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {

  constructor(private readonly prismaService: PrismaService) { }

  async create(data: CreateProductDto) {
    try {
      const product = await this.prismaService.product.create({
        data: {
          title: data.title,
          body: data.body,
          rating: data.rating,
          link: data.link,
          thumbnailPath: data.thumbnailPath,
          type: data.type
        }
      });

      return product;
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }

  async findAll() {
    try {
      const products = await this.prismaService.product.findMany();
      return products;
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }

  async findOne(id: string) {
    try {
      const singleProduct = await this.prismaService.product.findUnique({
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
      const deleteItem = await this.prismaService.product.delete({
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
