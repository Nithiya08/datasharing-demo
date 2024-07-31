import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
function FetchUser() {
    let [user, setUser] = useState([])

    async function getUser() {
        try {
            let response = await fetch("https://fakestoreapi.com/users")
            let data = await response.json()
            console.log(data)
            setUser(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    return (<>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>EMAIL ID</th>
          <th>USER NAME</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
        </tr>
      </thead>

      <tbody>
        {user && user.map((u)=>(

        
        <tr>
          <td>{u.id}</td>
          <td>{u.email}</td>
          <td>{u.username}</td>
          <td>{u.name.firstname}</td>
          <td>{u.name.lastname}</td>
        </tr>  
        ))}
      </tbody>
      </Table>
    
    </>)
}
export default FetchUser