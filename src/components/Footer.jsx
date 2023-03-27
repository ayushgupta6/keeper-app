import React from "react";
import reactDOM from 'react-dom';

const date = new Date();

function Footer(){
    return <footer>
        <p>Copyright © {date.getFullYear()}</p>
    </footer>;
}

export default Footer;