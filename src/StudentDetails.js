import React, { useState } from "react";
import './StudentDetails.css';
const StudentDetails = (props)=>{
const [editId,setEdit] = useState(null);
const [editable,setEditable] = useState(false);
    const deleteHandler=(id)=>{
   props.deleteDetailHandler(id)
}
const EditHandler=(id)=>{
    setEdit(id);
}
const saveHandler = ()=>{
    setEditable(!editable)
}
return( <table className="container">
         <th>Id</th>
         <th>Name</th>
         <th>Roll_no</th>
         <th>Gender</th>
         <th>Age</th>
         <th>City</th>
         <th>Email</th>
         <th>Mobile_no</th>
       {props.students.map(student=> {return(
           student.id === editId ?  
          <tr><td contentEditable="true">{student.id}</td>
         <td contentEditable="true">{student.Student_name}</td>
         <td contentEditable="true">{student.Roll_no}</td>
         <td contentEditable="true">{student.Gender}</td>
         <td contentEditable="true">{student.age}</td>
         <td contentEditable="true">{student.city}</td>
         <td contentEditable="true">{student.Email}</td>
         <td contentEditable="true">{student.mobile_no}</td>
         <td><button onClick={saveHandler}>{editable ? 'Save' : 'Edit'}</button></td>
         <td><button onClick={()=>deleteHandler(student.id)}>Delete</button></td>
         </tr> :
         <tr><td>{student.id}</td>
         <td>{student.Student_name}</td>
         <td>{student.Roll_no}</td>
         <td>{student.Gender}</td>
         <td>{student.age}</td>
         <td>{student.city}</td>
         <td>{student.Email}</td>
         <td>{student.mobile_no}</td>
         <td><button onClick={()=>EditHandler(student.id)}>Edit</button></td>
         <td><button onClick={()=>deleteHandler(student.id)}>Delete</button></td>
         </tr>
       )})}
         </table>

)
}
export default StudentDetails;