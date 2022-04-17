import styled from 'styled-components';

export const Content = styled.div`
    width: calc(100% - 60px);
    text-align: center;
`;

export const Container = styled.div`
    display: block;
    margin: 20px;
    padding: 20px;
    width: 100%;
    float: left;
    @media only screen and (max-width: 480px) {
        /* For everything smaller than 480px */
        margin: 0;
        width: 100%;
    }
`;
