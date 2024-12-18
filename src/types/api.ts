// src/utils/api.ts
import axios from 'axios';
import { GenerateImageRequest, GenerateImageResponse, ImageListResponse } from '../types/api';


const api = axios.create({
  baseURL: 'http://localhost:8080', // 后端 API 地址
});


export const generateImage = async (params: GenerateImageRequest): Promise<GenerateImageResponse> => {
  const response = await api.post('/generate', params);
  return response.data;
};

export const getImageList = async (page:number, pageSize:number):Promise<ImageListResponse> => {
    const response = await api.get(`/images?page=${page}&pageSize=${pageSize}`);
    return response.data;
}