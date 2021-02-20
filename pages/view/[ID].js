import axios from 'axios';
import Head from 'next/head';
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react';
// import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/Item';

const Post = ({ item }) => {

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <Item item={item} />
        </>
      )}
    </>
  )
}

export default Post;

export async function getServerSideProps(context) {
  //상세 상품의 아이디 (주소표시줄의 번호를 의미)
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  // props에 item으로 넣어주면, 이 컴포넌트가 실행될 때 item(예시)로 받을 수 있다!
  return {
    props: {
      item: data,
    },
  };
}


/*

Next.js 는 모든 페이지를 사전 렌더링을 함 (pre-rendering)
즉, 미리 html파일들을 만들어 두는 것.
더 좋은 퍼포먼스을 내고, 그리고 검색엔진최적화(SEO)에 장점이 있다.

pre-rendering에는 아래와 같이 두 가지 방법이 있다.
1. 정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering)

차이점은 언제 html file을 생성하는 지에 따라 다르다.

[정적 생성] - 유저가 요청하기전에 미리 페이지를 만들어 놔도(보여줘도) 상관 없다면 사용!
- 프로젝트가 빌드하는 시점에 html파일들이 생성.
- 모든 요청에 (생성됬던) 해당 파일들을 재사용. (즉, 파일들을 쭉 만들어두고, 호출이 들어올 때마다 재활용)
- 퍼포먼스 이유로, Next.js는 정적 생성을 권고 (마케팅 페이지나, 블로그 게시물, 도움말문서, 제품리스트 등에 사용)
- 정적 생성된 페이지들은 CDN에 캐시
- 사용법: getStaticProps / getStaticPaths를 사용.

[서버 사이드 렌더링]은 매 요청마다 html을 생성함.
- getServerSideProps
- CDN에 캐시되지 않아서 조금 느릴 수 있다
- 그러나 서버 사이드 렌더링은 항상 페이지가 최신 상태를 유지



*/ 