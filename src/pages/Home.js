import axios from 'axios';
import React from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteModel from '../components/DeleteModel';
export default function Home() {
    const [data,finaldata]=React.useState([]);
    const [isloading,isloadingChangeTo]=React.useState(true);

    async function deletePost(email,password){
        await axios.delete('https://workshopm.herokuapp.com/user/'+email+'/'+password).then(res=>{
            
            console.log(res.data.message);
        }).catch(err=>{
            console.log("error deleting user"+err);
        });
        await getdata();
    }
    function getdata(){
        isloadingChangeTo(true);
        axios.get("https://workshopm.herokuapp.com/user").then(res=>{
       var value= finaldata(res.data);
       isloadingChangeTo(false);
    }).catch(err=>{
        console.log("error fetchihng "+err);
       isloadingChangeTo(false);

    });
    }
    React.useEffect(()=>{
        getdata();
    },[])
  return <div> 
      <h2>
          Home Page
      </h2>
      <p>
          This page shows the registered users.<br/>
          <Table responsive striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th> Name</th>
      <th> Email </th>
      <th> Password </th>
      <th> Actions </th>
    </tr>
  </thead>
  
  <tbody>
  
   {data.map((u)=><tr>
       <td> # </td>
       <td> {u.name} </td>
       <td> {u.email} </td>
       <td> {u.password} </td>
       <td>
         <Link to={"/edit/"+u.name+"/"+u.email+"/"+u.password }  class="m-2">  <Button variant='primary' > Edit </Button></Link>
           <DeleteModel class="m-2" email={u.email} onClick={()=>deletePost(u.email,u.password)} />
       </td>
   </tr>)}
  </tbody>
</Table>
{(isloading) ? <center><Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner></center> : <span></span>}
      </p>
      
  </div>;
}
