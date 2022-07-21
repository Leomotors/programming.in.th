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
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
      <motion.svg
        viewBox="0 0 877 250"
        className="-my-16 text-black stroke-current w-80"
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
