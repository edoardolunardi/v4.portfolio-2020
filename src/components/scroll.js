import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
// // We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll"

const Scroll = callbacks => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let locomotiveScroll

    locomotiveScroll = new LocomotiveScroll({
      el: callbacks.container.current,
      smooth: true,
      smoothMobile: true,
      lerp: 0.07,
      firefoxMultiplier: 100,
    })

    setTimeout(() => {
      locomotiveScroll.update()
    }, 200)

    locomotiveScroll.on("scroll", () => {
      ScrollTrigger.update()
    })

    ScrollTrigger.scrollerProxy(callbacks.container.current, {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScroll.scrollTo(value, 0, 0)
          : locomotiveScroll.scroll.instance.scroll.y
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

    ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update())

    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 200)

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
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
