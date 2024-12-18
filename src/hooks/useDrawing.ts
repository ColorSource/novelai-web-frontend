 // src/hooks/useDrawing.ts
import { useState } from 'react';
import { generateImage as generateImageApi, getImageList } from '../utils/api';
import { GenerateImageRequest, ImageInfo } from '../types/api';
import { create } from 'zustand';
import { ImageData } from '../types/image';

 interface DrawingState {
    prompt: string;
    negativePrompt: string;
    width: number;
    height: number;
    sampler: string;
    steps: number;
    seed: number;
    images: ImageData[];
    isLoading: boolean;
    loadingImages: boolean;
    currentPage: number;
     totalImages: number;
    setPrompt: (prompt: string) => void;
    setNegativePrompt: (negativePrompt: string) => void;
    setWidth: (width: number) => void;
    setHeight: (height: number) => void;
    setSampler: (sampler: string) => void;
    setSteps: (steps: number) => void;
    setSeed: (seed: number) => void;
    generateImage: () => Promise<void>;
     fetchImages: () => Promise<void>;
    setPage:(page:number) => void;

 }


  export const useDrawing = create<DrawingState>((set, get) => ({
    prompt: "",
    negativePrompt: "",
    width: 512,
    height: 512,
    sampler: "k_euler_ancestral",
    steps: 20,
    seed: Math.floor(Math.random() * 1000000),
     images: [],
    isLoading: false,
    loadingImages: false,
    currentPage: 1,
    totalImages: 0,
    setPrompt: (prompt) => set({ prompt }),
    setNegativePrompt: (negativePrompt) => set({ negativePrompt }),
    setWidth: (width) => set({ width }),
    setHeight: (height) => set({ height }),
    setSampler: (sampler) => set({ sampler }),
    setSteps: (steps) => set({ steps }),
    setSeed: (seed) => set({seed}),
       setPage: (page) => set({ currentPage: page }),
    generateImage: async () => {
      set({ isLoading: true });
      try {
        const params: GenerateImageRequest = {
            prompt: get().prompt,
            negativePrompt: get().negativePrompt,
            width: get().width,
            height: get().height,
            sampler: get().sampler,
            steps: get().steps,
            seed: get().seed
         };
        const response = await generateImageApi(params);
          set((state) => ({
            images: [{ url: `http://localhost:8080/${response.url}`, info: response.imageInfo }, ...state.images],
          }))


      } catch (error: any) {
          console.error("Error generating image", error)
      } finally {
       set({ isLoading: false });
      }
    },
      fetchImages: async () => {
        set({loadingImages: true})
        try{
          const response = await getImageList(get().currentPage, 10);
          const imagesWithUrl: ImageData[] = response.images.map(image => ({
              url: `http://localhost:8080/${image.filename}`,
              info: image,
          }));
          set({images: imagesWithUrl, totalImages: response.total})
        }catch(error: any){
            console.error("Error loading images", error);
        }finally{
            set({loadingImages: false})
        }
      },
}));
