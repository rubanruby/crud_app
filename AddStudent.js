import axios from "axios";
import { useState } from "react"
import { useNavigate } from 'react-router-dom';



export default function AddStudent()
{

    const[student, setStudent] = useState({})

    const myNavigate = useNavigate()

    function handleChange(e)
    {
        setStudent({...student, [e.target.name]:e.target.value});
        
    }

    function formSubmit(e)
    {
        e.preventDefault();
        // console.log(student);
        axios.post('http://localhost:8081/api/student', student)
        .then((res)=>{
            // console.log(res.data);
            if(res.data.rollno==student.rollno){
                alert('Added Succesfully')
                myNavigate('/home')
                e.target.reser();
            }
            else
                alert('Student already exist')
        })
    }

    return(
        <>
            <h3>Add New Student</h3>

            <div className="container w-50">
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Rollno" name="rollno" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" name="name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <select className="form-control" name="gender" onChange={handleChange}>
                        <option disabled selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Mobileno" name="mobileNo" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="City" name="city" onChange={handleChange}/>
                </div>
                <button className="btn btn-primary">Add Student</button>
            </form>
            </div>
        </>
    )
}