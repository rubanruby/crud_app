import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';



export default function EditStudent()
{

    const[student, setStudent] = useState({})

    const {id} = useParams();

    const myNavigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:8081/api/student/'+id)
        .then((res)=>{
            // console.log(res.data);
            setStudent(res.data);
        })
    },[])


    function handleChange(e)
    {
        setStudent({...student, [e.target.name]:e.target.value});
        
    }

    function formSubmit(e)
    {
        e.preventDefault();
        // console.log(student);
        axios.put('http://localhost:8081/api/student', student)
        .then((res)=>{
            // console.log(res.data);
            if(res.data.rollno==student.rollno){
                alert('Updated Succesfully')
                myNavigate('/home')
            }
            else
                alert('Student already exist')
        })
    }

    return(
        <>
            <h3>Update Student</h3>

            <div className="container w-50">
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" value={student.rollno} placeholder="Rollno" readOnly name="rollno" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" value={student.name} placeholder="Name" name="name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <select className="form-control" name="gender" value={student.gender} onChange={handleChange}>
                        <option disabled selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" value={student.mobileNo} placeholder="Mobileno" name="mobileNo" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" value={student.city} placeholder="City" name="city" onChange={handleChange}/>
                </div>
                <button className="btn btn-info">Update Student</button>
            </form>
            </div>
        </>
    )
}