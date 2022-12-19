import { Accordion, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#0F1624',
    borderRadius: theme.radius.sm,
    color:'white',
  },
  label:{
    fontFamily:'Space Grotesk,sans-serif',
    fontSize: '1.6rem',
    color:' hsl(204,23.8%,95.9%)',
    cursor: 'default'
  },
  item: {
    backgroundColor: '#0F1624',
    border: '1px solid transparent',
    position: 'relative',
    color:'white',
    zIndex: 0,
    transition: 'transform 150ms ease',

    '&[data-active]': {
      transform: 'scale(1.03)',
      backgroundColor:'#0F1624',
      boxShadow: theme.shadows.md,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(-90deg)',
    },
    color:'white'
  },
}));

function AccordionList({technologies}) {
  const { classes } = useStyles();
  return (
    <Accordion
      sx={{ maxWidth: 420 }}
      mx="auto"
      variant="filled"
      defaultValue="customization"
      classNames={classes}
      className={classes.root}
      style={{margin:0}}
    >
       {technologies.map((item)=>{
        return(
          <Accordion.Item value={item.name}>
            <Accordion.Control>{item.name}</Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
          </Accordion.Item>
        )
       })}
    </Accordion>
  );
}

export default AccordionList;