import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [mailboxId, setMailboxId] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Send to Mailbox:</label>
      <select value={mailboxId} onChange={(e) => setMailboxId(e.target.value)} required>
        <option value="">Select Mailbox</option>
        {mailboxes.map((box) => (
          <option key={box._id} value={box._id}>
            Box #{box._id}
          </option>
        ))}
      </select>

      <label>Recipient Name:</label>
      <input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        required
      />

      <label>Message:</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      <button type="submit">Send Letter</button>
    </form>
  );
};

export default LetterForm;
