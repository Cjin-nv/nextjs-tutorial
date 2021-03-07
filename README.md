README 수정해보기 (git test)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



## ABOUT SSR

pre rendering
사전 렌더링
기본적으로 모든 페이지 pre-render
사전에 HTML파일들을 만든다는 의미
퍼포먼스 향상, SEO 대응에 더 좋음.

생성된 html은 필요한 최소한의 js코드가 있고,
브라우저에 의해 로드될 때 해당 코드가 실행되서 완전한 페이지가 로딩된다.


no-pre render의 경우 (plain react.js)
처음 로드될 때, App이 렌더되지 않음. (즉, 암것도 없음)
이후 JS로드되고 나면
해당 페이지를 채움.
Hydration : 리액트 컴포넌트들이 초기화 되고 App이 인터렉티브하게 된다.


pre-render의 경우에는,
처음 로드될 때, pre-rendered된 HTML이 표시가 됨. (메타태그도 존재)
이후, JS가 로드되고,
app에 interactive한 컴포넌트들 (<Link />같은)가 존재한다면, JS가 로드된 후 active(동작)하게 됨.
이것이 Hydration.
정적인 무언가에 생기를 불어넣는? 그런 작업들을 지칭함.
원래 프리렌더 된 직후는 정적인데, JS가 로드되고나서는 인터렉티브하게 동작(살아남)


프리 렌더링은 두 가지 방식으로 진행됨.
Static Generation : 정적 생성.
Server-side Rendering: 서버사이드 렌더링

차이점은, 언제(WHEN) HTML을 만드냐 이다.

정적생성은,
next build 시에 html을 생성한다. 
그리고 이 렌더링 (생성)된 html을 유저들이 요청할 때 마다 재사용해서 전달해줌.
즉, 똑같은 html을 유저들에게 준다. (reuse)

반면, 서버사이드 렌더링은
유저가 page request를 하면, 그 때 마다 Next.js에서 html을 생성해서 보여준다.
즉, each request별로 html을 생성하여 보여줌. (최신화가 되겠죠 아무래도..?)

next.js에서는 
개발자가 페이지별로 서버사이드 렌더링을 할지, 정적 생성을 렌더링할 지 정할 수 있다!


정적 생성은 어떤 경우에 사용하나>????
- 마케팅 페이지
- 블로그 게시물
- 제품 목록
- 도움말, 문서 등

즉, 미리 만들어 두어도 되는 경우...

SSR은,
항상 최신 상태를 유지해야 하는 경우,
관리자 페이지,
분석 차트 등에서 사용한다.
