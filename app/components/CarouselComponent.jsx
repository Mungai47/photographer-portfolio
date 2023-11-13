"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

export default function PhotoCarousel() { 
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return ( 
        <div> 
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                emulateTouch
                showArrows={false}
                showStatus={false}
                showIndicators
                centerMode
                centerSlidePercentage={isMobile ? 100 : 50}
                responsive={{
                    superLargeDesktop: {
                        breakpoint: { max: 4000, min: 3000 },
                        items: 5,
                    },
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 3,
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 2,
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                    },
                }}
            >
                <div className="mx-3">
                    <Image src="/images/image1.jpg" alt="Image 1" width={500} height={300} objectFit="cover" quality={100} className="rounded-lg" />
                </div>
                <div className="mx-3">
                    <Image src="/images/image2.jpg" alt="Image 2" width={500} height={300} objectFit="cover" quality={100} className="rounded-lg" />
                </div>
                <div className="mx-3">
                    <Image src="/images/image3.jpg" alt="Image 3" width={500} height={300} objectFit="cover" quality={100} className="rounded-lg" />
                </div>
                <div className="mx-3">
                    <Image src="/images/image4.jpg" alt="Image 4" width={500} height={300} objectFit="cover" quality={100} className="rounded-lg" />
                </div>
                <div className="mx-3">
                    <Image src="/images/image6.jpg" alt="Image 6" width={500} height={300} objectFit="cover" quality={100} className="rounded-lg" />
                </div>
            </Carousel>
        </div> 
    ); 
};
