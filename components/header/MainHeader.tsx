import React, { useState } from 'react';
import Image from 'next/image';
import { Button, ButtonGroup, Col, Container, ListGroup, Offcanvas, Row } from 'react-bootstrap';
import Link from 'next/link';
import { AiFillFacebook, AiFillYoutube, AiTwotoneMail, AiFillPhone, AiOutlineMenu } from 'react-icons/ai';
import { FaDonate } from 'react-icons/fa';
import { BiDonateHeart } from 'react-icons/bi'
import style from '../../styles/Header.module.css';
import { useRouter } from 'next/router';
import menus from '../../utils/siteData/menuData.json'

const MainHeader = () => {
    const [show, setShow] = useState(false);
    const { push, locale, locales, pathname } = useRouter();

    const changeRoute = (path:string) => {
        setShow(false);
        push(path);
    }

    return (
        <>
            <Container>
                <Row >
                    <Col>
                        <Image onClick={()=>push('/')} height={150} width={250} src="/main-logo.png" alt="" />
                    </Col>
                    <Col>
                        <div className='d-flex pt-1 pb-3 pb-md-none border-bottom border-success-subtle align-items-center justify-content-end'>
                            <AiFillFacebook className={`${style.socialIcon} ${style.facebook}`} />
                            <AiFillYoutube onClick={() => push('https://www.youtube.com/channel/UCA3fNt2oFCTsrg6AVguSiPw')} className={`${style.socialIcon} ${style.youtube}`} />
                            <AiTwotoneMail className={`${style.socialIcon} ${style.email}`} />
                            <AiFillPhone className={`${style.socialIcon} ${style.phone}`} />
                            <div className='ms-2'>
                                <ButtonGroup size="sm">
                                    {locales?.map(l => {
                                        return <Button className='border border-success' key={l} onClick={() => push(pathname, undefined, { locale: l })} variant={l === locale ? 'success' : 'light'}>{l}</Button>
                                    })}
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
                            <a className='text-decoration-none donate-btn bg-success text-white rounded-1 px-4 py-2'>< FaDonate /> Donation</a>
                        </Link>
                    </div>

                </div>

                {/* Header for phone  */}
                <div>
                    <Offcanvas show={show} onHide={() => setShow(false)}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><Image onClick={()=>changeRoute('/')} height={150} width={250} src="/main-logo.png" alt="" /></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ListGroup>
                                {
                                    menus.map(item => {
                                        return (<ListGroup.Item onClick={()=>changeRoute(item.path)} key={item.id} action variant="info">
                                           {item.name}
                                        </ListGroup.Item>)
                                    })
                                }

                            </ListGroup>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </header>
        </>
    );
};


export default MainHeader;