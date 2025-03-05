import { Box, Card, CardContent, Typography } from '@mui/material';

export default function LargeTextWithCard() {
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
          fontSize: ['5rem','10rem', '30rem'], // Responsive size
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
        Myself
      </Typography>

      {/* Foreground Card with Blur Effect */}
      <Card
        sx={{
        //   backgroundColor: 'rgba(152, 134, 134, 0.5)', // Semi-transparent background
          backgroundColor: 'rgba(80, 80, 129, 0.1)', // Semi-transparent background
          backdropFilter: 'blur(30px)', // Blur effect
          boxShadow: 3,
          borderRadius: 2,
          maxWidth: 700,
          padding: 3,
          color: 'white',
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            mt={2}
            sx={{
              fontWeight: 'bold', // Make text bold
            }}
          >
            Driven by an insatiable curiosity, I am a lifelong learner passionate
            about exploring the ever-evolving world of technology. I thrive on
            understanding complex systems, uncovering innovative solutions, and
            applying knowledge to make meaningful improvements. My mission is to
            harness the power of technology to solve real-world challenges,
            create positive impact, and continuously grow as a technologist.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}