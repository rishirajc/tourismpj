import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UPDATE } from '../../Api';
import styled from 'styled-components';

const MAIN = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #2986db;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 80%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
`;

const PswdUpdt = () => {
  const localvalue = useSelector((state) => state.login.loginData);
  const Id = localvalue?.userid;

  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  function display() {
    setError('');
    setSuccess('');

    // Password validation
    if (Password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setLoading(true);
    UPDATE(Id, { Password })
      .then((response) => {
        if (response.success) {
          setSuccess('Password updated successfully.');
          setPassword(''); // Clear the password input
        } else {
          setError('Failed to update password. Please try again.');
        }
      })
      .catch((err) => {
        setError('An error occurred. Please try again later.');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <MAIN>
      <Container>
        <h3>Enter Your New Password</h3>
        <Input
          type="password"
          placeholder="New password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <Button onClick={display} disabled={loading}>
          {loading ? 'Updating...' : 'Update'}
        </Button>
      </Container>
    </MAIN>
  );
};

export default PswdUpdt;
