// max_age를 0으로 함으로써, 유효기간이 0이라 삭제됨.
// 즉, 로그아웃을 만들게 된다. (쿠키가 사라져서 해당 이름이 없음.)
export default (req, res) => {
  res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ message: 'ok'})
}
