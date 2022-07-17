import React from 'react';
import styled from 'styled-components';
import shopImage from '../../Assets/images/Lifestyle_web.avif';

const Shop = () => {
    return (
        <div className=''>
            <Container>
            <h1 className='text-5xl my-5'>Lifestyle</h1>
            <Button>SHOP NOW</Button>
            </Container>
        </div>
    );
};

export default Shop;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${shopImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding-bottom: 20vh;

` 

const Button = styled.button`
    border: 2px solid #000;
    border-radius: 100px;
    padding: 4px 80px;
`;
