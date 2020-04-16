/** @jsx jsx */
import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react'
import { jsx, Flex, Box, Heading } from 'theme-ui'
import { motion, useAnimation, useReducedMotion } from 'framer-motion'
import theme from '../../theme'
import sleep from '../../util/sleep'

const easeVeryOut = [0, 0, 0.2, 1]

const textTransition = {
  duration: 0.8,
  ease: easeVeryOut,
  delay: 0.5
}

const logoVariants = {
  root: {
    hidden: {
      // boxShadow: '0 0 1rem 0 rgba(250,250,250,0.0)',
      border: '0.2em rgba(181,25,29,0) solid',
      transition: {
        duration: 1
      }
    },
    boxShadow: {
      // boxShadow: '0 0 1rem 0 rgba(250,250,250,0.8)',
      border: '0.2em rgba(181,25,29,1) solid',
      transition: {
        duration: 2,
        delay: 1.2,
        ease: 'easeInOut'
      }
    }
  },
  hex: {
    hidden: {
      fill: theme.colors.background,
      transition: {
        duration: 1
      }
    },
    stroke: {
      transition: {}
    },
    visible: {
      fill: 'rgba(14,63,74, 1)',
      transition: {
        duration: 1
      }
    }
  },
  pawn: {
    hidden: {
      fill: theme.colors.background,
      transition: {
        duration: 1
      }
    },
    stroke: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    },
    visible: {
      fill: 'rgba(188,34,38, 1)',
      transition: {
        duration: 1
      }
    }
  },
  stroke: {
    hidden: {
      pathLength: 0,
      stroke: theme.colors.text,
      strokeWidth: 5,
      transition: {
        duration: 1
      }
    },
    stroke: {
      pathLength: 1,
      transition: {
        duration: 1
      }
    },
    visible: {
      stroke: 'rgba(0,0,0,0)',
      transition: {
        duration: 1
      }
    }
  },
  textL: {
    hidden: {
      x: '100%',
      opacity: 1
    },
    stroke: {
      x: '0',
      transition: textTransition
    },
    visible: {
      opacity: 0,
      transition: {
        duration: 0.8
      }
    }
  },
  textR: {
    hidden: {
      x: '-100%',
      opacity: 1
    },
    stroke: {
      x: '0',
      transition: textTransition
    },
    visible: {
      opacity: 0,
      transition: {
        duration: 0.8
      }
    }
  }
}

const AnimLogo = React.memo(({ animate, ...props }) => {
  const controls = useAnimation()
  useEffect(() => {
    const action = async () => {
      if (animate === null) return
      if (animate) {
        controls.start('boxShadow')
        await controls.start('stroke')
        await controls.start('visible')
      } else {
        controls.set('visible')
      }
    }
    action()
  }, [controls, animate])
  return (
    <motion.div
      sx={{
        display: 'inline-block',
        borderRadius: '1em',
        position: 'relative',
        backgroundColor: 'background' // it appears the floor here is made out of floor
      }}
      variants={logoVariants.root}
      animate={controls}
      initial="hidden"
      {...props}
    >
      <Box sx={{ paddingTop: '100%' }} />
      <Flex
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <motion.svg
          viewBox="0 0 694.78 694.17"
          sx={{ height: '80%', width: '80%' }}
        >
          <motion.g transform="translate(-64.57)" variants={logoVariants.hex}>
            <motion.path
              id="polyline8"
              d="m190.97 610.42 314.6 83.75 253.78-254.61-84.21-312.23z"
              variants={logoVariants.stroke}
            />
            <motion.path
              id="polyline10"
              d="M 633.06,83.77 318.35,0 64.57,254.61 149.19,568.35z"
              variants={logoVariants.stroke}
            />
          </motion.g>
          <motion.g variants={logoVariants.pawn} transform="translate(-64.57)">
            <motion.path
              transform="translate(-88.04,-152.92)"
              d="m584.31 374h-32.88a74 74 0 0021.57-52.47c0-40.79-32.7-73.86-73-73.86s-73 33.07-73 73.86a74 74 0 0021.57 52.47h-32.88a19.85 19.85 0 00-19.74 20v2.95a19.85 19.85 0 0019.74 19.95h168.62a19.85 19.85 0 0019.74-19.95v-2.95a19.85 19.85 0 00-19.74-20z"
              variants={logoVariants.stroke}
            />
            <motion.path
              d="m311.31 471.47h197.49c8.7477 0 15.79 7.0423 15.79 15.79v17.36c0 8.7477-7.0423 15.79-15.79 15.79h-197.49c-8.7477 0-15.79-7.0423-15.79-15.79v-17.36c0-8.7477 7.0423-15.79 15.79-15.79z"
              variants={logoVariants.stroke}
            />
            <motion.path
              d="m279.7 535.78h264.52c9.839 0 17.76 7.921 17.76 17.76v28.1c0 9.839-7.921 17.76-17.76 17.76h-264.52c-9.839 0-17.76-7.921-17.76-17.76v-28.1c0-9.839 7.921-17.76 17.76-17.76z"
              variants={logoVariants.stroke}
            />
            <motion.path
              transform="translate(-88.04,-152.92)"
              d="m407.57 609c54.85-98.7 35.49-176.82 35.49-176.82h113.88s-19.36 78.13 35.49 176.82z"
              variants={logoVariants.stroke}
            />
          </motion.g>
        </motion.svg>
      </Flex>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Heading
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            clipPath: 'polygon(-1000% 0%, 100% 0%, 100% 100%, -1000% 100%)',
            fontSize: '3rem',
            flex: '1 0 0'
          }}
        >
          <motion.div
            sx={{ display: 'inline-block', right: 0, position: 'absolute' }}
            variants={logoVariants.textL}
          >
            RED
          </motion.div>
        </Heading>
        <Box sx={{ width: '20%' }} />
        <Heading
          sx={{
            clipPath: 'polygon(0% 0%, 1000% 0%, 1000% 100%, 0 100%)',
            fontSize: '3rem',
            flex: '1 0 0'
          }}
        >
          <motion.div
            sx={{ display: 'inline-block' }}
            variants={logoVariants.textR}
          >
            PWN
          </motion.div>
        </Heading>
      </Box>
    </motion.div>
  )
})

const pageTransition = {
  delay: 2,
  duration: 2,
  ease: [0.5, 0, 0.5, 1]
}

const mastheadTransition = {
  delay: pageTransition.delay + 0.5,
  duration: 2,
  ease: pageTransition.ease
}

const pageVariants = {
  mastheadWrapper: {
    initial: {
      y: 'calc(50vh - 50%)'
    },
    shown: {
      y: 'calc(30vh - 50%)',
      transition: mastheadTransition
    }
  },
  logo: {
    initial: {
      width: '50vw'
    },
    shown: {
      width: '7rem',
      transition: pageTransition
    }
  },
  wordCtf: {
    initial: {
      width: '0'
    },
    shown: {
      width: 'auto',
      transition: pageTransition
    }
  },
  wordCtfInner: {
    initial: {
      x: '-150%'
    },
    shown: {
      x: '0',
      transition: pageTransition
    }
  },
  hider: {
    initial: {
      backgroundColor: theme.colors.background
    },
    shown: {
      backgroundColor: 'rgba(0,0,0,0)',
      transition: {
        ...mastheadTransition,
        delay: mastheadTransition.delay + 0.5
      }
    }
  }
}

export default function App() {
  const shouldReduceMotion = useReducedMotion()
  const [shouldAnimate, setShouldAnimate] = useState(null)
  useLayoutEffect(() => {
    if (shouldReduceMotion) {
      setShouldAnimate(false)
      return
    }
    const root = document.getElementById('app')
    if (root.scrollTop !== 0) {
      setShouldAnimate(false)
      return
    }
    setShouldAnimate(true)
    // We only want to update shouldAnimate on mount; we don't care if anything
    // changes after mount, since the animation already played.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const controls = useAnimation()

  const [isIn, setIsIn] = useState(false)
  const onIn = useCallback(() => setIsIn(true), [])

  const [hasScrollbar, setHasScrollbar] = useState()
  useLayoutEffect(() => {
    const root = document.getElementById('app')
    setHasScrollbar(root.scrollHeight > root.clientHeight)
  }, [])
  const [isScrollLocked, setIsScrollLocked] = useState(true)
  useEffect(() => {
    if (shouldAnimate === false) {
      setIsScrollLocked(false)
      setIsIn(true)
    }
  }, [shouldAnimate])
  useLayoutEffect(() => {
    if (hasScrollbar === undefined) return
    const root = document.getElementById('app')
    const body = document.body
    if (!hasScrollbar) {
      root.style.overflowY = 'auto'
    } else {
      if (isScrollLocked) {
        root.style.overflowY = 'hidden'
        body.style.overflowY = 'scroll'
      } else {
        root.style.overflowY = 'auto'
        body.style.overflowY = 'hidden'
      }
    }
  }, [isScrollLocked, hasScrollbar])
  useEffect(() => {
    const action = async () => {
      await sleep(2500)
      setIsScrollLocked(false)
    }
    action()
  }, [])
  useEffect(() => {
    if (shouldAnimate === null) return
    if (shouldAnimate) {
      controls.start('shown')
    } else {
      controls.set('shown')
    }
  }, [controls, shouldAnimate])

  return (
    <motion.div
      sx={{
        position: 'relative',
        minHeight: '100vh'
      }}
      animate={controls}
      initial="initial"
      onAnimationComplete={onIn}
    >
      <motion.div
        sx={{
          height: '75vh',
          backgroundColor: '#b5191d',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 65vh, 50% 75vh, 0% 65vh)'
        }}
      />
      {!isIn && (
        <motion.div
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          variants={pageVariants.hider}
        />
      )}
      <motion.div
        sx={{
          position: 'absolute',
          top: '0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        variants={pageVariants.mastheadWrapper}
      >
        <motion.div variants={pageVariants.logo}>
          <AnimLogo
            animate={shouldAnimate}
            sx={{ width: '100%', zIndex: 1000 }}
            layoutId="logo"
          />
        </motion.div>
        <motion.div
          sx={{
            clipPath: 'polygon(-2rem 0%, 100% 0%, 100% 100%, -2rem 100%)',
            zIndex: 500
          }}
          variants={pageVariants.wordCtf}
        >
          <Heading sx={{ fontSize: '4rem' }}>
            <motion.div
              sx={{ display: 'inline-block', marginLeft: '2rem' }}
              variants={pageVariants.wordCtfInner}
            >
              CTF
            </motion.div>
          </Heading>
        </motion.div>
      </motion.div>
      <Box p={4} sx={{ height: '100vh' }}>
        Content
      </Box>
    </motion.div>
  )
}
