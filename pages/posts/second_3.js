import Head from 'next/head';
import Link from 'next/link';

export default function SecondThree(){
    return (
<div className='m-auto w-full text-center'>
        <div className="flex flex-col items-center ">
            <Head>
                <title>うさぎの紹介</title>
            </Head>
            
            <img
                src="/images/all_3.jpg" 
                alt="usagi图片"
                className="w-full object-cover m-auto"
            />
            <p className="text-center text-lg font-semibold mt-2">
            ちいかわのともだち。
            「ウラ」「ヤハ」など大声でよく叫ぶ。
            </p>

            <div className="mt-4">
                <Link href="/posts/first-post">← Back to last page<br/></Link>
            </div>

        </div>
        </div>

    )
}