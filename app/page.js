import Image from "next/image";
import PhotoCarousel from "./components/CarouselComponent";
import ImageGrid from "./components/ImageGrid";



function page() {

  return (
    <main className="text-text pt-20">
      <div className="text-center py-10">
        <p>Andrew Gursky</p>
        <h1 className="text-4xl font-normal  md:text-7xl lg:text-9xl py-3">Photographer</h1>
      </div>
      <div>
        <PhotoCarousel />
      </div>
      <div className="w-4/5 mx-auto py-12 md:py-16 lg:py-20">
        <div className="text-4xl md:text-4xl lg:text-6xl text-center md:text-left pb-4">
          <h2>
            I am a professional photographer who specializes in capturing life&apos;s most precious moments...
          </h2>
        </div>
        <div className="text-center md:text-left py-4 md:w-1/2 md:ml-auto">
          <h5 className="py-4 leading-tight text-xl md:text-2xl">
            From intimate weddings to grand corporate events, I have the skills and experience to create stunning photographs that you&apos;ll treasure forever.
          </h5>
          <p className="py-4 text-pale-text text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id consequat lacus. Pellentesque nibh sem, posuere id pulvinar vitae, efficitur a enim. Donec venenatis quis nisi id dignissim. Sed tempus libero vel purus egestas, non porta nisi aliquet. Donec id mi eu felis viverra imperdiet. Nulla vel est mattis, aliquam libero vitae, volutpat turpis. Ut in metus magna. Quisque a commodo neque, ut euismod risus. Morbi pretium justo nec risus sollicitudin viverra. Etiam placerat diam eget ex accumsan ornare.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="py-4 px-6 border rounded-full text-lg hover:bg-green-500 hover:text-white">Read More</button>
        </div>
      </div>
      <div className="w-4/5 mx-auto">
        <ImageGrid />
      </div>
    </main>
  )
}

export default page

