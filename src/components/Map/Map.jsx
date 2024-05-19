import React from 'react'
import "./Map.css"
const Map = () => {
  return (
    <>
    <address id="address">
      <div className="responsive-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7536.679925928975!2d72.8352875364256!3d19.18034821149563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6fa05950f41%3A0xbee9d44fd0a39f11!2sMalad%2C%20Chincholi%20Bunder%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400064!5e0!3m2!1sen!2sin!4v1711020797420!5m2!1sen!2sin" width="600" height="450"  allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </address>
    </>
  )
}

export default Map
