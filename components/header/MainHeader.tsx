import React from 'react';
import Image from 'next/image';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { AiFillFacebook, AiFillYoutube, AiTwotoneMail, AiFillPhone } from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';
import { useRouter } from 'next/router';
import menus from '../../utils/siteData/menuData.json';
import style from './Header.module.css';


const MainHeader = () => {
    const router = useRouter();
    return (
        <>
            <Container>
                <Row >
                    <Col>
                        <Image height={150} width={250} src="/main-logo.png" alt="" />
                    </Col>
                    <Col>
                        <div className='d-flex py-1 align-items-center justify-content-end'>
                            <AiFillFacebook className={`${style.socialIcon} ${style.facebook}`} />
                            <AiFillYoutube className={`${style.socialIcon} ${style.youtube}`} />
                            <AiTwotoneMail className={`${style.socialIcon} ${style.email}`} />
                            <AiFillPhone className={`${style.socialIcon} ${style.phone}`} />
                            <div className='ms-2'>
                                <ButtonGroup size="sm">
                                    <Button variant="success">English</Button>
                                    <Button variant="secondary">বাংলা</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className='text-end mt-5'>
                            <Link href='/donate'>
                                <a className='text-decoration-none donate-btn bg-success text-white rounded-1 px-4 py-2'><BiDonateHeart /> Donate</a>
                            </Link>
                        </div>

                    </Col>
                </Row>
            </Container>
            <header className={style.headerWrapper}>
                <Container>
                    <ul className={style.headerItemsWrapper}>
                        {
                            menus.map(item => {
                                return <li key={item.id}>
                                    <Link href={item.path}>
                                        <a>{item.name}</a>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </Container>
            </header>
        </>
    );
};


export default MainHeader;