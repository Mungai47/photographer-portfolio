import Image from 'next/image'

function page() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="text-text ">
        <h2 className="text-center md:text-left py-5 text-5xl md:text-7xl lg:text-9xl font-semibold">About Me</h2>
        <div style={{ width: '100%' }}>
          <Image src="/images/image5.jpg" layout="responsive" width={500} height={300} quality={100} objectFit="cover" alt="image no 5" />
        </div>
        <h4 className="text-center md:text-left text-2xl md:text-4xl lg:text-7xl font-normal py-10">From intimate weddings to grand corporate events, I have the skills and experience to create stunning photographs that you&apos;ll treasure forever.</h4>
        <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 py-5">
          <div>
            <h5 className="py-4 text-2xl font-medium">I understand that every client is unique, and I work closely with you to understand your specific needs and preferences.</h5>
            <p className="text-pale-text py-4 text-lg font-normal">In congue vehicula eros eu malesuada. Pellentesque vitae dolor nec elit tincidunt mattis ac et nibh. Proin facilisis blandit bibendum. Pellentesque a cursus justo. Nullam viverra ipsum sed tempor pulvinar. Praesent ac enim condimentum, mollis turpis in, commodo libero. Nunc eu egestas felis. Mauris rhoncus vel ex sit amet pellentesque. Aliquam pretium arcu tristique nisl tincidunt semper. Nullam blandit ipsum vel arcu blandit, nec lobortis quam sagittis.</p>
            <h5 className="py-4 text-2xl font-medium">My goal is to create photographs that not only reflect the beauty and emotion of your special day, but also tell the story of who you are.</h5>
            <p className="text-pale-text py-4 text-lg font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin ante vitae mauris consectetur, at mattis massa congue. Sed vel convallis neque. Pellentesque tempor lacus id porta lacinia. Duis vitae eleifend neque. Mauris tempus tincidunt eleifend. Nam sodales feugiat lacus scelerisque iaculis. Donec eu tincidunt lectus. Phasellus id risus laoreet velit molestie rutrum. Donec sed libero interdum, maximus justo et, sodales diam.</p>
          </div>
          <div style={{ position: 'relative', height:"100%" }}>
            <Image src="/images/image14.jpg" alt="Image 14" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
        <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 py-5">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default page
