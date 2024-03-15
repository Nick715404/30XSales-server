import { CreatePostDto } from './dto/create-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PostService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePostDto): Promise<{
        id: string;
        title: string;
        subTitle: string;
        body: string;
        imgPath: string;
        thumbnailPath: string;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        subTitle: string;
        body: string;
        imgPath: string;
        thumbnailPath: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        subTitle: string;
        body: string;
        imgPath: string;
        thumbnailPath: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        subTitle: string;
        body: string;
        imgPath: string;
        thumbnailPath: string;
    }>;
}
