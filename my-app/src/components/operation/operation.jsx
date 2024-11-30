import React from 'react';
import { Link } from 'react-router-dom';
import './operation.css';

const Operation = ({ price }) => {
  return (
    <div className="downheader">
        <p className="price">Price: {price} €</p>
        <div className='choose_buttons'>
            <Link to="/catalog">
                <button>Go back</button>
            </Link>
            <Link to="/cart">
                <button>Add to cart</button>
            </Link>
        </div>
    </div>
  );
};

export default Operation;
