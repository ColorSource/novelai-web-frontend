// src/types/api.d.ts
export interface GenerateImageRequest {
    prompt: string;
    negativePrompt: string;
    width: number;
    height: number;
    sampler: string;
    steps: number;
    seed: number;
}

export interface ImageInfo {
    id: string;
    filename: string;
    createdAt: string;
    prompt: string;
    negativePrompt: string;
    seed: number;
    width: number;
    height: number;
    sampler: string;
    steps: number;
}
export interface GenerateImageResponse {
    url: string;
    imageInfo: ImageInfo;
}
export interface ImageListResponse {
    images: ImageInfo[];
    total: number;
}
export interface JsonError {
    message: string;
    statusCode: number;
}
