import {Divider, Header, List} from 'semantic-ui-react';


export default function about() {
  return (
  <div>
    <Header as="h3" style={{ paddingTop: 40}} color="teal">
      회사 소개
    </Header>
    <Divider />
    <List>
      <List.Item>
        <List.Icon name="users" />
        <List.Content>Semantic UI</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="marker" />
        <List.Content>New York, NY</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="mail" />
        <List.Content>
          <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="linkify" />
        <List.Content>
          <a href="http://www.semantic-ui.com">semantic-ui.com</a>
        </List.Content>
      </List.Item>
    </List>
    <br></br>
  </div>);
};


// pages의 폴더 하위에 파일을 새로 생성하면, 바로 라우팅이 됨.
// 즉, 주소창에 /filename 해주면 이동이 가능하다는 걸 알 수 있다.
// 단순히 파일 뿐 아니라, 폴더를 새로 생성하고, 파일명을 []로 감싸면 id처리?도 가능하게 된다.

