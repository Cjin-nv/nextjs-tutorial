import { Menu } from 'semantic-ui-react';
import {useRouter} from 'next/router';

export default function Gnb() {
  // next/router의 useRouter사용하여 페이지 이동. (location.href 대신)
  // ****
  // a태그나 location.href를 쓰지 않는 이유는?
  // 바로 새로고침 되면서 페이지가 이동되기 때문... => 요청이 늘어남 => 퍼포먼스 저하ㅠ (spa장점 사라짐...)
  // 만일 리덕스로 상태관리를 하던 중이라면 다 날아갈 수도 있음 (데이터들이..)
  // next link를 사용하면 페이지는 그대로, 안의 내용물만 바뀜

  // router에서 asPath는 실제 주소가 나오게 되고, pathname은 파일명(디렉토리포함)이 나온다.
  const router = useRouter();

  //active효과 주기. (어떤 탭이 클릭되었는지 나타냄)
  let activeItem;
  if(router.pathname === '/') {
    activeItem = 'home';
  }else if(router.pathname === '/about') {
    activeItem = 'about';
  }

  //인자값에 data는 시멘틱 ui에서 제공하는 것인데,
  //Menu.Item을 보면, 속성들 (name, active, onClick 등)이 있는데, data에는 이러한 속성들의 정보가 들어가 있음.
  //그래서 아래와 같이 data.name은 아래 Menu.Item의 name이 불려짐.
  function goLink(e, data) {
    if(data.name === 'home') {
      router.push('/');
    } else if(data.name === 'about') {
      router.push('/about');
    }
  }

  return (
    <Menu inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={goLink}
      />
      <Menu.Item
        name='about'
        active={activeItem === 'about'}
        onClick={goLink}
      />
      <Menu.Item
        name='friends'
        active={activeItem === 'friends'}
        onClick={goLink}
      />
    </Menu>
  )
};
