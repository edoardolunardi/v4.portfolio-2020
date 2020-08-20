import { useEffect } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
// import Scrollbar from "smooth-scrollbar"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.min.css"

const container = "#___gatsby"

const Scroll = callbacks => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(container),
      smooth: true,
      smoothMobile: false,
      getDirection: true,
      touchMultiplier: 2.5,
      lerp: 0.07,
      scrollFromAnywhere: true,
    })

    const clamp = (val, max, min) => {
      return (val - min) / (max - min)
    }

    // get project images to animate
    const images = document.querySelectorAll(".project-image")

    setTimeout(() => {
      locomotiveScroll.update()
      // Exposing to the global scope for ease of use.
      window.scroll = locomotiveScroll

      locomotiveScroll.on("scroll", func => {
        // Update `data-direction` with scroll direction.
        console.log(func)
        const { y } = func.scroll
        const { limit } = func
        const scale = clamp(y / limit, 1, 2)
        images.forEach(image => {
          image.style.transform = `scale(${scale})`
        })
        //   document.documentElement.setAttribute("data-direction", func.direction)
      })
    }, 400)

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
    // gsap.registerPlugin(ScrollTrigger)
    // const smooth = Scrollbar.init(document.body, {
    //   damping: 0.1,
    //   renderByPixels: true,
    //   delegateTo: document,
    // })
    // ScrollTrigger.defaults({
    //   scroller: document.body,
    // })
    // ScrollTrigger.scrollerProxy(document.body, {
    //   scrollTop(value) {
    //     if (arguments.length) {
    //       smooth.scrollTop = value
    //     }
    //     return smooth.scrollTop
    //   },
    //   getBoundingClientRect() {
    //     return {
    //       top: 0,
    //       left: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //     }
    //   },
    // })
    // smooth.addListener(ScrollTrigger.update)
    // // Animate images
    // const images = document.querySelectorAll(".project-image")
    // images.forEach(image => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: image,
    //       scrub: 1,
    //     },
    //   })
    //   tl.set(image, {
    //     scale: 1.3,
    //   }).to(image, { scale: 1 })
    // })
    // // Animate titles with stagger
    // const titles = document.querySelectorAll(".animate-stagger")
    // titles.forEach(title => {
    //   ScrollTrigger.create({
    //     trigger: title,
    //     toggleClass: "visible",
    //     start: "top 85%",
    //     once: true,
    //   })
    // })
    // setTimeout(() => {
    //   ScrollTrigger.refresh()
    // }, 200)
  }, [callbacks])

  return null
}

export default Scroll
