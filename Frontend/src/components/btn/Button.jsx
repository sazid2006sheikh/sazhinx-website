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
        <Link to="/contact" className="btn-style btn-media-query-style">Contact us</Link>
        <Link to="/contact" className="btn-style btn-media-query-style-logo"><i className="fa-solid fa-phone"></i></Link>
      </div>
    );
  };