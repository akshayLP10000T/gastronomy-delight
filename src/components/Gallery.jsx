import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww',
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b2/52/35/the-brew-bar.jpg?w=600&h=-1&s=1',
  'https://cache.marriott.com/content/dam/marriott-renditions/DELWI/delwi-tastes-7684-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*',
  'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2stcGYtcG9tLTEyNDIuanBn.jpg',
  'https://media.istockphoto.com/id/1792829728/photo/industrial-style-upscale-restaurant.webp?b=1&s=170667a&w=0&k=20&c=HvwTnEvv6mkAVcWczAwvibpFk5TW6NUm5rq3xwLT2Sw=',
  'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?cs=srgb&dl=pexels-igor-starkov-233202-1307698.jpg&fm=jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArkE8ug_aNv82OfMlrzxTTzf0uxUKy39xLQ&s',
  // Add more image URLs as needed
];

const Gallery = () => {

  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryEl = galleryRef.current;

    gsap.fromTo(
      galleryEl.querySelectorAll('.gallery-image'),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: galleryEl,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);


  return (
    <div id='gallery' className="min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={galleryRef}>
        <h2 className="text-3xl font-extrabold text-primary mb-6 gallery">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg border-4 border-primary gallery-image">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 object-cover gallery-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery