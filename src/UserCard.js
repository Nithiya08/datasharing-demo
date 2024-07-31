
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function UserCard({user}){
    return(<>
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{user.id}</ListGroup.Item>
        <ListGroup.Item>{user.name}</ListGroup.Item>
        <ListGroup.Item>{user.username}</ListGroup.Item>
        <ListGroup.Item>{user.email}</ListGroup.Item>
        <ListGroup.Item>{user.address.city}</ListGroup.Item>
      </ListGroup>
    </Card>
  
    </>)
}
export default UserCard