import logo from './logo.svg';
import './App.css';
import Input01Con from './containers/form/Input01Con';
import CheckBox02Con, {CheckBoxComponent} from './containers/form/CheckBox02Con';
import UseRefIndex from './components/use_ref/UseRefIndex';
import UseRefCon from './containers/use_ref/UseRefCon';
//default가 아닌 값은 {}로 묶어서 이름을 명시

function App() {
  return (
    <>
      <UseRefCon />
      <hr />
      <UseRefIndex />
      <hr/ >
      <CheckBox02Con />
      <hr />
      <Input01Con />
    </>
    
  );
}

export default App;
