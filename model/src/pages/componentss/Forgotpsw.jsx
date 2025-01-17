import React, { useState } from 'react';
import { OTPPSW } from '../../Api';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MAIN = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: aqua;
`;

const FOR = styled.div`
  width: 439px;
  height: 280px;
  background-color: lightgray;
  padding: 30px;
  border-radius: 15px;
  border: 2px solid;
  text-align: center;
`;

const Input = styled.input`
  width: 90%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 90%;
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

const Forgotpsw = () => {
  const navigate = useNavigate();
  const [EMAIL, setEMAIL] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function display() {
    setError('');
    if (!EMAIL.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    OTPPSW({ EMAIL })
      .then((data) => {
        if (data.message === "mail send successfully") {
          navigate('/password');
        } else {
          setError('Failed to send OTP. Please try again.');
        }
      })
      .catch((err) => {
        setError('An error occurred. Please try again later.');
        console.error(err);
      })
      .finally(() => setLoading(false));
  }

  return (
    <MAIN>
      <FOR>
        <p>Enter Your Email</p>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEMAIL(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button onClick={display} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </FOR>
    </MAIN>
  );
};

export default Forgotpsw;
