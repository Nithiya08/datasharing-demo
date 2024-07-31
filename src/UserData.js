import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Table from 'react-bootstrap/Table';
function UserData() {
    let [users, setUser] = useState([])
    let [search, setSearch] = useState('')
    let [displayFmt,setDisplayFmt]=useState('table')
    const handleChange=(event)=>{
    setDisplayFmt(event.target.value)
    }
    async function getAllUser() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users")
            let data = await response.json()
            setUser(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAllUser()
    }, [])
    const handle = (event) => {
        setSearch(event.target.value)
    }
    let filterUser = search ? users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())
        || user.address.city.toLowerCase().includes(search.toLowerCase())
    ) : users
    return (<>
    <b>Selecet Display Format </b><select value={displayFmt} onChange={handleChange}>
        <option value={'div'}>DIV</option>
        <option value={'table'}>TABLE</option>
        <option value={'card'}>CARD</option>
    </select>
    <b>Search</b><input type="text" value={search} onChange={handle}></input>
        {filterUser && displayFmt==='div' &&
         filterUser.map((user) => <div>{JSON.stringify(user)}<hr></hr></div>)}
        
        <div className="card-container">
            {filterUser && displayFmt==='card' &&
            filterUser.map((user) => <UserCard user={user}></UserCard>)}
        </div><br></br>

       {filterUser && displayFmt==='table' &&
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th>CITY</th>
        </tr>
      </thead>
      <tbody>
        {filterUser && filterUser .map((user)=>(
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.address.city}</td>
        </tr>
        ))}
        </tbody>
        </Table>
        }
    </>)
}
export default UserData