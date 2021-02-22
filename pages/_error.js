// 500에러 등은 개발모드에서는 보여지지 않고, 에러 로그를 띄우게 된다.
// 따라서 직접 확인하려면, 빌드를 한 뒤, npm run start를 통해 프로덕션 모드로 창을 띄워야 에러 페이지 확인이 가능하다.
// 404에러와는 다르게, 500에러는 _error.js 라는 파일에서 편집이 가능하다.

//그리고, 아래 코드를 통해, 클라이언트에서 발생한 에러와 서버사이드 쪽 에러를 둘 다 관리할 수 있게 된다.
// 다시말해, 404.js는 굳이 없어도 여기서 통제가 가능하다는 것...
//다만, 404.js는 정적파일로 두는게, 서버의 리소스를 적게 사용할 수 있어서 더 좋다.

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
