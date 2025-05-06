import { Link } from 'react-router-dom';

import'./button.css';

export const Sendbtn = () => {
    return (
        <button className="btn-style">Send</button>
    );
};

export const Contactbtn = () => {
    return (
      <div>
        <Link to="/contact" className="btn-style">Contact us</Link>
      </div>
    );
  };