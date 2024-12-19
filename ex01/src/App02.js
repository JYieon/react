import Test from "./test"
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";

function App() {
  // react도 javascript 기반이기때문에 javascript언어 사용 가능
  const num = 100
  console.log(`num : ${num}`)
  function click() {
    alert("클릭")
  }
  return (
    <div>
      num : {num} 
      <Header test="연습" number={num} />
      <hr></hr>
      <Nav name="홍길동" addr="산골짜기" />
      <hr></hr>
      <Main MyClick={click} tel="010-xxx" nick="도적"/>
    </div>
  );
}

export default App;
