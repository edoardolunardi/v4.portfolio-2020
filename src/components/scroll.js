import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Scrollbar from "smooth-scrollbar"

const Scroll = callbacks => {
  const container = document.body
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

    // Animate titles
    const titles = document.querySelectorAll(".animate")
    titles.forEach(title => {
      ScrollTrigger.create({
        trigger: title,
        scroller: container,
        scrub: true,
        markers: true,
        toggleClass: "visible",
        end: "top center+=300",
        once: true,
      })
    })

    // Animate content
    const content = document.querySelectorAll(".animate")
    content.forEach(c => {
      ScrollTrigger.create({
        trigger: c,
        scroller: container,
        scrub: true,
        markers: true,
        toggleClass: "visible",
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
