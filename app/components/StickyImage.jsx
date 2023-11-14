import Image from "next/image"

function StickyImage() {
    return (
        <div className="relative py-5" style={{height: '75vh'}}>
            <Image src="/images/image5.jpg" alt="Description of image" layout="fill" quality={100} objectFit="cover" className="sticky top-0 z-10 w-full h-full"/>
            <div className="absolute bottom-0 z-20  w-1/2 md:w-1/4 pl-5 py-4" >
                <p className="text-xl md:text-2xl lg:text-3xl font-bold">&quot;A photograph is a secret about a secret. The more it tells you the less you know.</p>
                <p className="text-pale-text">Andrew Gursky</p>
                {/* More content... */}
            </div>
        </div>
    )
}

export default StickyImage
