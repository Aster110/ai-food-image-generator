/**
 * 食物图片生成的提示词参数
 */
export interface FoodPromptParams {
  foodName?: string;        // 食物名称
  style?: string;           // 风格，如"写实"、"卡通"等
  angle?: string;           // 拍摄角度，如"俯视"、"侧面"等
  lighting?: string;        // 光照，如"自然光"、"暖色调"等
  background?: string;      // 背景，如"餐厅"、"厨房"等
  plateType?: string;       // 盘子类型，如"白色陶瓷盘"、"木盘"等
  additionalDetails?: string; // 额外细节描述
}

/**
 * 默认的提示词参数
 */
const DEFAULT_PARAMS: FoodPromptParams = {
  style: '高清写实',
  angle: '俯视',
  lighting: '自然光',
  background: '简约背景',
  plateType: '精致餐盘'
};

/**
 * 构建食物图片生成的提示词
 * @param params 提示词参数
 * @returns 完整的提示词字符串
 */
export function buildFoodImagePrompt(params: FoodPromptParams): string {
  const {
    foodName,
    style = DEFAULT_PARAMS.style,
    angle = DEFAULT_PARAMS.angle,
    lighting = DEFAULT_PARAMS.lighting,
    background = DEFAULT_PARAMS.background,
    plateType = DEFAULT_PARAMS.plateType,
    additionalDetails
  } = params;

  if (!foodName) {
    throw new Error('食物名称是必须的');
  }

  // 构建基础提示词
  let prompt = `${style}风格的${foodName}美食照片，${angle}角度拍摄，${lighting}照明，${background}，食物摆放在${plateType}上`;

  // 添加额外细节
  if (additionalDetails) {
    prompt += `，${additionalDetails}`;
  }

  return prompt;
}

/**
 * 预设的提示词模板
 */
export const PROMPT_TEMPLATES = {
  WESTERN_FOOD: (foodName: string) => 
    buildFoodImagePrompt({
      foodName,
      style: '高清写实',
      background: '西式餐厅环境',
      plateType: '白色陶瓷盘'
    }),
  
  CHINESE_FOOD: (foodName: string) => 
    buildFoodImagePrompt({
      foodName,
      style: '高清写实',
      background: '中式餐厅环境',
      plateType: '传统中式餐具'
    }),
  
  MODERN_CHINESE_FOOD: (foodName: string) => 
    buildFoodImagePrompt({
      foodName,
      style: '现代简约',
      lighting: '柔和光线',
      background: '新中式风格环境',
      plateType: '现代感中式餐具',
      additionalDetails: '精致摆盘，融合现代美学'
    }),
  
  JAPANESE_FOOD: (foodName: string) => 
    buildFoodImagePrompt({
      foodName,
      style: '精致细腻',
      angle: '45度角',
      lighting: '自然光',
      background: '日式简约环境',
      plateType: '日式陶瓷餐具',
      additionalDetails: '讲究摆盘，体现和风美学'
    }),
  
  DESSERT: (foodName: string) => 
    buildFoodImagePrompt({
      foodName,
      style: '明亮清新',
      lighting: '柔和光线',
      background: '咖啡厅风格',
      plateType: '精致甜点盘'
    }),
  
  DRINK: (foodName: string) => 
    buildFoodImagePrompt({
      foodName,
      style: '高清写实',
      angle: '侧面45度角',
      lighting: '柔和背光',
      background: '简约吧台',
      plateType: '精致玻璃杯'
    })
}; 