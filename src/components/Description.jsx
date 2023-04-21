import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = (props) => {
  return (
    <div>
    <div>

    {/* <motion.img
    width={'15%'}
    src='/img/icon.png'
    alt=''


    // анимация
    animate={{rotate:360}}
    transiton={{
      delay:2,
      duration:5,
      repeat: Infinity,
      repeatDelay: 0.5,
      repeatType: 'reverse',
      type: 'intertia'
    }}
    />

    <motion.p
    initial={{
      x:-1000,
      opacity:0
    }}
    animate={{
      x: 500,
      opacity: 1
    }}
    transiton={{
      delay:1,
      duration:2,
      type: 'tween'
    }}
      >
      Текст который появится
      </motion.p> */}
      </div>
      <motion.div id='div1'
        initial={{
          x:-1000,
          opacity: 0
        }}

        animate={{
          x:0,
          opacity: 1
        }}

        transition={{
          delay: 1,
          duration: 2
        }}
      >Complete documentation...
      </motion.div>

      <motion.div id='div2'

      initial={{
        opacity:0
      }}

      animation={{
        y:0,
        opacity:1
      }}

      transition={{
        delay:1,
        duration:2
      }}
      >
        <motion.img
        src='/img/banner-new.jpg'
        className='banner'
        width={850}
        initial={{
          opcity:0.6,
        }}

        transition={{
          duration:5
        }}

        whileTap={{
          rotate:360
        }}/>

      </motion.div>

      <motion.div id='div3'

      initial={{
        opacity:0,
        scale:0.5
      }}

      animation={{
        opacity:1,
        scale: 1
      }}

      transition={{
        duration:2
      }}
      >
        <motion.img
        src='/img/ball.jpg'
        className='ball'
        width={200}
        initial={{
          opcity:0.6,
        }}

        transition={{
          duration:5
        }}

        whileHover={{
          scale: 1.5,
          transition:{
            duration: 2
          }
        }}/>

      </motion.div>
<div id='divImg'>
      <motion.div id='div4'

      initial={{
        opacity:0,
        scale:0.5
      }}

      animation={{
        opacity:1,
        scale: 1
      }}

      transition={{
        duration:2
      }}
      >
        <motion.img drag='x'
        src='/img/ball.jpg'
        className='ball'
        width={200}
        initial={{
          opcity:0.6,
        }}

        transition={{
          duration:5
        }}

        whileDrag={{
          scale: 1.5,
          transition:{
            duration: 2
          }
        }}/>

      </motion.div>

      <motion.button className='btn-primary'
      whileHover={{
        scale:1.2
      }}>
      Нажми
      </motion.button>
      </div>
    </div>
  )
}

export default Description