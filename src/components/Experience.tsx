import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Import the location icon



//i want to create a another button for FASTAPI

export default function ExpandableCard() {
  const [extraExpanded1, setExtraExpanded1] = React.useState(false);
  const [extraExpanded2, setExtraExpanded2] = React.useState(false);
  const [extraExpanded3, setExtraExpanded3] = React.useState(false);
    const [extraExpanded4, setExtraExpanded4] = React.useState(false);
    const [extraExpanded5, setExtraExpanded5] = React.useState(false);

  const handleExtraExpandClick1 = () => {
    setExtraExpanded1(!extraExpanded1);
  };

  const handleExtraExpandClick2 = () => {
    setExtraExpanded2(!extraExpanded2);
  };

    const handleExtraExpandClick3 = () => {
        setExtraExpanded3(!extraExpanded3);
    };

    const handleExtraExpandClick4 = () => {
        setExtraExpanded4(!extraExpanded4);
    };

    const handleExtraExpandClick5 = () => {
        setExtraExpanded5(!extraExpanded5);
    };

  const handleLocationClick = () => {
    // Redirect to a link when the location button is clicked
    window.open('https://www.google.com/maps/place/%C3%89cole+Des+Mines,+Espace+Fauriel/@45.4277003,4.4027617,18.33z/data=!3m1!5s0x47f5a94bd02adb0f:0xed7dafed87d9a232!4m6!3m5!1s0x47f5a9458c1f313b:0xc479b0b096409b68!8m2!3d45.4278146!4d4.4038761!16s%2Fg%2F11cn0nf41b?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D', '_blank'); // Replace with your desired link
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
        EXPERIENCE
      </Typography>

      {/* Foreground Card */}
      <Card sx={{ minWidth: 500, maxWidth: 800, mt: 5 }}>
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
            Web Application Developer - Intern
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 2.0 }}>04 - 2024 to 08 - 2024</Typography>
          <Typography variant="body1">
          Developed a Python-based application to optimize waste collection and treatment scenarios in Saint-Étienne, improving environmental performance. Designed key performance indicators to minimize emissions and resource use. Built FastAPI-based APIs for seamless data handling and a Vue.js interface for scenario selection and visualization. Conducted geospatial analysis with QGIS to calculate collection point distances and optimized vehicle routing with Google OR-Tools, reducing travel distance and fuel consumption. This project strengthened my expertise in full-stack development, geospatial analysis, and optimization.          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          {/* More Details Button at Bottom-Left */}
          <Button
            onClick={handleExtraExpandClick1}
            variant="outlined"
            size="small"
            sx={{ ml: 0 }} // Align to the left
          >
            Python
          </Button>
          <Button
            onClick={handleExtraExpandClick2}
            variant="outlined"
            size="small"
            sx={{ ml: 2 }} // Align to the left
          >
            VueJS
          </Button>
            <Button
                onClick={handleExtraExpandClick3}
                variant="outlined"
                size="small"
                sx={{ ml: 2 }} // Align to the left
            >
                QGIS
            </Button>
            <Button
                onClick={handleExtraExpandClick4}
                variant="outlined"
                size="small"
                sx={{ ml: 2 }} // Align to the left
            >
                OR-Tools
            </Button>
            <Button
                onClick={handleExtraExpandClick5}
                variant="outlined"
                size="small"
                sx={{ ml: 2 }} // Align to the left
            >
                FASTAPI
            </Button>
        </CardActions>

        {/* Collapsible Section for More Details */}
        <Collapse in={extraExpanded1} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              This section expands separately from the first one and is controlled by the
              "Python" button.
            </Typography>
          </CardContent>
        </Collapse>

        {/* Collapsible Section for More Details */}
        <Collapse in={extraExpanded2} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              This section expands separately from the first one and is controlled by the
              "VueJS" button.
            </Typography>
          </CardContent>
        </Collapse>

        {/* Collapsible Section for More Details */}
        <Collapse in={extraExpanded3} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              This section expands separately from the first one and is controlled by the
              "QGIS" button.
            </Typography>
          </CardContent>
        </Collapse>

        {/* Collapsible Section for More Details */}
        <Collapse in={extraExpanded4} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>
                This section expands separately from the first one and is controlled by the
                "OR-Tools" button.
                </Typography>
            </CardContent>
        </Collapse>

        {/* Collapsible Section for More Details */}
        <Collapse in={extraExpanded5} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>
                This section expands separately from the first one and is controlled by the
                "FASTAPI" button.
                </Typography>
            </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}