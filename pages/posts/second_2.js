import Head from 'next/head';
import Link from 'next/link';

export default function SecondTwo(){
    return (
        <div className='m-auto w-full text-center'>
        <div className="flex flex-col items-center ">
            <Head>
                <title>ちいかわの紹介</title>
            </Head>
            
            <img
                src="/images/all_2.jpg" 
                alt="chii图片"
                className="w-full object-cover m-auto"
            />
            <p className="text-center text-lg font-semibold mt-2">
            ちょっぴり泣き虫だけど優しい性格。
            草むしりや討伐などをして生活している。
            </p>

            <div className="mt-4">
                <Link href="/posts/first-post">← Back to last page<br/></Link>
            </div>

        </div>
        </div>
    )
}