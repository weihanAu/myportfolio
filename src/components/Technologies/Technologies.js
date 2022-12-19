import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import AccordionList from '../Accordion/AccordionList';
import {FrontTechnoligies} from '../../constants/constants'

const Technologies = () =>  (
  <Section >
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I worked with a range of Technologies in the web development world.<br/>
      From Front-end to Back-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem"/>
        <ListContainer>
          <ListTitle>
           Front-end
          </ListTitle>
          <AccordionList technologies={FrontTechnoligies}/>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem"/>
        <ListContainer>
          <ListTitle>
           Back-end
          </ListTitle>
          <AccordionList technologies={FrontTechnoligies}/>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="4rem"/>
        <ListContainer>
          <ListTitle>
           UI/UX
          </ListTitle>
          <AccordionList technologies={FrontTechnoligies}/>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
