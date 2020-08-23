import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"

const container = "[data-scroll-container]"

const Scroll = callbacks => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(container),
      smooth: true,
      smoothMobile: false,
      touchMultiplier: 2.5,
      lerp: 0.07,
    })

    const clamp = (val, max, min) => {
      return (val - min) / (max - min)
    }

    const setTransform = (el, transform) => {
      el.style.transform = transform
      el.style.WebkitTransform = transform
    }

    // get project images to animate
    const images = document.querySelectorAll(".project-image")

    setTimeout(() => {
      locomotiveScroll.update()

      locomotiveScroll.on("scroll", data => {
        const { y } = data.scroll
        const { limit } = data
        const progress = y / limit
        const scale = clamp(progress, 1, 2.5)

        // animate images
        images.forEach(image => {
          setTransform(image, `scale(${scale})`)
        })
      })
    }, 500)

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
