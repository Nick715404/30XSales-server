import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReviewService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createReviewDto: CreateReviewDto) {
    try {
      const review = await this.prisma.reviews.create({
        data: {
          rating: createReviewDto.rating,
          body: createReviewDto.body,
          name: createReviewDto.name
        }
      });
      return review;
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const reviews = await this.prisma.reviews.findMany();
      return reviews;
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
