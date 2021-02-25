import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/Item';
import { useEffect, useState } from 'react';

const Post = ({ item, name }) => {
  const router = useRouter();

  //next/Router의 isFallback을 사용하여, 초기 페이지 로딩 시, 빈 공백 대신 로딩화면이 뜨도록 만들어줌 
  if (router.isFallback) {
    return (
      <div style={{ padding: '100px 0'}}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    )
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

//sttic path 사용하기
export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    // test용으로 상위 3개만 static파일 생성해보기.
    // paths: [
    //   { params: { id: '740' } },
    //   { params: { id: '730' } },
    //   { params: { id: '729' } },
    // ],
    // 전체 리스트를 static파일로 만들기
    paths: data.map(item => ({
      params: {
        id: item.id.toString(),
      }
    })),
    fallback: true
    // fallback이 false면, 없는 페이지는 대응을 하지 않아, 404 에러 화면이 뜬다.
    // fallback이 true면, 최초에 페이지 로드 시, (파라미터로 넘기지 않은 것들에 대해)
    // 빈 화면이 잠깐 떴다가 백그라운드에서 정적 html과 json을 생성해서 보여준다.
    // 이후 접속 시에는 빠르게 접속됨 (처음 접속 시, pre-rendering 리스트에 들어가서 해당 페이지가 만들어져있으므로) 
    // page가 굉장히 많은 경우 유용하게 쓰인다.
  }
}

// static props
export async function getStaticProps(context) {
  //상세 상품의 아이디 (주소표시줄의 번호를 의미)
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  // props에 item으로 넣어주면, 이 컴포넌트가 실행될 때 item(예시)로 받을 수 있다!
  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
