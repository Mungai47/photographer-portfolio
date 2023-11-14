import Image from "next/image"

function ImageGrid() {
    const commonClasses = "w-full h-full relative";

    return (
        <div className="py-5 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-4 justify-center items-center h-screen">
            <div className={commonClasses}>
                <Image src="/images/image7.jpg" alt="Description of image 7" layout="fill" quality={100} objectFit="cover" className="rounded-lg mx-3 w-full h-full absolute"/>
            </div>
            <div className={commonClasses}>
                <Image src="/images/image8.jpg" alt="Description of image 8" layout="fill" quality={100} objectFit="cover" className="rounded-lg mx-3 w-full h-full absolute"/>
            </div>
        </div>
    )
}

export default ImageGrid
