import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Scrollbar from "smooth-scrollbar"

const Scroll = callbacks => {
  const container = typeof window !== "undefined" ? document.body : null
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const smooth = Scrollbar.init(container, {
      damping: 0.1,
      renderByPixels: true,
    })

    ScrollTrigger.scrollerProxy(container, {
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
          scroller: container,
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
        scroller: container,
        markers: true,
        toggleClass: "visible",
        start: "top 85%",
        once: true,
      })
    })

    // Animate content
    const content = document.querySelectorAll(".animate")
    content.forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        scroller: container,
        scrub: true,
        toggleClass: "visible",
        start: "top 85%",
        once: true,
      })
    })

    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  }, [callbacks, container])

  return null
}

export default Scroll
