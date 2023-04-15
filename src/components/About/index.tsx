import htmlLogo from '/public/Images/html.png'
import cssLogo from '/public/Images/css.png'
import nodeLogo from '/public/Images/Node.svg'
import reactLogo from '/public/Images/React.png'
import mysqlLogo from '/public/Images/MySQL.jpeg'
import cLogo from '/public/Images/C.svg'
import tailwindLogo from '/public/Images/Tailwind.png'
import JavaScriptLogo from '/public/Images/JavaScript.png'
import arduinoLogo from '/public/Images/Arduino.png'
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
            <div className='text-center flex text-2xl md:w-[30%] p-5 border-b md:border-r md:border-b-0'>
                <div className='align-middle m-auto'><h2>These are some of the technologies I am familiar with</h2></div>
            </div>
            <div className='md:w-[70%] flex h-fit'>
                <div className='md:w-[85%] m-auto'>
                    {
                        techCards.map((card, key) =>
                                <a key={key} href={card.link} className='float-left'>
                                    <div className='w-20 h-20 md:w-25 md:h-25 lg:w-30 lg:h-30 m-5 md:m-10'>
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