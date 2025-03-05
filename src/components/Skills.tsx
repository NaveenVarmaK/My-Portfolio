import { Box, Typography, Paper, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled component for list items
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

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
        maxWidth: '100%',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        mt: 15,
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
          fontSize: ['3rem', '10rem', '35rem'], // More responsive sizing
          fontWeight: 900,
          color: '#505081', // Faded text effect
          zIndex: -1,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          minWidth: '50%',
          maxWidth: '100%',
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
          backgroundColor: 'transparent', // Transparent background
          boxShadow: 'none', // Remove shadow
          width: ['90%', '80%', '60%'], // Responsive width
        }}
        component="ul"
      >
        {chipData.map((data) => (
          <ListItem key={data.key}>
            <Chip label={data.label} sx={{ color: 'white', backgroundColor: 'rgba(80, 80, 129, 0.1)', backdropFilter: 'blur(30px)', boxShadow: 3, borderRadius: 2, padding: 3, fontWeight: 'bold'}} />
          </ListItem>
        ))}
      </Paper>
    </Box>
  );
}
