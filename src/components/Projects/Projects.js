import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
 <Section nopadding id='projects'>
   <SectionDivider/>
   <SectionTitle main>Projects</SectionTitle>
   <GridContainer>
     {projects.map(i=>(
       <BlogCard key={i.id}>
         <Img src={i.image}/>
         <TitleContent>
           <HeaderThree>{i.title}</HeaderThree>
           <Hr />
           <CardInfo>{i.description}</CardInfo>
           <div>
             <TitleContent>stack</TitleContent>
             <TagList>
               {i.tags.map((i,index)=>(
                 <Tag key={index}>
                   {i}
                 </Tag>
               ))}
             </TagList>
           </div>
           <UtilityList>
             <ExternalLinks href={i.visit}>Code</ExternalLinks>
             <ExternalLinks href={i.source}>Source</ExternalLinks>
           </UtilityList>
         </TitleContent>
       </BlogCard>
     ))}
   </GridContainer>
 </Section>
);

export default Projects;