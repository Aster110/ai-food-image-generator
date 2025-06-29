/**
 * 图像生成响应中的图像数据
 */
export interface GeneratedImage {
  url: string;
  revised_prompt?: string;
}

/**
 * 图像生成API的响应格式
 */
export interface ImageGenerationResponse {
  created: number;
  data: GeneratedImage[];
} 