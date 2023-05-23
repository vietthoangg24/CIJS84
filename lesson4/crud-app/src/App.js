import logo from './logo.svg';
import './App.css';
import { Button, Container, Label, Table } from 'reactstrap'
import Student from './Student';
import { useState } from 'react';



function App() {

  const [listStudent.setlistStudent] =useState([
    {
      id :1,
      firstName :'John',
      lastName : 'wick',
      userName :'@johnwick'
    },
    {
      id :2,
      firstName :'Lung',
      lastName : 'Linh',
      userName :'@LungLinh'
    },
    {
      id :3,
      firstName :'Haha',
      lastName : 'HuHU',
      userName :'@HaHa'
    },
    {
      id :4,
      firstName :'Saka',
      lastName : 'Lala',
      userName :'@Sakalala'
    },
    {
      id :5,
      firstName :'Hyu',
      lastName : 'hus',
      userName :'@Hyu'
    },
  ])
  const [id,setId] = useState(0);
  const [firstName,setfirstName] = useState('')
  const handlechangeId = (event) =>{
    console.log('event',event)
    console.log(event.target.value)
    setId(event.target.value)
  }

  const handchangefirstName = (event) => {

  }

  const handleAddStudent = () =>{
    const listStudentOld = [...listStudent];
    const newStudent = {
      id : id
    }
       listStudentOld.push(newStudent);
       setlistStudent(listStudentOld);
    
  }
   return(
   <Container className ='mt-5'>
    <div className='mt-2'>
      <label>ID</label>
      <input onChange={handlechangeId} />
    </div>
    <div className='mt-2'>
      <label>firstName</label>
      <input/>
    </div>
    <div className='mt-2'>
      <label>lastName</label>
      <input/>
    </div>
    <div className='mt-2'>
      <label>userName</label>
      <input/>
    </div>
    <div className='mt-5'>
          <button>Add Student</button>
    </div>
     <Table>
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            First Name
          </th>
          <th>
            Last Name
          </th>
          <th>
            Username
          </th>
        </tr>
      </thead>
      <tbody>
         {
            listStudent.map((student,index)=>{
              return <Student
              id={student.id}
              firstName={student.firstName}
              lastName={student.lastName}
              userName={student.userName}
              
              />;
            })
         }
         
      </tbody>
    </Table>
   </Container>
   );
    
};

export default App;
