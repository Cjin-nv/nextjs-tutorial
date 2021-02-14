import '../styles/globals.css'
//이곳에 css를 임포트 하여 사용할 수 있음. (아래는 시멘틱 UI css)
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/component/Footer'
import Top from '../src/component/Top';


function MyApp({ Component, pageProps }) {
  return (
  <div style={{ width: 1000, margin: '0 auto' }}>
    <Top />
    <Component {...pageProps} />
    <Footer />
  </div>
  );
}

export default MyApp;



// 이 _app.js가 하는 일.
// 페이지 전환 시, 레이아웃을 유지할 수 있다.
// 페이지 전환 시, 상태값을 유지할 수 있다. (모든 페이지는 여기를 거쳐감)
// componentDidCatch를 이용해서 커스텀 에러 핸들링이 가능하다.
// 추가적인 데이터를 페이지로 주입시켜주는게 가능하다.
// 글로벌 CSS를 이곳에 선언한다.