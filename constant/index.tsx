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
    title: 'Spectacle Marker',
    subTitle: '2024.05 (개인 프로젝트)',
    src: '/project/spectacle-marker.webp',
    description:
      '놀라운 광경, 아름다운 풍경, 일상의 순간들을 위치정보와 함께 마킹하고, 공유하는 소셜 웹사이트',
    subDescription: (
      <ul className='flex flex-col gap-3 list-disc marker:text-violet-300'>
        <li>
          Next.js로 프로젝트를 시작해{' '}
          <span className='text-violet-300'>Dynamic Route, Dynamic SEO</span> 등
          프레임워크가 제공하는 여러 기능들을 사용해보고 계층형 폴더구조를
          짜면서 Next.js에 더욱 익숙해지는 계기가 되었습니다.
        </li>
        <li>
          <span className='text-violet-300'>React Query</span>를 사용해
          서버상태를 분리하고, stale time 조절을 통한{' '}
          <span className='text-violet-300'>캐싱기능</span> 활용을 통해
          API요청을 최적화 하였습니다.
        </li>
        <li>
          쉽게 커스터마이징 가능하고 재사용가능한 컴포넌트 집합인{' '}
          <span className='text-violet-300'>Shadecn/ui</span>를 통해 컴포넌트를
          구성하고, , 로그인/회원가입에{' '}
          <span className='text-violet-300'>React Hook Form</span>과{' '}
          <span className='text-violet-300'>Zod</span>를 결합한{' '}
          <span className='text-violet-300'>Form Validation</span> 을
          적용하였습니다.
        </li>
        <li>
          오픈소스 플랫폼 <span className='text-violet-300'>Appwrite</span>의
          인증,데이터베이스,스토리지를 사용해보며 베타버전 이더라도 이러한
          새로운 기술들을 익히고 사용하는 것에 자신감을 가지게 되었습니다.
        </li>
      </ul>
    ),
    detail: {
      GitHub: 'github.com/happyuniv/Spectacle-Marker',
      Link: 'spectacle-marker.vercel.app',
      Frontend: 'Next.js, React Query, Shadcn/ui, Tailwind CSS, Typescript ',
      Backend: 'Next.js, Appwrite',
      Database: 'Appwrite',
      Deployment: 'Vercel',
    },
  },
  {
    title: 'Enjoy AI',
    subTitle: '2023.03 (개인 프로젝트)',
    src: '/project/enjoy-ai.png',
    description:
      'Chat GPT, Stable Diffusion 등 최신 인공지능 모델들을 소개하고 경험할 수 있는 웹사이트',
    subDescription: (
      <ul className='flex flex-col gap-3 list-disc marker:text-violet-300'>
        <li>
          Chat GPT를 모티브로 <span className='text-violet-300'>챗봇</span>의
          UI를 디자인하고, 대화형 기능을 구현해 보면서 복잡한 컴포넌트의 UI/UX
          구현에 자신감을 얻었습니다.
        </li>
        <li>
          Open API를 활용하면서 평소 사용해 보지 않았던{' '}
          <span className='text-violet-300'>Pooling 방식</span>의 요청과 응답을
          이해하고 로딩과 에러 처리를 하였습니다.
        </li>
        <li>
          원하는 캐러셀 기능을 위해 자동 슬라이딩과 함께 기기에 맞게 변형되는{' '}
          <span className='text-violet-300'>반응형 캐러셀</span>을
          구현하였습니다.
        </li>
        <li>
          다양한 방식의 CSS 학습을 위해 Vercel에서 배포한 css-in-js 방식의
          styled-jsx를 사용해 보면서 styled components 와는 또 다른 특징들을
          학습하였습니다.
        </li>
      </ul>
    ),
    detail: {
      GitHub: 'github.com/happyuniv/Enjoy-AI',
      Link: 'enjoy-ai.vercel.app',
      Frontend: 'Next.js, styled-jsx, Typescript',
      Backend: 'Next.js',
      API: 'OpenAI, Replicate',
      Deployment: 'Vercel',
    },
  },
  {
    title: 'MERN Store',
    subTitle: '2023.03 (개인 프로젝트)',
    src: '/project/mern-store.png',
    description: 'Stripe 결제 방식을 적용한 이커머스 웹사이트',
    subDescription: (
      <ul className='flex flex-col gap-3 list-disc marker:text-violet-300'>
        <li>
          <span className='text-violet-300'>Redux Toolkit</span>을 사용해 유저
          정보나 장바구니 상태 등, 전역 상태 공유 방식을 이해하고
          적용하였습니다.
        </li>
        <li>
          인증/인가 방식에 <span className='text-violet-300'>JWT</span>를
          사용하고, <span className='text-violet-300'>Axios</span>를 적용한 토큰
          요청의 헤더구성을 통해 통신하였습니다.
        </li>
        <li>
          Node.js와 Express를 활용한 서버 구축으로 REST API 형식을 더욱
          이해하고, 브라우저의 <span className='text-violet-300'>CORS</span>{' '}
          문제를 해결하였습니다.
        </li>
        <li>
          결제 시스템으로 Stripe SDK를 활용하여{' '}
          <span className='text-violet-300'>Webhook 방식</span>의 통신을 통해
          데이터베이스에 저장하면서 상품의 주문, 결제 과정을 이해하고
          학습하였습니다.
        </li>
      </ul>
    ),
    detail: {
      GitHub: 'github.com/happyuniv/MERN-Store',
      Link: 'mern-client-i5ks.onrender.com',
      Frontend: 'React, Redux Toolkit, styled-components, Typescript',
      Backend: 'Node.js, Express.js',
      API: 'Stripe',
      Database: 'MongoDB',
      Deployment: 'Render',
    },
  },
  {
    title: 'NETFLEX',
    subTitle: '2023.01 (개인 프로젝트)',
    src: '/project/netflex.png',
    description:
      '트레일러 영상과 함께 카테고리별 / 검색결과 영화 정보를 제공하는 웹사이트',
    subDescription: (
      <ul className='flex flex-col gap-3 list-disc marker:text-violet-300'>
        <li>
          유튜브 영상 재생을 위해 react-youtube 라이브러리를 활용해 트레일러
          영상과 포스터 이미지를 번갈아 교체하는 자동 재생 기능을
          구현하였습니다.
        </li>
        <li>
          API 요청 결과 데이터를 전처리하여 필요한 데이터를 뽑아내고, 빈
          데이터를 추가하면서 응답 데이터 처리 방법을 학습하였습니다.
        </li>
      </ul>
    ),
    detail: {
      GitHub: 'github.com/happyuniv/NETFLEX',
      Link: 'happyuniv-netflex.netlify.app',
      Frontend: 'React, Typescript, styled-components',
      Deployment: 'Netlify',
    },
  },
]

export { skills, projects }
