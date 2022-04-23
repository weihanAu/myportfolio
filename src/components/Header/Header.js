import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillCalculator, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons ,Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:'flex',alignItems:'center',color:'white'}}>
         <DiCssdeck size={'4rem'} style={{marginBottom:'20px'}}/>
         <Span style={{marginBottom:'20px'}}>Weihan Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link  href="/projects">
        <NavLink>Project</NavLink>
      </Link>
      <Link  href="/tech">
        <NavLink>Technologies</NavLink>
      </Link>
      <Link  href="/about">
        <NavLink>About Me</NavLink>
      </Link> 
    </Div2>
    <Div3>
      <SocialIcons href='github'>
          <AiFillGithub size="3rem">github</AiFillGithub>
      </SocialIcons>
      <SocialIcons href='linkedin'>
          <AiFillLinkedin size="3rem">Linkedin</AiFillLinkedin>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
