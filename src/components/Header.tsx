import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        mt: 10,
        fontFamily: 'cursive',
      }}
    >
      {/* Greeting Text */}
      <Typography
        variant="h3"
        component="div"
        sx={{
          fontFamily: 'Pacifico, cursive', // Use a custom font
          color: 'white', // Slightly transparent
          fontSize: { xs: '2rem', sm: '3rem' }, // Responsive font size
          mb: 2, // Add margin bottom
        }}
      >
        Hello There!, My Name is
      </Typography>

      {/* Name Text */}
      <Typography
        variant="h2"
        component="div"
        sx={{
          fontFamily: 'Montserrat, sans-serif', // Use a modern sans-serif font
          fontWeight: 200, // Bold font weight
          color: 'WHITE', // Less transparent
          fontSize: { xs: '2.5rem', sm: '4rem' }, // Responsive font size
          mb: 2, // Add margin bottom
        }}
      >
        Naveen Varma KALIDINDI
      </Typography>

      {/* Subtitle Text */}
      <Typography
        variant="h3"
        component="div"
        sx={{
          fontFamily: 'Pacifico, cursive', // Use a clean sans-serif font
          color: 'white', // More transparent
          fontSize: { xs: '2rem', sm: '3rem' }, // Responsive font size
          mb: 1, // Add margin bottom
          // fontStyle: 'italic', // Italicize the text
        }}
      >
        Computer Science Engineer / Full Stack Developer
      </Typography>
    </Box>
  );
}