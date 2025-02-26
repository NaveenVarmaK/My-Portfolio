import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{ width: '100%', typography: 'body1' , textAlign: 'center' , mt: 10 , fontFamily: 'cursive'     }}>
      <Typography variant="h3" gutterBottom>
        Hello!, My Name is <Typography variant= "h1">Naveen Varma KALIDINDI </Typography>Computer Science Student
      </Typography>
    
    </Box>
  );
}