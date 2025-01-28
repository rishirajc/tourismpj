import React, { useEffect, useState } from 'react';
import { DELETE, GETDATAS } from '../../Api';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './prof.css'

const MAIN = styled.div`
  width: 100%;
  min-height: 110vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://cdn.pixabay.com/photo/2019/07/18/14/36/ocean-4346633_1280.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const SEC = styled.div`
  width: 20%;
  height: 500px;
`;

const ONE = styled.div`
  margin-top: -90px;
  width: 20%;
  height: 664px;
`;

const Profile = () => {
  const localvalue = useSelector((state) => state.login.loginData);
  console.log("local storage data", localvalue);
  const Id = localvalue?.userid;

  const [state, setState] = useState([]);
  const [state1, setState1] = useState();
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);  

  useEffect(() => {
    GETDATAS(Id)
      .then((data) => {
        console.log("data:", data);
        setState(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [Id]);

  function handleDelete() {
    DELETE(Id, dispatch)
      .then((data) => {
        setState1(data.message);
        console.log("Account deleted:", data.message);
        handleClose(); 
      })
      .catch((error) => console.error("Error deleting account:", error));
  }

  return (
    <div style={{ width: "100%", height: "100px" }}>
      <MAIN>
        <ONE>
          <SEC>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIG.69nPvzou81d8KVDyZl__?pid=ImgDetMain" />
              <Card.Body>
                <Card.Title>MY PROFILE</Card.Title>
                <h4 className="name2">{state?.Name}</h4>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item><h4 className="email">{state?.Email}</h4></ListGroup.Item>
                <ListGroup.Item><h4 className="mob1">{state?.Mobile}</h4></ListGroup.Item>
                <ListGroup.Item><h4 className="place1">{state?.Place}</h4></ListGroup.Item>
                <ListGroup.Item><h4 className="age1">{state?.Age}</h4></ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link><Link to={'/name'}><button className="edit">EDIT</button></Link></Card.Link>
                <Card.Link>
                  <button className="hai" onClick={handleShow}>
                    DELETE ACCOUNT
                  </button>
                </Card.Link>
              </Card.Body>
            </Card>
          </SEC>
        </ONE>
      
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Delete My Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete your account?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleDelete}>
              Yes
            </Button>
           <Link to={'/home'}><Button variant="primary" onClick={handleClose}>
              No
            </Button></Link> 
          </Modal.Footer>
        </Modal>
      </MAIN>
     <Link to={'/samp'}> <button>sample</button></Link>
    </div>
  );
};

export default Profile;
