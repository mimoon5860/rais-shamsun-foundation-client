import React, { useState } from 'react';
import Image from 'next/image';
import { Button, ButtonGroup, Col, Container, Offcanvas, Row } from 'react-bootstrap';
import Link from 'next/link';
import { AiFillFacebook, AiFillYoutube, AiTwotoneMail, AiFillPhone, AiOutlineMenu } from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';
import menus from '../../utils/siteData/menuData.json';
import style from '../../styles/Header.module.css';


const MainHeader = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Container>
                <Row >
                    <Col>
                        <Image height={150} width={250} src="/main-logo.png" alt="" />
                    </Col>
                    <Col>
                        <div className='d-flex pt-1 pb-3 pb-md-none border-bottom border-success-subtle align-items-center justify-content-end'>
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
                        <div className='text-end mt-5 d-none d-md-block'>
                            <Link href='/donation'>
                                <a className='text-decoration-none donate-btn bg-success text-white rounded-1 px-4 py-2'><BiDonateHeart /> Donate</a>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <header>
                <div className={style.headerWrapper}>
                    <Container className='d-none d-md-block'>
                        <ul className={`mb-0 ${style.headerItemsWrapper}`}>
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
                </div>
                <div className='d-md-none mx-1 my-2 d-flex justify-content-between align-items-center'>
                    <div >
                        <AiOutlineMenu onClick={() => setShow(true)} className='fs-2 ' />
                    </div>
                    <div>
                        <Link href='/donation'>
                            <a className='text-decoration-none donate-btn bg-success text-white rounded-1 px-4 py-2'><BiDonateHeart /> Donate</a>
                        </Link>
                    </div>

                </div>
                <div>
                    <Offcanvas show={show} onHide={() => setShow(false)}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><Image height={150} width={250} src="/main-logo.png" alt="" /></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul >
                                {
                                    menus.map(item => {
                                        return (
                                            <Link key={item.id} href={item.path}>
                                                <li onClick={() => setShow(false)}   >
                                                    <a>{item.name}</a>
                                                </li>
                                            </Link>)
                                    })
                                }
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </header>
        </>
    );
};


export default MainHeader;