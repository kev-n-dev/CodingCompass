import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
 
const ZoomOnScrollImage = ({ src, alt }) => {
  const imgRef = useRef(null);
   const [halfScrolled, setHalfScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scale = 1 + scrollY / 500; // Adjust the scale factor as needed
      gsap.to(imgRef.current, { scale: scale, duration: 0.1, ease: 'power1.out' });


 

      // Check if scrolled more than halfway
      const halfPage = document.body.offsetHeight / 4;
      if (scrollY >= halfPage) {
        setHalfScrolled(true);
      } else {
        setHalfScrolled(false);
      }
    };

   


    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
 
    <div className='login_portal' style={{ position: 'relative', overflow: 'hidden', height: '100vh'}}>
      <img className='portalImg'
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
            width: '100%', // Adjusted from 'Width' to 'width'
            height: '100%', // Full viewport height
            objectFit: 'cover',
            position: 'fixed', // Adjusted from 'fixed' to 'absolute'
            top: '50%', // Adjusted from '50vh' to '50%'
            left: '50%', // Adjusted from '50vh' to '50%'
            transform: 'translate(-50%, -50%)', // Adjusted from 'translate(-50vh, -50vh)' to 'translate(-50%, -50%)'
            transition: 'transform 0.1s ease-out',
            pointerEvents: halfScrolled ? 'none' : 'auto', // Disable pointer events if scrolled more than halfway
    
          }}
      />
    
    </div>
   );
};

export default ZoomOnScrollImage;
