'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FoodImageGeneratorPage() {
  const router = useRouter();
  
  useEffect(() => {
    // 自动重定向到首页
    router.push('/');
  }, [router]);
  
  return (
    <main className="container mx-auto py-8 px-4 text-center">
      <p className="text-gray-600">正在重定向到首页...</p>
    </main>
  );
} 