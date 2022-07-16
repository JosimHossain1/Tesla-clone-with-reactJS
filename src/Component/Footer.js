import React from 'react';
import FooterList from '../Data/FooterList';


const Footer = () => {
    return (
        <div>
           <ul className='flex justify-center py-4 space-x-3'>
            {
                FooterList.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.text}</a>
                    </li>
                ))
            }
           </ul>
        </div>
    );
};

export default Footer;