// nextjs는 기본적으로 에러 페이지가 디폴트 제공이 된다.
//하지만, 따로 에러페이지를 처리하고 싶은 경우, pages 폴더 디렉토리에 404.js로 만들어주면,

import { Divider, Icon } from "semantic-ui-react";

//빌드 타임에 정적생성 된다.
export default function Error404() {
  return (
    <div style={{ padding: "200px 0", textAlign: 'center', fontSize: 30}}>
      <Icon name="warning circle" color="red" />
      404: 페이지를 찾을 수 없습니다.
    </div>
  )
}