const skills = [
  { title: 'HTML5', src: '/skill/html.svg' },
  { title: 'CSS3', src: '/skill/css3.svg' },
  { title: 'JAVASCRIPT', src: '/skill/javascript.svg' },
  { title: 'TYPESCRIPT', src: '/skill/typescript.svg' },
  { title: 'REACT', src: '/skill/react.svg' },
  { title: 'REDUX', src: '/skill/redux.svg' },
  { title: 'NODEJS', src: '/skill/nodejs.svg' },
  { title: 'MONGODB', src: '/skill/mongodb.svg' },
  { title: 'POSTMAN', src: '/skill/postman.svg' },
]

const projects = [
  {
    title: 'Enjoy AI',
    src: '/project/enjoy-ai.png',
    link: 'https://enjoy-ai.vercel.app',
    description:
      'ChatGPT, Stable Diffusion 등 최신 인공지능 모델들을 소개하고 경험할 수 있는 웹사이트',
    stacks: ['Next', 'React', 'TypeScript', 'styled-jsx'],
    github: 'https://github.com/happyuniv/Enjoy-AI',
  },
  {
    title: 'MERN Store',
    src: '/project/mern-store.png',
    link: 'https://mern-client-i5ks.onrender.com',
    description: 'Stripe 결제 방식을 적용한 이커머스 웹사이트',
    stacks: ['MERN', 'JWT', 'Webhook', 'TypeScript', 'styled-components'],
    github: 'https://github.com/happyuniv/MERN-Store',
  },
  {
    title: 'NETFLEX',
    src: '/project/netflex.png',
    link: 'https://happyuniv-netflex.netlify.app',
    description:
      '트레일러 영상과 함께 카테고리별 / 검색결과 영화 정보를 제공하는 웹사이트',
    stacks: ['React', 'TypeScript', 'styled-components'],
    github: 'https://github.com/happyuniv/NETFLEX',
  },
]

export { skills, projects }
