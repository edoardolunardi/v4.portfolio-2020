import { useRef, useEffect } from "react"
import debounce from "lodash/debounce"

const useSmoothScroll = (ref, isDesktop) => {
  const current = useRef(0)
  const target = useRef(0)
  const rafId = useRef(null)
  const rafActive = useRef(false)
  const ease = 0.07

  useEffect(() => {
    const setTransform = (el, transform) => {
      if (el) {
        el.style.transform = transform
        el.style.WebkitTransform = transform
      }
    }

    const startAnimation = () => {
      if (!rafActive.current) {
        rafActive.current = true
        rafId.current = requestAnimationFrame(updateAnimation)
      }
    }

    const updateAnimation = () => {
      const diff = target.current - current.current
      const delta = Math.abs(diff) < 0.1 ? 0 : diff * ease

      if (delta) {
        current.current += delta
        current.current = parseFloat(current.current.toFixed(2))
        rafId.current = requestAnimationFrame(updateAnimation)
      } else {
        current.current = target.current
        rafActive.current = false
        cancelAnimationFrame(rafId.current)
      }

      setTransform(ref.current, `translate3d(0px, ${-current.current}px, 0px)`)
    }

    const setupAnimation = () => {
      document.body.style.height = `${ref.current.clientHeight}px`
      startAnimation()
    }

    const updateScroll = () => {
      target.current = window.scrollY || window.pageYOffset
      startAnimation()
    }

    if (isDesktop) {
      setTimeout(() => {
        setupAnimation()
      }, 200)

      window.addEventListener("scroll", updateScroll)
      window.addEventListener("resize", debounce(setupAnimation, 100))
      return () => {
        window.removeEventListener("scroll", updateScroll)
        window.removeEventListener("resize", setupAnimation)
      }
    }
  }, [isDesktop, ref])
}

export default useSmoothScroll
