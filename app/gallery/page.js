import Image from 'next/image'

function Page() {
  const images = [
    "/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg", "/images/image4.jpg", "/images/image8.jpg", "/images/image6.jpg", "/images/image7.jpg",
    "/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg", "/images/image4.jpg", "/images/image8.jpg", "/images/image6.jpg", "/images/image7.jpg",
    "/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg", "/images/image4.jpg", "/images/image8.jpg", "/images/image6.jpg", "/images/image7.jpg",
    "/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg", "/images/image4.jpg", "/images/image8.jpg", "/images/image6.jpg", "/images/image7.jpg",
    "/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg", "/images/image4.jpg", "/images/image8.jpg", "/images/image6.jpg", "/images/image7.jpg",
    "/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg", "/images/image4.jpg", "/images/image8.jpg", "/images/image6.jpg", "/images/image7.jpg",
  ] // Replace 'urlX' with your actual image URLs

  return (
    <div>
      <p className="text-center text-2xl md:text-4xl lg:text-6xl underline underline-offset-8 text-text py-6">Gallery</p>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 py-5">
        {images.map((image, index) => (
          <div key={index} className="transform transition duration-500 hover:scale-110">
            <Image src={image} alt={`Gallery ${index}`} width={500} height={300} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
