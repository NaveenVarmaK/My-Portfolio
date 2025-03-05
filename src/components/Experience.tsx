import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Import the location icon

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
    window.open(
      'https://www.google.com/maps/place/%C3%89cole+Des+Mines,+Espace+Fauriel/@45.4277003,4.4027617,18.33z/data=!3m1!5s0x47f5a94bd02adb0f:0xed7dafed87d9a232!4m6!3m5!1s0x47f5a9458c1f313b:0xc479b0b096409b68!8m2!3d45.4278146!4d4.4038761!16s%2Fg%2F11cn0nf41b?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D',
      '_blank'
    ); // Replace with your desired link
  };

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '100%',
        minHeight: '60vh',
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
          // fontSize: { xs: '40rem', md: '20rem' }, // Responsive font size
          fontSize: ['5rem', '10rem', '20rem'], // Responsive font size
          fontWeight: 900,
          color: '#505081', // Faded text effect
          zIndex: -1,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          minWidth: '50%',
          maxWidth
          : '100%',
        }}
      >
        EXPERIENCE
      </Typography>

      {/* Foreground Card */}
      <Card
        sx={{
          minWidth: 400,
          maxWidth: 900,
          mt: 5,
          backgroundColor: 'rgba(80, 80, 129, 0.1)',
          backdropFilter: 'blur(30px)',
          boxShadow: 3,
          borderRadius: 2,
          padding: 3,
          color: 'white',
        }}
      >
        {/* Location Button at Top-Right */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <Button
            startIcon={<LocationOnIcon />} // Add the location icon
            variant="outlined"
            size="small"
            onClick={handleLocationClick} // Redirect to a link on click
            sx={{ minWidth: 'auto', padding: '8px',  backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }} // Remove text and adjust padding
          >Location
            {/* No text here */}
          </Button>
        </Box>

        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
            École nationale supérieure des mines de Saint-Étienne
          </Typography>
          <Typography variant="h4" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
            Web Application Developer - Intern
          </Typography>
          <Typography sx={{ mb: 2.0, fontWeight: 'bold', color: 'white' }}>
            04 - 2024 to 08 - 2024
          </Typography>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            Developed a Python-based application to optimize waste collection and treatment
            scenarios in Saint-Étienne, improving environmental performance. Designed key
            performance indicators to minimize emissions and resource use. Built FastAPI-based
            APIs for seamless data handling and a Vue.js interface for scenario selection and
            visualization. Conducted geospatial analysis with QGIS to calculate collection
            point distances and optimized vehicle routing with Google OR-Tools, reducing
            travel distance and fuel consumption. This project strengthened my expertise in
            full-stack development, geospatial analysis, and optimization.
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          {/* Buttons with white background and black text */}
          <Button
            onClick={handleExtraExpandClick1}
            variant="contained"
            size="small"
            sx={{ ml: 0, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }} // White background, black text
          >
            Python
          </Button>
          <Button
            onClick={handleExtraExpandClick2}
            variant="contained"
            size="small"
            sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }} // White background, black text
          >
            VueJS
          </Button>
          <Button
            onClick={handleExtraExpandClick3}
            variant="contained"
            size="small"
            sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }} // White background, black text
          >
            QGIS
          </Button>
          <Button
            onClick={handleExtraExpandClick4}
            variant="contained"
            size="small"
            sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }} // White background, black text
          >
            OR-Tools
          </Button>
          <Button
            onClick={handleExtraExpandClick5}
            variant="contained"
            size="small"
            sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }} // White background, black text
          >
            FASTAPI
          </Button>
        </CardActions>

        
{/* Collapsible Sections */}
<Collapse in={extraExpanded1} timeout="auto" unmountOnExit>
  <CardContent>
    {/* <Typography paragraph>
      <strong>The waste treatment model was implemented as modular Python applications, with each process structured into:</strong>
    </Typography>
    <Typography paragraph>
      <strong>Core Functionality (core.py)</strong> – Contains key algorithms and calculations.
      <br />
      <strong>Execution Script (run.py)</strong> – Manages orchestration, I/O operations, and result consolidation.
      <br />
      <strong>Configuration File (config.txt)</strong> – Stores adjustable parameters for flexibility.
    </Typography> */}
    <Typography paragraph sx={{ color: 'white' , fontWeight: 'bold' }}>
      I chose a modular Python package approach for better maintainability, integration, and scalability. Each process—Transport, Methanisation, Sludge Treatment, Cleaning, Fuel Conversion, and more—was encapsulated in separate packages, ensuring seamless updates and efficient waste management modeling.
    </Typography>
    <Typography paragraph sx={{ color: 'white' , fontWeight: 'bold' }}>
      <strong>Key technologies:</strong> Pandas and OpenPyxl for Excel data handling, argparse for CLI interactions, logging for error tracking, and CSV generation for output storage.
    </Typography>
  </CardContent>
</Collapse>
        <Collapse in={extraExpanded2} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph sx={{ color: 'white' , fontWeight: 'bold' }}>
            Developed a Vue.js frontend for evaluating multiple waste management scenarios, enabling users to select inputs, compare different models, and visualize data through interactive graphs. This helped identify the most efficient waste management strategy for the metropolitan area.
            </Typography>
          </CardContent>
        </Collapse>

        <Collapse in={extraExpanded3} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph sx={{ color: 'white' , fontWeight: 'bold' }}>
            Utilized QGIS for geospatial analysis to extract distance matrices, essential for calculating total distances per polygon and optimizing waste collection routes. With 176 collection points, the goal was to estimate fuel consumption for each polygon, a key factor in evaluating future waste management scenarios. Integrated results with Google OR-Tools for route optimization.
            </Typography>
          </CardContent>
        </Collapse>

        <Collapse in={extraExpanded4} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph sx={{ color: 'white' , fontWeight: 'bold' }}>
            Addressed an NP-hard Traveling Salesman Problem by optimizing waste collection routes using Google OR-Tools. Implemented a Vehicle Routing Problem (VRP) approach to estimate total fuel consumption per polygon. Key parameters included the distance matrix from QGIS (based on Euclidean distance), waste demand per polygon, vehicle capacity, fleet size, and depots (composting or anaerobic digestion plants). This optimization was crucial for assessing waste management scenarios and improving operational efficiency.
            </Typography>
          </CardContent>
        </Collapse>

        <Collapse in={extraExpanded5} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph sx={{ color: 'white' , fontWeight: 'bold' }}>
            Implemented FastAPI for input and output handling in the waste management model. Used POST requests to submit total waste and fuel consumption per polygon, while a GET API allowed users to retrieve results from file or history. Designed two POST methods for evaluating different waste management scenarios, enabling effective model assessment and comparison.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}