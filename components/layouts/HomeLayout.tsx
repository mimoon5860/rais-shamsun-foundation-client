import React, { FC, PropsWithChildren } from 'react';
import Footer from '../footer/Footer';
import MainHeader from '../header/MainHeader';

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <MainHeader />
            <div style={{ minHeight: 'calc(100vh - 250px)' }}>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default HomeLayout;