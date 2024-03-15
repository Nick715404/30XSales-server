export declare class CreateProductDto {
    title: string;
    body: string;
    rating?: number;
    link: string;
    thumbnailPath: string;
    type: string;
    images?: [
        {
            path: string;
        }
    ];
}
