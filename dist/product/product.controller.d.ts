import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
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
