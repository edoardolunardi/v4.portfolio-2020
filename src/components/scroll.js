import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"

const Scroll = ({ location, isTouchDevice, container }) => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: container.current,
      smooth: !isTouchDevice,
      lerp: 0.07,
    })

    window.locomotiveScroll = locomotiveScroll

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

      const mobileLimit = container.current.scrollHeight

      locomotiveScroll.on("scroll", data => {
        const { y } = data.scroll
        const { limit } = data
        const progress = y / limit
        const mobileProgress = y / mobileLimit
        const scale = isTouchDevice
          ? clamp(mobileProgress, 1, 2.5)
          : clamp(progress, 1, 2.5)

        // animate images
        images.forEach(image => {
          setTransform(image, `scale(${scale})`)
        })
      })
    }, 500)

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [location, isTouchDevice, container])

  return null
}

export default Scroll
