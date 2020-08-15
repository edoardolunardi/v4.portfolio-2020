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
    document.querySelectorAll(".animate-image").forEach(image => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          scroller: callbacks.container.current,
          scrub: true,
          markers: true,
        },
      })

      tl.set(image, {
        scale: 1.5,
      }).to(image, { scale: 1 })
    })

    // Animate titles
    document.querySelectorAll(".animate-title").forEach(title => {
      //   const tl = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: title,
      //       scroller: callbacks.container.current,
      //       scrub: true,
      //       markers: true,
      //     },
      //   })

      //   tl.set(title, {
      //     scale: 1.5,
      //   }).to(title, { scale: 1 })
      ScrollTrigger.create({
        trigger: title,
        scroller: callbacks.container.current,
        scrub: true,
        markers: true,
      })
    })

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
