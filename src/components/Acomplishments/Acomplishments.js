import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '2018', text: 'Graduate from Monash University with an IT master degree'},
  { number: '2016', text: '1000$ scholarship per semester from Monash University as a top student in Zhengzhou University '},
  { number: '2015', text: 'Graduate from Zhengzhou University with an EE bachelor degree', },
];

const Acomplishments = () => (
  <Section acomplishments nopadding id='acomplishments'>
    <SectionDivider />
    <SectionTitle main >Acomplishments</SectionTitle>
    <Boxes>
      {data.map((item,index)=>(
        <Box key={index}>
          <BoxNum>{'year '+item.number}</BoxNum>
          <BoxText>{item.text}</BoxText>   
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
