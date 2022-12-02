import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main>
       Welcome To <br/>
       Barry's Portfolio
     </SectionTitle>
     <SectionText>
       Life is like an npm install – you never know what you are going to get.
     </SectionText>
     <Button onClick={()=>{window.location='/projects'}}> Projects</Button>
   </LeftSection>
 </Section>
);

export default Hero;
