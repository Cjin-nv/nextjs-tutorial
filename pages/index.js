import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME | nextjs튜토리얼</title>
      </Head>
      create-next-app111 !!!
    </div>
  )
}


// create-next-app으로 설치하면 다음과 같은 장점이 있다.
// 1. 컴파일과 번들링이 자동으로 된다. (webpack, babel 등)
// 2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영이 된다.
// 3. 서버사이드 렌더링이 지원 된다.
// 4. 스태틱 파일을 지원한다. (public 폴더 하위에 만들면 됨)
