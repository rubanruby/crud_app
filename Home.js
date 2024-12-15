import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


export default function Home() 
{
    const [studentRecords, setStudentRecords] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/api/students')
        .then((res)=>{
            // console.log(res.data);
            setStudentRecords(res.data)
        })
    },[studentRecords])

    function deleteStudent(rollno)
    {
        if (window.confirm("Are you sure you want to delete this record?")) {
            axios.delete('http://localhost:8081/api/student/' + rollno)
                .then((res) => {
                    // if (res.data.rollno == rollno)
                        // alert('deleted Succesfully')
                })

          } else {
            
            console.log('Thing was not saved to the database.');
          }

       
    }

    return (
      <>
        <h3>All Students</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Rollno</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Mobileno</th>
                    <th>City</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentRecords.map((stu)=>{
                        return <tr key={stu.rollno}>
                            <td>{stu.rollno}</td>
                            <td>{stu.name}</td>
                            <td>{stu.gender}</td>
                            <td>{stu.mobileNo}</td>
                            <td>{stu.city}</td>
                            <td>
                                <Link to={`/edit/${stu.rollno}`} className="btn btn-info">Edit</Link>
                                <button onClick={()=>{deleteStudent(stu.rollno)}} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        
      </>
    );
  }