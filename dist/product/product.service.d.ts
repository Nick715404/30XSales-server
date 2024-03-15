import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(data: CreateProductDto): Promise<{
        id: string;
        title: string;
        body: string;
        rating: number;
        link: string;
        thumbnailPath: string;
        type: string;
        images: string;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        body: string;
        rating: number;
        link: string;
        thumbnailPath: string;
        type: string;
        images: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        body: string;
        rating: number;
        link: string;
        thumbnailPath: string;
        type: string;
        images: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        body: string;
        rating: number;
        link: string;
        thumbnailPath: string;
        type: string;
        images: string;
    }>;
}
