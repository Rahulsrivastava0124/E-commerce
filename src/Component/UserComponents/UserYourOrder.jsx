import React from 'react';
import { useLocation } from 'react-router-dom';

const YourOrder = () => {
    const location=useLocation()
    console.log(location.state.OrderData);
    return (
        <div>
            This is your order page.
        </div>
    );
}

export default YourOrder;
