import axios from "axios";
import { useRouter } from "next/router";
import { Button, Form } from "semantic-ui-react";

export default function Login() {
  const router = useRouter();
  function login() {
    // 로그인 api 호출... (쿠키의 a_name을 생성)
    axios.post('/api/login')
    .then(res => {
      if(res.status === 200) {
        //success
        router.push('/admin');
      }else {

      }
    })
  }

  return (
    <div style={{ padding: '100px 0', textAlign: 'center'}}>
    <Form>
      <Form.Field inline>
        <input placeholder="ID" />
      </Form.Field>
      <Form.Field inline>
        <input placeholder="Password" type="password" />
      </Form.Field>
      <Button color="blue" onClick={login}>Login</Button>
    </Form>
    </div>
  )
};
