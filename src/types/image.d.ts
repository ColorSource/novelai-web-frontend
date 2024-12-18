// src/types/image.d.ts
export interface ImageData {
  url: string;
  info?: {
    prompt: string;
    negativePrompt: string;
    seed: number;
    width: number;
    height: number;
     sampler: string;
     steps: number;
  };
}