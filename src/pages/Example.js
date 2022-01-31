import logo from './../logo.svg';
import './../App.css';
import InputText from '../components/inputText';
import ParentComponent from '../components/ParentComponent';
import Form from '../components/form';
function Example() {
const Data=(props)=><div>{props.name ?? 'Default Value'} <b> {props.children}</b></div>

  return (
    <div className="App">
        
        <div className="Samir">
  <Data name="khanal"/>
  <Data name="hello"/>
  <InputText/>
  <Data> children </Data>
  <br/>
  <ParentComponent/><hr/>
  working with form : <br/>
  <Form/>
      </div>
     
    </div>
  );
}

export default Example;
