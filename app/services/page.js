import React from 'react'

function ServicesPage() {
  const services = [
    { name: 'Commercial', Description: 'Ultricies arcu velit, sit amet cursus risus pulvinar vel. In tortor mauris, placerat egestas lectus quis, mattis pulvinar arcu. Proin tristique fringilla ultrices.' },
    { name: 'Wedding', Description: 'Maecenas ultricies arcu velit, sit amet cursus risus pulvinar vel. In tortor mauris, placerat egestas lectus quis, mattis pulvinar arcu. Proin tristique fringilla ultrices. Sed vestibulum tempus mi ultricies sollicitudin.' },
    { name: 'Portrait Photography', Description: 'Maecenas ultricies arcu velit, sit amet cursus risus pulvinar vel. In tortor mauris, placerat egestas lectus quis, mattis pulvinar arcu. Proin tristique fringilla ultrices. Sed vestibulum tempus mi ultricies sollicitudin. Proin tristique fringilla ultrices. Sed vestibulum tempus mi ultricies sollicitudin.' },
    // Add more services as needed
  ]

  return (
    <div className="w-4/5 mx-auto text-text pb-10">
      <h1 className="text-3xl md:text-5xl lg:text-7xl underline underline-offset-8 py-10">Services</h1>
      <p className="text-xl md:text-2xl md:text-center">
        I understand that every client is unique, and I work closely with you to understand your specific needs and preferences.
        My goal is to create photographs that not only reflect the beauty and emotion of your special day, but also tell the story of who you are. I use only the highest quality equipment and editing software to ensure that your photographs are sharp and vibrant.
        I also offer a wide range of printing and framing options to suit your budget and decor.
      </p>
      {services.map((service, index) => (
        <div key={index}>
          <h4 className="text-2xl md:text-3xl lg:text-5xl py-10">{service.name}</h4>
          <p className="text-xl text-pale-text">{service.Description}</p>
        </div>
      ))}
    </div>
  )
}

export default ServicesPage
