import React from 'react';
import { Tabs, Tab, Card, CardBody, image } from '@nextui-org/react';
import Link from 'next/link';
export default function ThirdSix() {
  const tabs = [
    {
      id: 'photos',
      label: '労働の鎧さん',
      image: '/images/third/ro_mo.png',
      content: {
        image: '/images/third/chocolate.png',
      },
    },
    {
      id: 'music',
      label: 'ラーメンの鎧さん',
      image: '/images/third/ramen.jpg',
      content: {
        image: '/images/third/ra_shi.png',
      },
    },
    {
      id: 'videos',
      label: 'ポシェットの鎧さん',
      image: '/images/usagi.jpg',
      content: {
        image: '/images/third/ramen.jpg',
      },
    },
  ];

  return (
    <div className="m-auto w-full pt-12 lg:pt-16">
      <div className="mx-auto flex flex-1 justify-center items-center w-2/3 md:w-1/3 h-content p-4 lg:p-12">
        <p className="text-base md:text-lg z-10">
          ここまで作ったところで開発者が燃え尽きてしまったため、このページはまだ未完成です(m(_
          _)m)。
        </p>
      </div>
      <div className="absolute bottom-2 left-0 right-0 lg:left-auto lg:right-4">
        <Link href="/posts/third">← Back to last page</Link>
      </div>
    </div>
  );
}
