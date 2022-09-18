import Navbar from '../Logo'
import { Card } from 'react-bootstrap';
const Profile=()=>{
    return(
        <>
        <Navbar/>
        <Card style={{ width: '75%',height:"30%",margin:'4% auto auto auto',padding:'0%' }}>
            <Card.Img variant="top" style={{width:"30%" ,height:"10%"}}src='https://image.shutterstock.com/image-illustration/orange-small-sleeping-lamp-3d-260nw-2160802949.jpg'/>
            <Card.Title>Card Title</Card.Title>
            <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
       
      
        {/*create a table component this is just a placeholder*/}
    
     
        </>



    );
}

export default Profile;