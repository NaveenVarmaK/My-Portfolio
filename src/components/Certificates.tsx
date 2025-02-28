import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [
  {
    id: 1,
    title: 'AWS',
    description: 'AWS Certified Cloud Practitioner - Pluralsight.',
  },
  {
    id: 2,
    title: 'Angular',
    description: 'Angular The Complete Guide.',
  },
  {
    id: 3,
    title: 'SQL',
    description: 'Introduction to Databases and SQL Querying.',
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <Box
      sx={{
        position: 'relative', // Needed for absolute positioning of background text
        width: '100%',
        minHeight: '60vh', // Ensure the component takes up enough vertical space
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 0, // Add some padding
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
          fontSize: ['3rem', '18rem'], // Responsive size
          fontWeight: 900,
          color: 'rgba(0, 0, 0, 0.1)', // Faded text effect
          zIndex: -1, // Ensure it stays behind the cards
          textAlign: 'center',
          userSelect: 'none', // Prevent text selection
          whiteSpace: 'nowrap', // Prevent text wrapping
        }}
      >
        Certifications
      </Typography>

      {/* Centered Cards Grid */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap', // Allow cards to wrap to the next line if needed
          gap: 2, // Add spacing between cards
          zIndex: 1, // Ensure cards are above the background text
          maxWidth: '100%', // Ensure the grid doesn't exceed the container width
        }}
      >
        {cards.map((card, index) => (
          <Card key={card.id} sx={{ width: 350 }}> {/* Fixed width for cards */}
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? '' : undefined}
              sx={{
                height: '100%',
                '&[data-active]': {
                  backgroundColor: 'action.selected',
                  '&:hover': {
                    backgroundColor: 'action.selectedHover',
                  },
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default SelectActionCard;