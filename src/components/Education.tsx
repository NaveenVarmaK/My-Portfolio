import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Import the location icon

export default function Education() {
  const [extraExpanded1, setExtraExpanded1] = React.useState(false);
  const [extraExpanded2, setExtraExpanded2] = React.useState(false);

  const handleExtraExpandClick1 = () => {
    setExtraExpanded1(!extraExpanded1);
  };

  const handleExtraExpandClick2 = () => {
    setExtraExpanded2(!extraExpanded2);
  };

  const handleLocationClick = () => {
    // Redirect to a link when the location button is clicked
    window.open('https://www.google.com/maps', '_blank'); // Replace with your desired link
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0,
        mt: 15,
      }}
    >
      {/* Background Large Text */}
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: { xs: '40rem', md: '20rem' }, // Responsive font size
          fontWeight: 900,
          color: 'rgba(0, 0, 0, 0.1)', // Transparent text
          zIndex: -1,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        EDUCATION
      </Typography>

      {/* Container for Two Cards */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 4, // Adds space between the cards
          justifyContent: 'center',
          alignItems: 'flex-start', // Align cards to the top
          mt: 5,
        }}
      >
        {/* First Card */}
        <Card sx={{ minWidth: 600, maxWidth: 500 }}>
          {/* Location Button at Top-Right */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <Button
              startIcon={<LocationOnIcon />} // Add the location icon
              variant="outlined"
              size="small"
              onClick={handleLocationClick} // Redirect to a link on click
            >
              Location
            </Button>
          </Box>

          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              École nationale supérieure des mines de Saint-Étienne
            </Typography>
            <Typography variant="h5" component="div">
            M2 - MSc in Cyber-Physical Social Systems            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2.0 }}>2019 - 2022</Typography>
            <Typography variant="body2">
            Web Programming, Mobile Programming, Digital Twin, Semantic Web,
Cybersecurity, Cloud and Edge Infrastructures, Machine Learning, Systems Engineering, Data Interoperability & Semantics, and Technological
Foundations of Software Development.
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            {/* More Details Button at Bottom-Left */}
            <Button
              onClick={handleExtraExpandClick1}
              variant="outlined"
              size="small"
              sx={{ ml: 0 }} // Align to the left
            >
              Courses
            </Button>
          </CardActions>

          {/* Collapsible Section for More Details */}
          <Collapse in={extraExpanded1} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                - Advanced Algorithms<br />
                - Machine Learning<br />
                - Distributed Systems<br />
                - Web Development
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        {/* Second Card */}
        <Card sx={{ minWidth: 400, maxWidth: 500 }}>
          {/* Location Button at Top-Right */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <Button
              startIcon={<LocationOnIcon />} // Add the location icon
              variant="outlined"
              size="small"
              onClick={handleLocationClick} // Redirect to a link on click
            >
              Location
            </Button>
          </Box>

          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              University of Example
            </Typography>
            <Typography variant="h5" component="div">
              Bachelor's Degree in Information Technology
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2.0 }}>2015 - 2019</Typography>
            <Typography variant="body2">
              I completed my Bachelor's degree in Information Technology, where I gained expertise in programming, database management, and network security. The program emphasized hands-on learning and real-world applications.
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            {/* More Details Button at Bottom-Left */}
            <Button
              onClick={handleExtraExpandClick2}
              variant="outlined"
              size="small"
              sx={{ ml: 0 }} // Align to the left
            >
              Courses
            </Button>
          </CardActions>

          {/* Collapsible Section for More Details */}
          <Collapse in={extraExpanded2} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                - Programming Fundamentals<br />
                - Database Systems<br />
                - Network Security<br />
                - Software Engineering
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </Box>
  );
}