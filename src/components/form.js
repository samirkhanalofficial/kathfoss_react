import React from 'react';
import InputField from './inputField';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
export default function Form(props) {
    const [isloading,changeloading]=React.useState(false)
    const[iseditpage,changeiseditpage]=React.useState(false)
    const [success,changesuccess]=React.useState({
        status:null,
        message:""
    })
    const [formdata,setformdata] = React.useState({
        name: '',
        email: '',
        password: ''
    });
    
    function changevalue(key,newvalue){
        setformdata(function(prevvalue){
            return {...prevvalue,[key]:newvalue}
        })
        
    }
    React.useEffect(()=>{
        if(props.data.email!=""){
            setformdata(props.data)
            changeiseditpage(true);
        }
    },[]);
    function adduser(e){
        e.preventDefault();
        changeloading(true);
        axios.post('https://workshopm.herokuapp.com/user',formdata).then(res=>{
            var message=res.data.messsage;
            changesuccess({
                status:1,
                message:message
            })
            changeloading(false)
        }).catch(err=>{
            changesuccess({
                status:0,
                message:err
            })
            changeloading(false)
        })
        console.log(JSON.stringify(formdata))
    }
    function edituser(e){
        e.preventDefault();
        changeloading(true);
        axios.put(`https://workshopm.herokuapp.com/user/${formdata.email}/${formdata.password}/${formdata.name}`,).then(res=>{
            var message=res.data.message;
            alert(message)
            changeloading(false)
        }).catch(err=>{
           alert("error: updating user"+err);
            changeloading(false)
        })
        console.log(JSON.stringify(formdata))
    }
  return (<div class='container' >
      <form onSubmit={iseditpage ? edituser :adduser}>
          <br />
          <h2>{ (iseditpage) ? "Create Acccount" : "Edit User"}</h2>
            <InputField value={formdata.name} class='form-control' label='name'  onChange={(e)=>changevalue('name',e.target.value)} type='text' onFormField/>
            <InputField label='email' value={formdata.email} class='form-control' onChange={(e)=>changevalue('email',e.target.value)} type='text' />
            <InputField label='password' value={formdata.password} class='form-control' onChange={(e)=>changevalue('password',e.target.value)}  type='text' />
            <br />
            
            {(isloading) ? <center><Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner></center> : <span></span>}
            <button class='btn btn-primary' type='submit'>{ (iseditpage) ? "Change" : "Login"}</button>
            </form>
        </div>);
}
