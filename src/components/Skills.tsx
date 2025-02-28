import { Box, Typography, Paper, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled component for list items
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));


//cvtag{HTML5/CSS}
// \cvtag{Angular}
// \cvtag{React}
// \cvtag{VueJS}
// \cvtag{FastAPI}
// \cvtag{RestAPI}
// \cvtag{Spring Boot}
// \cvtag{Python}
// \cvtag{Java}
// \cvtag{Kotlin}
// \cvtag{C}
// \cvtag{C++}
// \cvtag{JavaScript}
// \cvtag{SQL}
// \cvtag{SDLC}
// \cvtag{OOPs}
// \cvtag{OR-Tools VRP}
// \cvtag{AWS Cloud}
// \cvtag{Git}
// \cvtag{Docker}
// \cvtag{Ontology}
// \cvtag{QGIS}
// \cvtag{SPARQL}
// \cvtag{SHACL}
// TypeScript
// TailwindCSS
// Material-UI
// Bootstrap

// Chip data
const chipData = [
  { key: 0, label: 'Angular' },
  { key: 3, label: 'React' },
  { key: 4, label: 'Vue.js' },
    { key: 5, label: 'FastAPI' },
    { key: 6, label: 'RestAPI' },
    { key: 7, label: 'Spring Boot' },
    { key: 8, label: 'Python' },
    { key: 9, label: 'Java' },
    { key: 10, label: 'Kotlin' },
    { key: 11, label: 'C' },
    { key: 12, label: 'C++' },
    { key: 13, label: 'JavaScript' },
    { key: 13, label: 'TypeScript' },
    { key: 14, label: 'SQL' },
    { key: 15, label: 'SDLC' },
    { key: 16, label: 'OOPs' },
    { key: 17, label: 'OR-Tools VRP' },
    { key: 18, label: 'AWS Cloud' },
    { key: 19, label: 'Git' },
    { key: 20, label: 'Docker' },
    { key: 21, label: 'Ontology' },
    { key: 22, label: 'QGIS' },
    { key: 23, label: 'SPARQL' },
    { key: 24, label: 'SHACL' },


];

export default function SkillsSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 0,
        mt: 0,
      }}
    >
      {/* Large Background Text */}
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: ['3rem', '30rem'], // Responsive size
          fontWeight: 900,
          color: 'rgba(0, 0, 0, 0.1)', // Faded text effect
          zIndex: -1,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Skills
      </Typography>

      {/* Chip Array */}
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          listStyle: 'none',
          p: 2,
          backgroundColor: 'transparent', // Make the Paper background transparent
          boxShadow: 'none', // Remove shadow
        }}
        component="ul"
      >
        {chipData.map((data) => (
          <ListItem key={data.key}>
            <Chip label={data.label} />
          </ListItem>
        ))}
      </Paper>
    </Box>
  );
}