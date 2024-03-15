import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ReviewService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createReviewDto: CreateReviewDto): Promise<{
        id: string;
        rating: number;
        name: string;
        body: string;
    }>;
    findAll(): Promise<{
        id: string;
        rating: number;
        name: string;
        body: string;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateReviewDto: UpdateReviewDto): string;
    remove(id: number): string;
}
