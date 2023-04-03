const fadeIn = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
}

const slideTop = {
  hidden: {
    opacity: 0,

    x: 0,
    y: '-100%',
  },
  show: {
    opacity: 1,

    x: 0,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
}

const slideBottom = {
  hidden: {
    opacity: 0,
    x: 0,
    y: '100%',
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
}

const slideLeft = {
  hidden: {
    opacity: 0,
    x: '-100%',
    y: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
}

const slideRight = {
  hidden: {
    opacity: 0,
    x: '100%',
    y: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

export {
  slideTop,
  slideBottom,
  slideLeft,
  slideRight,
  fadeIn,
  staggerContainer,
}
