function Location() {
    return (
        <div className="map">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8196840746414!2d36.813275511346575!3d-1.2819579987004543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1f6987718f3f%3A0xd3aa6057282f51be!2sHazina%20Towers%2013th%20floor-Nairobi!5e0!3m2!1sen!2ske!4v1699990532730!5m2!1sen!2ske" 
               width="100%" 
               height="500" 
               style={{border: "0"}} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}

export default Location
