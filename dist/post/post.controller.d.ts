import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
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
