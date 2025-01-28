import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { OTPPSW } from '../../Api';

const Samp = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook to navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/forgot-password', { email });
      setMessage(response.data.message);

      // Redirect to the update password page after OTP is sent
      navigate(`/update-password`, { state: { email } });
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  function display(){
    OTPPSW({ EMAIL })
  }

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button onClick={display} type="submit">Send OTP</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};



export default Samp
