import React, { useContext, useRef } from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import styled, { css } from "styled-components"
import useMediaQuery from "../hooks/useMediaQuery"
import useBrowserDetect from "../hooks/useBrowserDetect"
import Context from "../components/context"
import Header from "../components/header"
import Scroll from "../components/scroll"
import Cursor from "../components/cursor"
import Loader from "../components/loader"
import ChangeBrowser from "../components/changeBrowser"

const Container = styled.div`
  padding: ${props => props.theme.paddings.content};
  background-color: ${props => props.theme.colors.isabelline};
  width: 100%;
  box-sizing: border-box;
`

const Main = styled.main``

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
  const { showLoader } = useContext(Context)
  const scrollContentRef = useRef(null)

  return isValidBrowser ? (
    <>
      {showLoader && <Loader />}
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
          <Scroll
            location={location}
            isMobile={isMobile}
            container={scrollContentRef}
          />
          {!isMobile && <Cursor />}
          <Container ref={scrollContentRef}>
            <Header location={location.pathname} />
            <Main>{children}</Main>
          </Container>
        </motion.div>
      </AnimatePresence>
    </>
  ) : (
    <ChangeBrowser />
  )

  //   return isValidBrowser ? (
  //     <AnimatePresence exitBeforeEnter>
  //       {showLoader ? (
  //   <motion.div
  //     key="loader"
  //     transition={{ duration: 1.3, delay: 0.5 }}
  //     animate={{ y: 0 }}
  //     exit={{ y: "-200vh" }}
  //     onAnimationComplete={() => setShowLoader(false)}
  //   >
  //     <Loader />
  //   </motion.div>
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
