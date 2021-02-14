import next from 'next'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

// 원래 nextjs는 Html, head, body이런 부분을 건너 뛰고 바로 바디 안을 렌더링 하기 때문에,
// 위의 html요소를 수정하거나 건들여야 하는 경우에는 이 _document.js파일이 필수적이다.

// 여기는 서버 사이드에서만 렌더링이 되고,
// onclickevent같은 이벤트헨들링이 작동하지 않는다.
// CSS또한 여기서 사용하지 않고, _app.js에서 사용한다.