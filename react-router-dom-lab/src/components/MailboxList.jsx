import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <section>
      {mailboxes.map((box) => (
        <Link to={`/mailboxes/${box._id}`} key={box._id}>
          <div className="mail-box">
            <p>Box #{box._id}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default MailboxList;
