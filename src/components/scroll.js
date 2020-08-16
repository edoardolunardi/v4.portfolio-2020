import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Scrollbar from "smooth-scrollbar"

const Scroll = callbacks => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    Scrollbar.init(document.documentElement, {
      damping: 0.1,
      delegateTo: document,
      renderByPixels: true,
    })

    // Animate images
    const images = document.querySelectorAll(".animate-image")
    images.forEach(image => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          scroller: callbacks.container.current,
          scrub: true,
        },
      })

      tl.set(image, {
        scale: 1.3,
      }).to(image, { scale: 1 })
    })

    // Animate titles
    const titles = document.querySelectorAll(".animate-title")
    titles.forEach(title => {
      ScrollTrigger.create({
        trigger: title,
        scroller: callbacks.container.current,
        scrub: true,
        start: "top center+=300",
        toggleClass: "visible",
        once: true,
      })
    })

    return () => {
      Scrollbar.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
