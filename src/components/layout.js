import React, { useState } from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import useMediaQuery from "../hooks/useMediaQuery"
import useBrowserDetect from "../hooks/useBrowserDetect"
import Header from "../components/header"
import Scroll from "../components/scroll"
import LazyVideo from "../components/lazyVideo"
import Cursor from "../components/cursor"
// import Loader from "../components/loader"
import ChangeBrowser from "../components/changeBrowser"

const Main = styled.main`
  padding: ${props => props.theme.paddings.content};
  background-color: ${props => props.theme.colors.isabelline};
  width: 100%;
  box-sizing: border-box;
`

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const Layout = ({ children, location }) => {
  const isMobile = useMediaQuery("md")
  const { isValidBrowser } = useBrowserDetect()
  //   const [showLoader, setShowLoader] = useState(true)

  return isValidBrowser ? (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={location.pathname}
        transition={{ duration: 0.3 }}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {/* Handles scroll animations */}
        <Scroll location={location} isMobile={isMobile} />
        {/* Lazy load videos */}
        <LazyVideo location={location} />
        {!isMobile && <Cursor />}
        <Main data-scroll-container>
          <Header location={location.pathname} />
          {children}
        </Main>
      </motion.div>
    </AnimatePresence>
  ) : (
    <ChangeBrowser />
  )

  //   return isValidBrowser ? (
  //     <AnimatePresence exitBeforeEnter>
  //       {showLoader ? (
  //         <motion.div
  //           key="loader"
  //           transition={{ duration: 1.3, delay: 0.5 }}
  //           animate={{ y: 0 }}
  //           exit={{ y: "-200vh" }}
  //           onAnimationComplete={() => setShowLoader(false)}
  //         >
  //           <Loader />
  //         </motion.div>
  //       ) : (
  //         <motion.div
  //           key="content"
  //           transition={{ duration: 0.8 }}
  //           initial={{ opacity: 0, y: 50 }}
  //           animate={{ opacity: 1, y: 0 }}
  //         >
  //           <Scroll location={location} />
  //           <Main>{children}</Main>
  //         </motion.div>
  //       )}
  //     </AnimatePresence>
  //   ) : (
  //     <ChangeBrowser />
  //   )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
