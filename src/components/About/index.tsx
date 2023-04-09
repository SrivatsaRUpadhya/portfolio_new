import htmlLogo from '@/assets/html.png'
import cssLogo from '@/assets/css.png'
import nodeLogo from '@/assets/Node.svg'
import reactLogo from '@/assets/React.png'
import mysqlLogo from '@/assets/MySQL.jpeg'
import cLogo from '@/assets/C.svg'
import tailwindLogo from '@/assets/Tailwind.png'
import JavaScriptLogo from '@/assets/JavaScript.png'
import arduinoLogo from '@/assets/Arduino.png'
import Image, { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export default function AboutComponent(): ReactElement {
    type techCard = {
        src: StaticImageData,
        alt: string,
        link: string
    }

    const techCards: techCard[] = [
        {
            src: htmlLogo,
            alt: "Html Logo",
            link: "https://en.wikipedia.org/wiki/HTML"
        },
        {
            src: cssLogo,
            alt: "CSS Logo",
            link: "https://en.wikipedia.org/wiki/CSS"
        },
        {
            src: JavaScriptLogo,
            alt: "JavaScript Logo",
            link: "https://en.wikipedia.org/wiki/C_(programming_language)"
        },
        {
            src: nodeLogo,
            alt: "Node Logo",
            link: "https://en.wikipedia.org/wiki/Node.js"
        },
        {
            src: reactLogo,
            alt: "React Logo",
            link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)"
        },
        {
            src: mysqlLogo,
            alt: "MYSQL Logo",
            link: "https://en.wikipedia.org/wiki/MySQL"
        },
        {
            src: cLogo,
            alt: "C Logo",
            link: "https://en.wikipedia.org/wiki/C_(programming_language)"
        },
        {
            src: tailwindLogo,
            alt: "Tailwind Logo",
            link: "https://tailwindcss.com/"
        },
        {
            src: arduinoLogo,
            alt: "Arduino Logo",
            link: "https://arduino.cc/"
        },
    ]
    return (
        <>
            <div className='text-center flex text-2xl sm:w-[30%] p-5 border-b sm:border-r sm:border-b-0'>
                <div className='align-middle m-auto text-white'><h2>These are some of the tchnologies I am familiar with</h2></div>
            </div>
            <div className='sm:w-[70%] flex h-fit'>
                <div className='sm:w-[85%] m-auto'>
                    {
                        techCards.map((card, key) =>
                                <a key={key} href={card.link} className='float-left'>
                                    <div className='w-20 h-20 sm:w-36 sm:h-36 m-5 sm:m-10'>
                                        <Image
                                            className='object-contain max-h-full' 
                                            src={card.src}
                                            alt={card.alt}
                                            quality={100}
                                        />
                                    </div>
                                </a>
                        )
                    }
                </div>
            </div>
        </>
    )
}