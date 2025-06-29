import { ImageGenerationResponse } from './types';
import { API_URL, getAuthHeaders } from '../config';

export interface ImageGenerationOptions {
  prompt: string;
  n?: number;
  size?: string;
  model?: string;
}

/**
 * 调用AI生成图片
 * @param options 图片生成选项
 * @returns 包含生成图片URL的响应
 */
export async function generateImage(options: ImageGenerationOptions): Promise<ImageGenerationResponse> {
  const { prompt, n = 1, size = '1:1', model = 'gpt-4o-image' } = options;
  
  const payload = JSON.stringify({
    model,
    prompt,
    n,
    size
  });

  try {
    const response = await fetch(`${API_URL}/images/generations`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: payload,
    });

    if (!response.ok) {
      const errorData = await response.json() as { error?: { message: string } };
      throw new Error(`图像生成失败: ${errorData.error?.message || response.statusText}`);
    }

    return await response.json() as ImageGenerationResponse;
  } catch (error) {
    console.error('图像生成出错:', error);
    throw error;
  }
} 