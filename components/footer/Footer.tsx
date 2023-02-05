import Link from 'next/link';
import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    const date = new Date();
    return (
        <div className='text-center bg-white py-3'>
            <p className={style.footerText}>Copyright &copy; {date.getFullYear()} {<Link href='/'><a>Rais-Shamsun Foundation</a></Link>} - all rights reserved.</p>
            <p className={style.footerText}>Technical support by {<a target="_blank" rel="noreferrer" href='https://www.mimoonweb.com/'>MI Moon.</a>}</p>
            <p className={style.footerText}><Link href='/terms-and-confitions'><a>Terms and conditions </a></Link> | <Link href='/privacy-policy'><a> Privacy Policy</a></Link></p>
        </div>
    );
};

export default Footer;