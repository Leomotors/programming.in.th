import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

const black = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)'
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(0, 0, 0, 1)'
  }
}

const grey = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)'
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(160, 160, 160, 1)'
  }
}

export const Loading = () => {
  const initState = true
  const refreshTime = 1
  const [state, setState] = useState(initState)

  useEffect(() => {
    const id = setInterval(() => {
      setState(s => !s)
    }, 1300)

    return () => clearInterval(id)
  }, [setState])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-white">
      <motion.svg
        viewBox="0 0 877 250"
        className="-my-16 w-80 stroke-current text-black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M451.323 224.857C447.395 224.857 444.236 221.698 444.236 217.77V169.785C444.236 165.857 447.395 162.698 451.323 162.698C455.251 162.698 458.41 165.857 458.41 169.785V217.77C458.41 221.698 455.251 224.857 451.323 224.857Z"
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
        />
        <motion.path
          d="M475.572 248.679C458.581 248.679 444.749 234.847 444.749 217.856C444.749 213.928 447.908 210.769 451.835 210.769C455.763 210.769 458.922 213.928 458.922 217.856C458.922 227.077 466.436 234.506 475.572 234.506C484.794 234.506 492.222 226.992 492.222 217.856C492.222 213.928 495.381 210.769 499.309 210.769C503.237 210.769 506.396 213.928 506.396 217.856C506.31 234.847 492.564 248.679 475.572 248.679Z"
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
        />
        <motion.path
          d="M481.464 200.352H454.141C450.213 200.352 447.054 197.193 447.054 193.265C447.054 189.337 450.213 186.178 454.141 186.178H481.464C485.391 186.178 488.551 189.337 488.551 193.265C488.551 197.193 485.391 200.352 481.464 200.352Z"
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M8.00923 182.763C4.08157 182.763 0.922363 179.604 0.922363 175.676V106.942C0.922363 103.014 4.08157 99.855 8.00923 99.855C11.9369 99.855 15.0961 103.014 15.0961 106.942V175.676C15.0961 179.604 11.9369 182.763 8.00923 182.763Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M8.00923 213.843C4.08157 213.843 0.922363 210.684 0.922363 206.756V138.022C0.922363 134.094 4.08157 130.935 8.00923 130.935C11.9369 130.935 15.0961 134.094 15.0961 138.022V206.756C15.0961 210.684 11.9369 213.843 8.00923 213.843Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M413.669 137.595C396.763 137.595 383.101 123.848 383.101 107.027C383.101 90.2068 396.848 76.46 413.669 76.46C430.489 76.46 444.236 90.2068 444.236 107.027C444.236 123.848 430.575 137.595 413.669 137.595ZM413.669 90.5483C404.618 90.5483 397.19 97.9767 397.19 107.027C397.19 116.078 404.618 123.507 413.669 123.507C422.719 123.507 430.148 116.078 430.148 107.027C430.148 97.9767 422.805 90.5483 413.669 90.5483Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M438.174 138.534C434.246 138.534 431.087 135.375 431.087 131.447V83.4614C431.087 79.5337 434.246 76.3745 438.174 76.3745C442.102 76.3745 445.261 79.5337 445.261 83.4614V131.447C445.261 135.375 442.102 138.534 438.174 138.534Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M260.661 138.534C243.669 138.534 229.837 124.702 229.837 107.71C229.837 103.783 232.996 100.624 236.924 100.624C240.851 100.624 244.011 103.783 244.011 107.71C244.011 116.932 251.524 124.36 260.661 124.36C269.797 124.36 277.31 116.932 277.31 107.71C277.31 103.783 280.47 100.624 284.397 100.624C288.325 100.624 291.484 103.783 291.484 107.71C291.484 124.702 277.652 138.534 260.661 138.534Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M284.312 114.285C280.384 114.285 277.225 111.126 277.225 107.198V61.0908C277.225 57.1632 280.384 54.0039 284.312 54.0039C288.24 54.0039 291.399 57.1632 291.399 61.0908V107.198C291.399 111.126 288.24 114.285 284.312 114.285Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M284.312 84.2298C280.384 84.2298 277.225 81.0706 277.225 77.143V31.0356C277.225 27.108 280.384 23.9487 284.312 23.9487C288.24 23.9487 291.399 27.108 291.399 31.0356V77.143C291.399 81.0706 288.24 84.2298 284.312 84.2298Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M846.053 136.912C829.147 136.912 815.486 123.165 815.486 106.344C815.486 89.4383 829.232 75.7769 846.053 75.7769C862.874 75.7769 876.621 89.5237 876.621 106.344C876.621 123.165 862.874 136.912 846.053 136.912ZM846.053 89.8652C837.002 89.8652 829.574 97.2937 829.574 106.344C829.574 115.395 837.002 122.823 846.053 122.823C855.104 122.823 862.532 115.395 862.532 106.344C862.532 97.2937 855.104 89.8652 846.053 89.8652Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M845.882 182.763C828.891 182.763 815.059 168.931 815.059 151.939C815.059 148.012 818.218 144.853 822.145 144.853C826.073 144.853 829.232 148.012 829.232 151.939C829.232 161.161 836.746 168.589 845.882 168.589C855.104 168.589 862.532 161.075 862.532 151.939C862.532 148.012 865.691 144.853 869.619 144.853C873.547 144.853 876.706 148.012 876.706 151.939C876.706 168.931 862.874 182.763 845.882 182.763Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M869.534 158.514C865.606 158.514 862.447 155.355 862.447 151.427V105.32C862.447 101.392 865.606 98.2329 869.534 98.2329C873.461 98.2329 876.621 101.392 876.621 105.32V151.427C876.621 155.355 873.461 158.514 869.534 158.514Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M131.901 112.321C127.974 112.321 124.815 109.162 124.815 105.234C124.815 96.0128 117.301 88.5844 108.165 88.5844C98.9432 88.5844 91.5148 96.0982 91.5148 105.234C91.5148 109.162 88.3556 112.321 84.4279 112.321C80.5003 112.321 77.3411 109.162 77.3411 105.234C77.3411 88.2428 91.1733 74.4106 108.165 74.4106C125.156 74.4106 138.988 88.2428 138.988 105.234C138.988 109.162 135.829 112.321 131.901 112.321Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M84.2573 138.534C80.3296 138.534 77.1704 135.375 77.1704 131.447V106.003C77.1704 102.075 80.3296 98.916 84.2573 98.916C88.1849 98.916 91.3441 102.075 91.3441 106.003V131.447C91.3441 135.375 88.1849 138.534 84.2573 138.534Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M744.959 138.534C741.031 138.534 737.872 135.375 737.872 131.447V83.4614C737.872 79.5337 741.031 76.3745 744.959 76.3745C748.886 76.3745 752.046 79.5337 752.046 83.4614V131.447C752.046 135.375 748.886 138.534 744.959 138.534Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M792.859 113.687C788.932 113.687 785.772 110.528 785.772 106.601C785.772 97.379 778.259 89.9506 769.122 89.9506C759.986 89.9506 752.473 97.4644 752.473 106.601C752.473 110.528 749.313 113.687 745.386 113.687C741.458 113.687 738.299 110.528 738.299 106.601C738.299 89.6091 752.131 75.7769 769.122 75.7769C786.114 75.7769 799.946 89.6091 799.946 106.601C799.861 110.528 796.701 113.687 792.859 113.687Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M792.945 137.595C789.017 137.595 785.858 134.436 785.858 130.508V105.149C785.858 101.221 789.017 98.062 792.945 98.062C796.872 98.062 800.031 101.221 800.031 105.149V130.593C800.031 134.436 796.872 137.595 792.945 137.595Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M345.959 248.338C342.032 248.338 338.872 245.179 338.872 241.251V193.265C338.872 189.337 342.032 186.178 345.959 186.178C349.887 186.178 353.046 189.337 353.046 193.265V241.251C352.961 245.179 349.801 248.338 345.959 248.338Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M393.774 224.174C389.847 224.174 386.687 221.015 386.687 217.087C386.687 207.866 379.174 200.437 370.037 200.437C360.816 200.437 353.388 207.951 353.388 217.087C353.388 221.015 350.228 224.174 346.301 224.174C342.373 224.174 339.214 221.015 339.214 217.087C339.214 200.096 353.046 186.264 370.037 186.264C387.029 186.264 400.861 200.096 400.861 217.087C400.861 221.015 397.702 224.174 393.774 224.174Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M393.945 248.338C390.017 248.338 386.858 245.179 386.858 241.251V215.807C386.858 211.879 390.017 208.72 393.945 208.72C397.873 208.72 401.032 211.879 401.032 215.807V241.251C400.947 245.179 397.787 248.338 393.945 248.338Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M466.863 138.534C462.935 138.534 459.776 135.375 459.776 131.447V83.4614C459.776 79.5337 462.935 76.3745 466.863 76.3745C470.79 76.3745 473.95 79.5337 473.95 83.4614V131.447C473.864 135.375 470.705 138.534 466.863 138.534Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M514.336 113.858C510.409 113.858 507.249 110.699 507.249 106.771C507.249 97.5499 499.736 90.1215 490.599 90.1215C481.378 90.1215 473.95 97.6353 473.95 106.771C473.95 110.699 470.79 113.858 466.863 113.858C462.935 113.858 459.776 110.699 459.776 106.771C459.776 89.78 473.608 75.9478 490.599 75.9478C507.591 75.9478 521.423 89.78 521.423 106.771C521.423 110.699 518.264 113.858 514.336 113.858Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M561.81 113.858C557.882 113.858 554.723 110.699 554.723 106.771C554.723 97.5499 547.209 90.1215 538.073 90.1215C528.852 90.1215 521.423 97.6353 521.423 106.771C521.423 110.699 518.264 113.858 514.336 113.858C510.409 113.858 507.25 110.699 507.25 106.771C507.25 89.78 521.082 75.9478 538.073 75.9478C555.065 75.9478 568.897 89.78 568.897 106.771C568.897 110.699 565.738 113.858 561.81 113.858Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M514.336 138.534C510.409 138.534 507.25 135.375 507.25 131.447V106.003C507.25 102.075 510.409 98.916 514.336 98.916C518.264 98.916 521.423 102.075 521.423 106.003V131.447C521.423 135.375 518.264 138.534 514.336 138.534Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M561.81 138.534C557.882 138.534 554.723 135.375 554.723 131.447V106.003C554.723 102.075 557.882 98.916 561.81 98.916C565.737 98.916 568.897 102.075 568.897 106.003V131.447C568.897 135.375 565.737 138.534 561.81 138.534Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M591.609 138.534C587.681 138.534 584.522 135.375 584.522 131.447V83.4614C584.522 79.5337 587.681 76.3745 591.609 76.3745C595.537 76.3745 598.696 79.5337 598.696 83.4614V131.447C598.696 135.375 595.537 138.534 591.609 138.534Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M639.083 113.858C635.155 113.858 631.996 110.699 631.996 106.771C631.996 97.5499 624.482 90.1215 615.346 90.1215C606.124 90.1215 598.696 97.6353 598.696 106.771C598.696 110.699 595.537 113.858 591.609 113.858C587.681 113.858 584.522 110.699 584.522 106.771C584.522 89.78 598.354 75.9478 615.346 75.9478C632.337 75.9478 646.169 89.78 646.169 106.771C646.169 110.699 643.01 113.858 639.083 113.858Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M686.556 113.858C682.629 113.858 679.469 110.699 679.469 106.771C679.469 97.5499 671.956 90.1215 662.819 90.1215C653.683 90.1215 646.17 97.6353 646.17 106.771C646.17 110.699 643.01 113.858 639.083 113.858C635.155 113.858 631.996 110.699 631.996 106.771C631.996 89.78 645.828 75.9478 662.819 75.9478C679.811 75.9478 693.643 89.78 693.643 106.771C693.643 110.699 690.484 113.858 686.556 113.858Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M639.083 138.534C635.155 138.534 631.996 135.375 631.996 131.447V106.003C631.996 102.075 635.155 98.916 639.083 98.916C643.01 98.916 646.17 102.075 646.17 106.003V131.447C646.17 135.375 643.01 138.534 639.083 138.534Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M686.556 138.534C682.628 138.534 679.469 135.375 679.469 131.447V106.003C679.469 102.075 682.628 98.916 686.556 98.916C690.484 98.916 693.643 102.075 693.643 106.003V131.447C693.643 135.375 690.484 138.534 686.556 138.534Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M361.328 112.578C357.401 112.578 354.241 109.418 354.241 105.491C354.241 96.2692 346.728 88.8408 337.591 88.8408C328.455 88.8408 320.942 96.3546 320.942 105.491C320.942 109.418 317.782 112.578 313.855 112.578C309.927 112.578 306.768 109.418 306.768 105.491C306.768 88.4992 320.6 74.667 337.591 74.667C354.583 74.667 368.415 88.4992 368.415 105.491C368.415 109.418 365.256 112.578 361.328 112.578Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M313.94 138.534C310.012 138.534 306.853 135.375 306.853 131.447V106.003C306.853 102.075 310.012 98.916 313.94 98.916C317.868 98.916 321.027 102.075 321.027 106.003V131.447C321.027 135.375 317.868 138.534 313.94 138.534Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M715.843 138.534C711.915 138.534 708.756 135.375 708.756 131.447V83.4614C708.756 79.5337 711.915 76.3745 715.843 76.3745C719.77 76.3745 722.93 79.5337 722.93 83.4614V131.447C722.844 135.375 719.685 138.534 715.843 138.534Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M715.33 71.6784C719.48 71.6784 722.844 68.3144 722.844 64.1647C722.844 60.0149 719.48 56.6509 715.33 56.6509C711.181 56.6509 707.817 60.0149 707.817 64.1647C707.817 68.3144 711.181 71.6784 715.33 71.6784Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M576.325 224.175C572.398 224.175 569.238 221.015 569.238 217.088C569.238 207.866 561.725 200.438 552.589 200.438C543.452 200.438 535.939 207.952 535.939 217.088C535.939 221.015 532.779 224.175 528.852 224.175C524.924 224.175 521.765 221.015 521.765 217.088C521.765 200.096 535.597 186.264 552.589 186.264C569.58 186.264 583.412 200.096 583.412 217.088C583.412 221.015 580.253 224.175 576.325 224.175Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M576.496 248.338C572.568 248.338 569.409 245.179 569.409 241.251V217.685C569.409 213.758 572.568 210.598 576.496 210.598C580.424 210.598 583.583 213.758 583.583 217.685V241.251C583.583 245.179 580.424 248.338 576.496 248.338Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M528.51 248.338C524.583 248.338 521.423 245.179 521.423 241.251V166.882C521.423 162.954 524.583 159.795 528.51 159.795C532.438 159.795 535.597 162.954 535.597 166.882V241.251C535.597 245.179 532.438 248.338 528.51 248.338Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M313.94 248.338C310.012 248.338 306.853 245.179 306.853 241.251V193.266C306.853 189.338 310.012 186.179 313.94 186.179C317.868 186.179 321.027 189.338 321.027 193.266V241.251C321.027 245.179 317.868 248.338 313.94 248.338Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M313.428 182.422C317.578 182.422 320.942 179.058 320.942 174.908C320.942 170.758 317.578 167.394 313.428 167.394C309.278 167.394 305.914 170.758 305.914 174.908C305.914 179.058 309.278 182.422 313.428 182.422Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M284.312 249.277C288.462 249.277 291.826 245.913 291.826 241.763C291.826 237.614 288.462 234.25 284.312 234.25C280.162 234.25 276.798 237.614 276.798 241.763C276.798 245.913 280.162 249.277 284.312 249.277Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M422.634 249.277C426.784 249.277 430.148 245.913 430.148 241.763C430.148 237.614 426.784 234.25 422.634 234.25C418.484 234.25 415.12 237.614 415.12 241.763C415.12 245.913 418.484 249.277 422.634 249.277Z"
        />
        <motion.path
          variants={grey}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M108.165 213.928C91.2588 213.928 77.5974 200.182 77.5974 183.361C77.5974 166.455 91.3442 152.793 108.165 152.793C124.986 152.793 138.732 166.54 138.732 183.361C138.732 200.182 125.071 213.928 108.165 213.928ZM108.165 166.882C99.1142 166.882 91.6858 174.31 91.6858 183.361C91.6858 192.412 99.1142 199.84 108.165 199.84C117.216 199.84 124.644 192.412 124.644 183.361C124.644 174.225 117.301 166.882 108.165 166.882Z"
        />
        <motion.path
          variants={grey}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M163.574 117.982L119.138 162.424L129.101 172.386L173.537 127.944L163.574 117.982Z"
        />
        <motion.path
          variants={grey}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M52.7173 118.253L42.7554 128.215L86.7084 172.168L96.6703 162.206L52.7173 118.253Z"
        />
        <motion.path
          variants={grey}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M239.011 42.5368L195.963 85.5903L205.927 95.5522L248.974 52.4987L239.011 42.5368Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M31.5753 137.595C14.6693 137.595 1.00781 123.848 1.00781 107.027C1.00781 90.2068 14.7546 76.46 31.5753 76.46C48.3959 76.46 62.1428 90.2068 62.1428 107.027C62.1428 123.848 48.4813 137.595 31.5753 137.595ZM31.5753 90.5483C22.5246 90.5483 15.0962 97.9767 15.0962 107.027C15.0962 116.078 22.5246 123.507 31.5753 123.507C40.626 123.507 48.0544 116.078 48.0544 107.027C48.0544 97.9767 40.626 90.5483 31.5753 90.5483Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M260.746 61.4323C243.84 61.4323 230.178 47.6855 230.178 30.8648C230.178 14.0442 243.925 0.297363 260.746 0.297363C277.652 0.297363 291.313 14.0442 291.313 30.8648C291.313 47.6855 277.652 61.4323 260.746 61.4323ZM260.746 14.3857C251.695 14.3857 244.267 21.8141 244.267 30.8648C244.267 39.9155 251.695 47.3439 260.746 47.3439C269.797 47.3439 277.225 39.9155 277.225 30.8648C277.225 21.8141 269.882 14.3857 260.746 14.3857Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M184.498 137.595C167.592 137.595 153.93 123.848 153.93 107.027C153.93 90.2068 167.677 76.46 184.498 76.46C201.319 76.46 215.065 90.2068 215.065 107.027C215.065 123.848 201.404 137.595 184.498 137.595ZM184.498 90.5483C175.447 90.5483 168.019 97.9767 168.019 107.027C168.019 116.078 175.447 123.507 184.498 123.507C193.549 123.507 200.977 116.078 200.977 107.027C200.977 97.9767 193.549 90.5483 184.498 90.5483Z"
        />
      </motion.svg>
    </div>
  )
}

export const DarkLoading = () => {
  const initState = true
  const refreshTime = 1
  const [state, setState] = useState(initState)

  useEffect(() => {
    const id = setInterval(() => {
      setState(s => !s)
    }, 1300)

    return () => clearInterval(id)
  }, [setState])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-700">
      <motion.svg
        viewBox="0 0 877 250"
        className="-my-16 w-80 stroke-current text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M108.174 214.006C91.2684 214.006 77.6069 200.259 77.6069 183.439C77.6069 166.533 91.3537 152.871 108.174 152.871C124.995 152.871 138.742 166.618 138.742 183.439C138.742 200.259 125.08 214.006 108.174 214.006ZM108.174 166.959C99.1237 166.959 91.6953 174.388 91.6953 183.439C91.6953 192.489 99.1237 199.918 108.174 199.918C117.225 199.918 124.654 192.489 124.654 183.439C124.654 174.302 117.31 166.959 108.174 166.959Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M163.584 118.06L119.148 162.502L129.111 172.464L173.547 128.022L163.584 118.06Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M52.727 118.331L42.7651 128.293L86.7182 172.246L96.68 162.284L52.727 118.331Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M239.021 42.615L195.973 85.6685L205.936 95.6303L248.984 52.5769L239.021 42.615Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M451.333 224.935C447.405 224.935 444.246 221.776 444.246 217.849V169.863C444.246 165.935 447.405 162.776 451.333 162.776C455.261 162.776 458.42 165.935 458.42 169.863V217.849C458.42 221.776 455.261 224.935 451.333 224.935Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M475.582 248.758C458.591 248.758 444.758 234.925 444.758 217.934C444.758 214.006 447.918 210.847 451.845 210.847C455.773 210.847 458.932 214.006 458.932 217.934C458.932 227.156 466.446 234.584 475.582 234.584C484.803 234.584 492.232 227.07 492.232 217.934C492.232 214.006 495.391 210.847 499.319 210.847C503.246 210.847 506.406 214.006 506.406 217.934C506.32 234.925 492.573 248.758 475.582 248.758Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M481.473 200.43H454.15C450.223 200.43 447.063 197.271 447.063 193.343C447.063 189.416 450.223 186.257 454.15 186.257H481.473C485.401 186.257 488.56 189.416 488.56 193.343C488.56 197.271 485.401 200.43 481.473 200.43Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M8.019 182.841C4.09133 182.841 0.932129 179.682 0.932129 175.754V107.02C0.932129 103.092 4.09133 99.9331 8.019 99.9331C11.9467 99.9331 15.1059 103.092 15.1059 107.02V175.754C15.1059 179.682 11.9467 182.841 8.019 182.841Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M8.019 213.921C4.09133 213.921 0.932129 210.762 0.932129 206.834V138.1C0.932129 134.172 4.09133 131.013 8.019 131.013C11.9467 131.013 15.1059 134.172 15.1059 138.1V206.834C15.1059 210.762 11.9467 213.921 8.019 213.921Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M413.678 137.673C396.772 137.673 383.111 123.926 383.111 107.106C383.111 90.2849 396.858 76.5381 413.678 76.5381C430.499 76.5381 444.246 90.2849 444.246 107.106C444.246 123.926 430.584 137.673 413.678 137.673ZM413.678 90.6264C404.628 90.6264 397.199 98.0548 397.199 107.106C397.199 116.156 404.628 123.585 413.678 123.585C422.729 123.585 430.157 116.156 430.157 107.106C430.157 98.0548 422.814 90.6264 413.678 90.6264Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M438.184 138.612C434.256 138.612 431.097 135.453 431.097 131.525V83.5395C431.097 79.6118 434.256 76.4526 438.184 76.4526C442.111 76.4526 445.27 79.6118 445.27 83.5395V131.525C445.27 135.453 442.111 138.612 438.184 138.612Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M260.67 138.612C243.679 138.612 229.847 124.78 229.847 107.789C229.847 103.861 233.006 100.702 236.934 100.702C240.861 100.702 244.02 103.861 244.02 107.789C244.02 117.01 251.534 124.438 260.67 124.438C269.806 124.438 277.32 117.01 277.32 107.789C277.32 103.861 280.479 100.702 284.407 100.702C288.335 100.702 291.494 103.861 291.494 107.789C291.494 124.78 277.662 138.612 260.67 138.612Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M284.322 114.363C280.394 114.363 277.235 111.204 277.235 107.276V61.1689C277.235 57.2413 280.394 54.082 284.322 54.082C288.249 54.082 291.409 57.2413 291.409 61.1689V107.276C291.409 111.204 288.249 114.363 284.322 114.363Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M284.322 84.308C280.394 84.308 277.235 81.1488 277.235 77.2211V31.1137C277.235 27.1861 280.394 24.0269 284.322 24.0269C288.249 24.0269 291.409 27.1861 291.409 31.1137V77.2211C291.409 81.1488 288.249 84.308 284.322 84.308Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M846.063 136.99C829.157 136.99 815.496 123.243 815.496 106.422C815.496 89.5165 829.242 75.855 846.063 75.855C862.884 75.855 876.631 89.6018 876.631 106.422C876.631 123.243 862.884 136.99 846.063 136.99ZM846.063 89.9433C837.012 89.9433 829.584 97.3718 829.584 106.422C829.584 115.473 837.012 122.902 846.063 122.902C855.114 122.902 862.542 115.473 862.542 106.422C862.542 97.3718 855.114 89.9433 846.063 89.9433Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M845.892 182.841C828.901 182.841 815.069 169.009 815.069 152.018C815.069 148.09 818.228 144.931 822.156 144.931C826.083 144.931 829.243 148.09 829.243 152.018C829.243 161.239 836.756 168.667 845.892 168.667C855.114 168.667 862.542 161.154 862.542 152.018C862.542 148.09 865.701 144.931 869.629 144.931C873.557 144.931 876.716 148.09 876.716 152.018C876.716 169.009 862.884 182.841 845.892 182.841Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M869.544 158.592C865.616 158.592 862.457 155.433 862.457 151.505V105.398C862.457 101.47 865.616 98.311 869.544 98.311C873.472 98.311 876.631 101.47 876.631 105.398V151.505C876.631 155.433 873.472 158.592 869.544 158.592Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M131.911 112.399C127.983 112.399 124.824 109.24 124.824 105.312C124.824 96.0909 117.31 88.6625 108.174 88.6625C98.9527 88.6625 91.5243 96.1763 91.5243 105.312C91.5243 109.24 88.3651 112.399 84.4375 112.399C80.5098 112.399 77.3506 109.24 77.3506 105.312C77.3506 88.321 91.1828 74.4888 108.174 74.4888C125.166 74.4888 138.998 88.321 138.998 105.312C138.998 109.24 135.839 112.399 131.911 112.399Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M84.267 138.612C80.3394 138.612 77.1802 135.453 77.1802 131.525V106.081C77.1802 102.153 80.3394 98.9941 84.267 98.9941C88.1947 98.9941 91.3539 102.153 91.3539 106.081V131.525C91.3539 135.453 88.1947 138.612 84.267 138.612Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M744.968 138.612C741.041 138.612 737.881 135.453 737.881 131.525V83.5395C737.881 79.6118 741.041 76.4526 744.968 76.4526C748.896 76.4526 752.055 79.6118 752.055 83.5395V131.525C752.055 135.453 748.896 138.612 744.968 138.612Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M792.869 113.766C788.941 113.766 785.782 110.606 785.782 106.679C785.782 97.4572 778.268 90.0288 769.132 90.0288C759.996 90.0288 752.482 97.5426 752.482 106.679C752.482 110.606 749.323 113.766 745.395 113.766C741.468 113.766 738.309 110.606 738.309 106.679C738.309 89.6872 752.141 75.855 769.132 75.855C786.124 75.855 799.956 89.6872 799.956 106.679C799.87 110.606 796.711 113.766 792.869 113.766Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M792.954 137.673C789.026 137.673 785.867 134.514 785.867 130.586V105.227C785.867 101.299 789.026 98.1401 792.954 98.1401C796.882 98.1401 800.041 101.299 800.041 105.227V130.671C800.041 134.514 796.882 137.673 792.954 137.673Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M345.969 248.416C342.042 248.416 338.882 245.257 338.882 241.329V193.343C338.882 189.416 342.042 186.257 345.969 186.257C349.897 186.257 353.056 189.416 353.056 193.343V241.329C352.971 245.257 349.811 248.416 345.969 248.416Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M393.784 224.253C389.856 224.253 386.697 221.093 386.697 217.166C386.697 207.944 379.183 200.516 370.047 200.516C360.826 200.516 353.397 208.03 353.397 217.166C353.397 221.093 350.238 224.253 346.31 224.253C342.383 224.253 339.224 221.093 339.224 217.166C339.224 200.174 353.056 186.342 370.047 186.342C387.039 186.342 400.871 200.174 400.871 217.166C400.871 221.093 397.712 224.253 393.784 224.253Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M393.955 248.416C390.027 248.416 386.868 245.257 386.868 241.329V215.885C386.868 211.957 390.027 208.798 393.955 208.798C397.882 208.798 401.041 211.957 401.041 215.885V241.329C400.956 245.257 397.797 248.416 393.955 248.416Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M466.873 138.612C462.945 138.612 459.786 135.453 459.786 131.525V83.5395C459.786 79.6118 462.945 76.4526 466.873 76.4526C470.801 76.4526 473.96 79.6118 473.96 83.5395V131.525C473.874 135.453 470.715 138.612 466.873 138.612Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M514.346 113.936C510.419 113.936 507.26 110.777 507.26 106.85C507.26 97.6281 499.746 90.1997 490.61 90.1997C481.388 90.1997 473.96 97.7134 473.96 106.85C473.96 110.777 470.801 113.936 466.873 113.936C462.945 113.936 459.786 110.777 459.786 106.85C459.786 89.8581 473.618 76.0259 490.61 76.0259C507.601 76.0259 521.433 89.8581 521.433 106.85C521.433 110.777 518.274 113.936 514.346 113.936Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M561.82 113.936C557.893 113.936 554.733 110.777 554.733 106.85C554.733 97.6281 547.22 90.1997 538.083 90.1997C528.862 90.1997 521.434 97.7134 521.434 106.85C521.434 110.777 518.274 113.936 514.347 113.936C510.419 113.936 507.26 110.777 507.26 106.85C507.26 89.8581 521.092 76.0259 538.083 76.0259C555.075 76.0259 568.907 89.8581 568.907 106.85C568.907 110.777 565.748 113.936 561.82 113.936Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M514.347 138.612C510.419 138.612 507.26 135.453 507.26 131.525V106.081C507.26 102.153 510.419 98.9941 514.347 98.9941C518.274 98.9941 521.434 102.153 521.434 106.081V131.525C521.434 135.453 518.274 138.612 514.347 138.612Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M561.82 138.612C557.893 138.612 554.733 135.453 554.733 131.525V106.081C554.733 102.153 557.893 98.9941 561.82 98.9941C565.748 98.9941 568.907 102.153 568.907 106.081V131.525C568.907 135.453 565.748 138.612 561.82 138.612Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M591.619 138.612C587.691 138.612 584.532 135.453 584.532 131.525V83.5395C584.532 79.6118 587.691 76.4526 591.619 76.4526C595.547 76.4526 598.706 79.6118 598.706 83.5395V131.525C598.706 135.453 595.547 138.612 591.619 138.612Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M639.093 113.936C635.165 113.936 632.006 110.777 632.006 106.85C632.006 97.6281 624.492 90.1997 615.356 90.1997C606.134 90.1997 598.706 97.7134 598.706 106.85C598.706 110.777 595.547 113.936 591.619 113.936C587.691 113.936 584.532 110.777 584.532 106.85C584.532 89.8581 598.364 76.0259 615.356 76.0259C632.347 76.0259 646.179 89.8581 646.179 106.85C646.179 110.777 643.02 113.936 639.093 113.936Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M686.566 113.936C682.638 113.936 679.479 110.777 679.479 106.85C679.479 97.6281 671.965 90.1997 662.829 90.1997C653.693 90.1997 646.179 97.7134 646.179 106.85C646.179 110.777 643.02 113.936 639.092 113.936C635.165 113.936 632.005 110.777 632.005 106.85C632.005 89.8581 645.838 76.0259 662.829 76.0259C679.82 76.0259 693.653 89.8581 693.653 106.85C693.653 110.777 690.493 113.936 686.566 113.936Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M639.092 138.612C635.165 138.612 632.005 135.453 632.005 131.525V106.081C632.005 102.153 635.165 98.9941 639.092 98.9941C643.02 98.9941 646.179 102.153 646.179 106.081V131.525C646.179 135.453 643.02 138.612 639.092 138.612Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M686.566 138.612C682.638 138.612 679.479 135.453 679.479 131.525V106.081C679.479 102.153 682.638 98.9941 686.566 98.9941C690.494 98.9941 693.653 102.153 693.653 106.081V131.525C693.653 135.453 690.494 138.612 686.566 138.612Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M361.338 112.656C357.411 112.656 354.251 109.496 354.251 105.569C354.251 96.3473 346.738 88.9189 337.601 88.9189C328.465 88.9189 320.952 96.4327 320.952 105.569C320.952 109.496 317.792 112.656 313.865 112.656C309.937 112.656 306.778 109.496 306.778 105.569C306.778 88.5774 320.61 74.7451 337.601 74.7451C354.593 74.7451 368.425 88.5774 368.425 105.569C368.425 109.496 365.266 112.656 361.338 112.656Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M313.95 138.612C310.022 138.612 306.863 135.453 306.863 131.525V106.081C306.863 102.153 310.022 98.9941 313.95 98.9941C317.878 98.9941 321.037 102.153 321.037 106.081V131.525C321.037 135.453 317.878 138.612 313.95 138.612Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M715.852 138.612C711.925 138.612 708.766 135.453 708.766 131.525V83.5395C708.766 79.6118 711.925 76.4526 715.852 76.4526C719.78 76.4526 722.939 79.6118 722.939 83.5395V131.525C722.854 135.453 719.695 138.612 715.852 138.612Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M715.34 71.7566C719.49 71.7566 722.854 68.3925 722.854 64.2428C722.854 60.093 719.49 56.729 715.34 56.729C711.19 56.729 707.826 60.093 707.826 64.2428C707.826 68.3925 711.19 71.7566 715.34 71.7566Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M576.335 224.253C572.407 224.253 569.248 221.093 569.248 217.166C569.248 207.944 561.734 200.516 552.598 200.516C543.462 200.516 535.948 208.03 535.948 217.166C535.948 221.093 532.789 224.253 528.861 224.253C524.934 224.253 521.774 221.093 521.774 217.166C521.774 200.174 535.607 186.342 552.598 186.342C569.589 186.342 583.422 200.174 583.422 217.166C583.422 221.093 580.262 224.253 576.335 224.253Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M576.506 248.416C572.578 248.416 569.419 245.257 569.419 241.329V217.763C569.419 213.836 572.578 210.677 576.506 210.677C580.434 210.677 583.593 213.836 583.593 217.763V241.329C583.593 245.257 580.434 248.416 576.506 248.416Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M528.52 248.416C524.592 248.416 521.433 245.257 521.433 241.329V166.96C521.433 163.032 524.592 159.873 528.52 159.873C532.448 159.873 535.607 163.032 535.607 166.96V241.329C535.607 245.257 532.448 248.416 528.52 248.416Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M313.95 248.416C310.022 248.416 306.863 245.257 306.863 241.329V193.343C306.863 189.416 310.022 186.256 313.95 186.256C317.878 186.256 321.037 189.416 321.037 193.343V241.329C321.037 245.257 317.878 248.416 313.95 248.416Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M313.438 182.499C317.587 182.499 320.951 179.135 320.951 174.986C320.951 170.836 317.587 167.472 313.438 167.472C309.288 167.472 305.924 170.836 305.924 174.986C305.924 179.135 309.288 182.499 313.438 182.499Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M284.321 249.355C288.471 249.355 291.835 245.991 291.835 241.841C291.835 237.692 288.471 234.328 284.321 234.328C280.172 234.328 276.808 237.692 276.808 241.841C276.808 245.991 280.172 249.355 284.321 249.355Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M422.644 249.355C426.793 249.355 430.157 245.991 430.157 241.841C430.157 237.692 426.793 234.328 422.644 234.328C418.494 234.328 415.13 237.692 415.13 241.841C415.13 245.991 418.494 249.355 422.644 249.355Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M31.5851 137.673C14.679 137.673 1.01758 123.926 1.01758 107.106C1.01758 90.2849 14.7644 76.5381 31.5851 76.5381C48.4057 76.5381 62.1525 90.2849 62.1525 107.106C62.1525 123.926 48.4911 137.673 31.5851 137.673ZM31.5851 90.6264C22.5343 90.6264 15.1059 98.0548 15.1059 107.106C15.1059 116.156 22.5343 123.585 31.5851 123.585C40.6358 123.585 48.0642 116.156 48.0642 107.106C48.0642 98.0548 40.6358 90.6264 31.5851 90.6264Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M260.755 61.5104C243.849 61.5104 230.188 47.7636 230.188 30.943C230.188 14.1223 243.935 0.375488 260.755 0.375488C277.662 0.375488 291.323 14.1223 291.323 30.943C291.323 47.7636 277.662 61.5104 260.755 61.5104ZM260.755 14.4639C251.705 14.4639 244.276 21.8923 244.276 30.943C244.276 39.9937 251.705 47.4221 260.755 47.4221C269.806 47.4221 277.235 39.9937 277.235 30.943C277.235 21.8923 269.892 14.4639 260.755 14.4639Z"
        />
        <motion.path
          variants={black}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] }
          }}
          d="M184.508 137.673C167.602 137.673 153.94 123.926 153.94 107.106C153.94 90.2849 167.687 76.5381 184.508 76.5381C201.329 76.5381 215.075 90.2849 215.075 107.106C215.075 123.926 201.414 137.673 184.508 137.673ZM184.508 90.6264C175.457 90.6264 168.029 98.0548 168.029 107.106C168.029 116.156 175.457 123.585 184.508 123.585C193.559 123.585 200.987 116.156 200.987 107.106C200.987 98.0548 193.559 90.6264 184.508 90.6264Z"
        />
      </motion.svg>
    </div>
  )
}
