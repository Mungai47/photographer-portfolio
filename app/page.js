import Image from "next/image";
import PhotoCarousel from "./components/CarouselComponent";



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
    </main>
  )
}

export default page

