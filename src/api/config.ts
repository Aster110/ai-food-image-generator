/**
 * API基础URL
 */
export const API_URL = 'https://ismaque.org/v1';

/**
 * API密钥，直接写死在代码中
 * 注意：在实际生产环境中，应该使用环境变量
 */
export const API_KEY = 'sk-KIcYJ8sLwagRrDXwzzlpJK39qICLehdU0mV7UziAJFLm1N0x';

/**
 * 获取API请求所需的认证头
 * @returns 包含认证信息的请求头对象
 */
export function getAuthHeaders(): HeadersInit {
  return {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };
} 