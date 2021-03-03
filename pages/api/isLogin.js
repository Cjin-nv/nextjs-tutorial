// 가상 api 페이지... 
// admin페이지로 부터 요청을 받아 쿠키의 a_name을 확인한다.

export default (req, res) => {
  res.status(200).json({ name: req.cookies.a_name })
}
