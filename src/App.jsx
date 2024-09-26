import React from 'react'
import Foreground from './components/Foreground'
import LocomotiveScroll from 'locomotive-scroll';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Feature from './components/Feature';
import Separator from './components/Separator';
import Reservation from './components/Reservation';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const locomotiveScroll = new LocomotiveScroll();

gsap.registerPlugin(ScrollTrigger)

// const locomotiveScroll = new LocomotiveScroll();
const App = () => {
  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.from('.navbar-item', {
      opacity: 0,
      x: -40,
      stagger: .2,
      duration: .5
    })

    tl.from('.center-home', {
      opacity: 0,
      duration: .8,
      delay: .4,
      y: 100,
    })

    gsap.from('.left-line', {
      x: -70,
      duration: .6,
      delay: 3
    })
    
    gsap.from('.right-line', {
      x: 70,
      duration: .6,
      delay: 3
    })

    gsap.from('.text-new-flavour', {
      opacity: 0,
      duration: .6,
      delay: 3
    })

    gsap.from('.about', {
      opacity: 0,
      duration: .7,
      y: 100,
      scrollTrigger: {
          trigger: ".about",
          toggleActions: 'play none none reverse',
          start: "top 80%",
          end: "top 90%"
      }
    })

    gsap.from('.about-img', {
      opacity: 0,
      duration: .7,
      x: 40,
      scrollTrigger: {
        trigger: ".about-img",
        toggleActions: 'play none none reverse',
        start: "top 80%",
        end: "top 90%",
        scrub: 1
    }
    })

    gsap.from('.about-p p', {
      opacity: 0,
      duration: .4,
      x: -20,
      stagger: .3,
      scrollTrigger: {
        trigger: ".about-p p",
        toggleActions: 'play none none reverse',
        scrub: 1
    }
    })

    gsap.from('.feature', {
      opacity: 0,
      duration: .7,
      y: 100,
      scrollTrigger: {
          trigger: ".feature",
          toggleActions: 'play none none reverse',
          start: "top 80%",
          end: "top 90%"
      }
    })

    gsap.from('.card', {
      opacity: 0,
      duration: .4,
      stagger: .2,
      scrollTrigger: {
        trigger: ".card",
        scrub: 1,
        start: "top 60%",
        end: "top 40%",
    }
    })

    gsap.from('.reserve', {
      opacity: 0,
      duration: .7,
      y: 100,
      scrollTrigger: {
          trigger: ".reserve",
          toggleActions: 'play none none reverse',
          start: "top 80%",
          end: "top 90%"
      }
    })

    gsap.from('.reserve-form', {
      opacity: 0,
      y: 0,
      duration: .5,
      scrollTrigger: {
        trigger: ".reserve-form",
        start: "top 80%",
        end: "top 50%",
        scrub: 2
      }
    })

    gsap.from('.gallery', {
      opacity: 0,
      duration: .7,
      y: 100,
      scrollTrigger: {
          trigger: ".gallery",
          toggleActions: 'play none none reverse',
          start: "top 80%",
          end: "top 90%"
      }
    })

    gsap.from('.gallery-img', {
      opacity: 0,
      duration: .4,
      stagger: .2,
      x: -50,
      scrollTrigger: {
        trigger: ".gallery-img",
        scrub: 1,
        start: "top 90%",
        end: "top 40%",
    }
    })


  })

  return (
    <div data-scroll className='bg-[#FDF2E9]'>
      <Background />
      <Foreground />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Feature />
      <Separator />
      <Reservation />
      <Separator />
      <Gallery />
      <Separator />
      <Contact />
      <Separator />
      <Footer />
    </div>
  )
}

export default App