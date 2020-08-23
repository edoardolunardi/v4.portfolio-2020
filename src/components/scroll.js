import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"

const container = ".scroll-content"

const Scroll = callbacks => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(container),
      smooth: true,
      smoothMobile: true,
      touchMultiplier: 2.5,
      lerp: 0.07,
      scrollFromAnywhere: true,
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

    // get staggers
    const staggers = document.querySelectorAll(".transition-stagger")

    setTimeout(() => {
      locomotiveScroll.update()
      // Exposing to the global scope for ease of use.
      window.scroll = locomotiveScroll

      locomotiveScroll.on("scroll", data => {
        const { y } = data.scroll
        const { limit } = data
        const progress = y / limit
        const scale = clamp(progress, 1, 2.5)

        // animate images
        images.forEach(image => {
          setTransform(image, `scale(${scale})`)
        })

        // animate staggers
        staggers.forEach(stagger => {
          const active = stagger.classList.contains("is-inview")
          if (active) stagger.classList.add("visible")
        })
      })
    }, 400)

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
