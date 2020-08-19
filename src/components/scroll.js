import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Scrollbar from "smooth-scrollbar"

const Scroll = callbacks => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const smooth = Scrollbar.init(document.body, {
      damping: 0.1,
      renderByPixels: true,
      delegateTo: document,
    })

    ScrollTrigger.defaults({
      scroller: document.body,
    })

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          smooth.scrollTop = value
        }
        return smooth.scrollTop
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    smooth.addListener(ScrollTrigger.update)

    // Animate images
    const images = document.querySelectorAll(".project-image")
    images.forEach(image => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          scrub: true,
        },
      })
      tl.set(image, {
        scale: 1.3,
      }).to(image, { scale: 1 })
    })

    // Animate titles with stagger
    const titles = document.querySelectorAll(".animate-stagger")
    titles.forEach(title => {
      ScrollTrigger.create({
        trigger: title,
        toggleClass: "visible",
        start: "top 85%",
        once: true,
      })
    })

    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 200)
  }, [callbacks])

  return null
}

export default Scroll
