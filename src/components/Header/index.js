import React from 'react';

import MovieLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from  '../../images/tmdb_logo.svg'

import { Wrapper,Content,LogoImg,TMDBLogoImg } from './Header.styles';
const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={MovieLogo} alt='MovieLogo'/>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb Logo'/>
        </Content>
    </Wrapper>
);

export default Header;