import logo from './logo.svg';
import './App.css';
import { Button, Container, Label, Table,Input } from 'reactstrap'
import Student from './Student';
import { useState } from 'react';




function App() {

  const [listStudent,setlistStudent] =useState([
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
  const [id,setId] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [userName,setUserName] = useState('');
  const [isUpdate,setUpdate] = useState(false);
  const [keywork,setkeywork]=useState('');
  const [listStudentFilter, setlistStudentFilter] = useState([])
 
  const handlechangeId = (event) =>{
    setId(event.target.value)
  }
  const handlechangeFirstName= (event) =>{
    setFirstName(event.target.value)
  }
  const handlechangeLastName = (event) =>{
    setLastName(event.target.value)
  }
  const handlechangeUserName = (event) =>{
    setUserName(event.target.value)
  }

  const handchangefirstName = (event) => {

  }
   const deleteStudent = (id) =>{
    const listNewStudent = listStudent.filter((student) =>{
      return student.id !== id

      
    })
    setlistStudent(listNewStudent);
   }
  const handleAddStudent = () =>{
    const listStudentOld = [...listStudent];
    const newStudent = {
      id : id
    }
       listStudentOld.push(newStudent);
       setlistStudent(listStudentOld);
    
  }
  const UpdateStudent = (student) =>{
       setId(student.id);
       setFirstName(student.firstName);
       setLastName(student.lastName);
       setUserName(student.userName);
  }

  const handleUpdte = () =>{
    const newStudent = {
      id :id,
      firstName:firstName,
      lastName:lastName,
      userName :userName,

    };

    const listNewStudent = listStudent.map((student)=>{
      if(student.id===id){
        return{
          id:id,
          firstName:firstName,
          lastName:lastName,
          userName:userName,
        }
      }
      return student;
    })

  
  }
  const handleSearch = (event) =>{
    // const keywork = event.target.value;
    // console.log(keywork)
    // const result = listStudent.filter((student)=>{
    //   return student.userName.includes(keywork);
    // });
    setkeywork(event.target.value)
    // setlistStudent(result);
  }
  const handleClickSearch = () =>{
     const result = listStudent.filter((student)=>{
      return student.userName.includes(keywork);
    });
   
    setlistStudentFilter(result);

  }
      
   return(
   <Container className ='mt-5'>
    <div className='mt-2'>
      <label>ID</label>
      <input onChange={handlechangeId} value={id} />
    </div>
    <div className='mt-2'>
      <label >firstName</label>
      <input onChange={handchangefirstName} value={firstName} />
    </div>
    <div className='mt-2'>
      <label>lastName</label>
      <input onChange={handlechangeLastName} value={lastName}/>
    </div>
    <div className='mt-2'>
      <label>userName</label>
      <input onChange={handlechangeUserName} value={userName}/>
    </div>
    <div className='mt-5'>
          <Button onClick={handleAddStudent}>Add Student</Button>
    </div>
    <div className='mt-5'>
          <Button onClick={handleUpdte}>Update</Button>
    </div>
        
        <div className='mt-5 mb-5' style={{display:'flex'}}>
        <Input onChange={handleSearch} />
          <Button color='primary' style={{marginLeft:'8px'}} onClick={handleClickSearch}> 
            
            Search

          </Button>

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
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
         {
            listStudentFilter.length > 0 ? listStudentFilter
            // .filter((student)=>student.userName.includes(keywork))
            .map((student,index)=>{
              return <Student
              id={student.id}
              firstName={student.firstName}
              lastName={student.lastName}
              userName={student.userName}
              onDelete = {deleteStudent}
              onUpdate = {UpdateStudent}
              
              />;
            })
            :listStudent  .map((student,index)=>{
              return <Student 
              key = {student.id}
              id={student.id}
              firstName={student.firstName}
              lastName={student.lastName}
              userName={student.userName}
              onDelete = {deleteStudent}
              onUpdate = {UpdateStudent}
              
              />;
            })
         }
         
      </tbody>
    </Table>
   </Container>
   );
    
};

export default App;
