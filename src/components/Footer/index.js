import React from "react";

//styles
import { Wrapper,Content,Image } from "./Footer.styles";

//socialicons
import instagram from '../../images/instagram.png'
import github from '../../images/github.png'
import twitter from '../../images/twitter.png'

const Footer = () => {
    <Wrapper>
        <Content >
            <Image scr={instagram} alt='Instagram'/>
            <Image scr={github} alt='github' />
            <Image scr={twitter} alt='twitter' />
        </Content>
    </Wrapper>
}

export default Footer;