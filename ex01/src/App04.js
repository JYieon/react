import Site from "./Site"
import Child from "./Child"

function App(){
  const a_tag = [
    {txt:"네이버", href:'https://www.naver.com/'},
    {txt:"다음", href:'https://www.daum.net/'},
    {txt:"구글", href:'https://www.google.co.kr/'}
  ]
  return (
    <>
    {/* 중간에 들어가는 값은 children이라는 이름으로 값이 전달됨 */}
    {/* 여러개의 값을 전달하고 싶으면 {}활용. 배열형식으로 넘어간다 */}
      <Child name="홍길동">{"aaaa"}{"bbb"}{"ccc"}</Child> 
      <hr></hr>
      <Site a_tag = {a_tag} />
    </>
  )
}
export default App