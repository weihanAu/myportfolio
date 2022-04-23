import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>call</LinkTitle>
          <LinkItem href='tel:0452643191'>0452643191</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:wangweihan1992@gmail.com'>wangweihan1992@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
     <SocialContainer>
       <CompanyContainer>
         <Slogan>write a code, change a world</Slogan>
       </CompanyContainer>
       <SocialIcons href='https://github.com/han19920516'>
          <AiFillGithub size="3rem">github</AiFillGithub>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/barry-wang-398984143/'>
          <AiFillLinkedin size="3rem">Linkedin</AiFillLinkedin>
      </SocialIcons>
     </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
