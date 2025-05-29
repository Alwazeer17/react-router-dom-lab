import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate('/mailboxes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Owner:</label>
      <input value={boxOwner} onChange={(e) => setBoxOwner(e.target.value)} required />
      
      <label>Size:</label>
      <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>

      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;
