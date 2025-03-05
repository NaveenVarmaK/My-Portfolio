import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationIcon from '@mui/icons-material/LocationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default function Education() {
  const [extraExpanded1, setExtraExpanded1] = React.useState(false);
  const [extraExpanded3, setExtraExpanded3] = React.useState(false);
  const [extraExpanded4, setExtraExpanded4] = React.useState(false);  
  const [extraExpanded5, setExtraExpanded5] = React.useState(false);
  const [extraExpanded6, setExtraExpanded6] = React.useState(false);



  const handleExtraExpandClick1 = () => {
    setExtraExpanded1(!extraExpanded1);
  };

 
  const handleExtraExpandClick3 = () => {
    setExtraExpanded3(!extraExpanded3);
  }
  const handleExtraExpandClick4 = () => {
    setExtraExpanded4(!extraExpanded4);
  }
  const handleExtraExpandClick5 = () => {
    setExtraExpanded5(!extraExpanded5);
  }
  const handleExtraExpandClick6 = () => {
    setExtraExpanded6(!extraExpanded6);
  }


  const handleLocationEMSE = () => {
    window.open('https://www.google.com/maps/place/Ecole+des+Mines+de+Saint-%C3%89tienne/@45.4225457,4.4058521,16z/data=!3m1!4b1!4m6!3m5!1s0x47f5a940c7220ab7:0xabba5e519412d3c2!8m2!3d45.4225457!4d4.408427!16s%2Fm%2F02r5340?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };
  const handleLocationUJM = () => {
    window.open('https://www.google.com/maps/place/Knowledge+for+Innovation+Centre/@45.4509391,4.3875452,18z/data=!3m1!5s0x47f5ac0f84bb8ca9:0x335f0619f4d04437!4m6!3m5!1s0x47f5ad8e8388e107:0xb1f3e684ce45da47!8m2!3d45.4509391!4d4.3881835!16s%2Fg%2F11gpnj17md?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };
  const OpenWebsiteCPS2 = () => {
    window.open('https://www.google.com/maps/place/Jawaharlal+Nehru+Technological+University,+Kakinada/@16.9783076,82.2406174,17.56z/data=!4m6!3m5!1s0x3a38299cdd8f2049:0xb7251fd704659869!8m2!3d16.9782157!4d82.242755!16zL20vMDlkMXZ0?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };
  const handleLocationJNTUK = () => {
    window.open(' ', '_blank');
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
          // fontSize: { xs: '60rem', md: '20rem' },
          fontSize: ['3rem', '10rem', '20rem'], // Responsive font size
          fontWeight: 900,
          color: '#505081',
          zIndex: -1,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        EDUCATION
      </Typography>

      {/* Container for Cards */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Allow cards to wrap to the next line
          gap: 4, // Adds space between the cards
          justifyContent: 'center',
          alignItems: 'flex-start',
          mt: 5,
          width: '100%', // Ensure the container takes full width
        }}
      >
        {/* First Card */}
        <Card sx={{ minWidth: 300, maxWidth: 900, mt: 5, backgroundColor: 'rgba(80, 80, 129, 0.1)', backdropFilter: 'blur(30px)', boxShadow: 3, borderRadius: 2, padding: 3, color: 'white', }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <Button
              startIcon={<LocationIcon />}
              variant="outlined"
              size="small"
              onClick={handleLocationEMSE}
              sx={{ minWidth: 'auto', padding: '8px', backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              EMSE
            </Button>
            <Button
              startIcon={<LocationIcon />}
              variant="outlined"
              size="small"
              onClick={handleLocationUJM}
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              UJM
            </Button>
            <Button
              startIcon={<OpenInNewIcon />}
              variant="outlined"
              size="small"
              onClick={OpenWebsiteCPS2}
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              Website
            </Button>
          </Box>

          <CardContent>
            <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold', color: 'white' }}>
              Master of Science
            </Typography>
            <Typography variant="h4" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
            Cyber-Physical Social Systems
            </Typography>
            <br />
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            Web Programming, Mobile Programming, Digital Twin, Semantic Web, Cybersecurity, Cloud and Edge Infrastructures, Machine Learning, Systems Engineering, Data Interoperability & Semantics, and Technological Foundations of Software Development.
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Button
              onClick={handleExtraExpandClick1}
              variant="outlined"
              size="small"
              sx={{ ml: 0, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              Web Programming
            </Button>
            <Button
              onClick={handleExtraExpandClick3}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              Machine Learning
            </Button>
            <Button
              onClick={handleExtraExpandClick4}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              Semantic Web
            </Button>
            <Button
              onClick={handleExtraExpandClick5}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              Cloud & Edge Infrastructures
            </Button>
            <Button
              onClick={handleExtraExpandClick6}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              Cyber Security
            </Button>
          </CardActions>

          {/* Collapsible Sections */}
          <Collapse in={extraExpanded1} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
             - Developed Vue.js front-end applications, focusing on dynamic UI components and state management. <br />
- Implemented unit testing in Java to ensure code reliability and maintainability.<br />
- Gained expertise in Spring Boot, including dependency injection, Spring Data JPA, and RESTful services.<br />
- Integrated Spring Security for authentication and authorization.<br />
- Deployed applications to Clever Cloud, optimizing for scalability and performance.
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded3} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - Implemented a Decision Tree algorithm from scratch, gaining hands-on experience with tree-based models.<br />
                - Expanded knowledge to Ensemble Learning, including an introduction to Random Forest, an ensemble of Decision Trees.<br />
                - Built a Perceptron from scratch, gaining foundational understanding of (Artificial) Neural Networks. <br />
                - Applied Deep Learning techniques to diverse data types such as text, images, audio, and time series.<br />
                - Studied modern Neural Network architectures, including Variational Autoencoders (VAEs) and Generative Adversarial Networks (GANs), over multiple in-depth sessions.
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded4} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - Writing and managing RDF data for structured knowledge representation.<br />
                - Querying RDF databases using SPARQL to extract meaningful insights.<br />
                - Interacting with Linked Data Platforms to integrate and consume linked datasets.<br />
                - Working with JSON-LD and Schema.org for semantic web compatibility.<br />
                - Defining RDF schemas with SHACL to validate and enforce data consistency.<br />
                - Implementing web ontologies using Protégé to model domain-specific knowledge.<br />
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded5} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - Cloud Service Models: Gained a comprehensive understanding of Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).<br />
                - Cloud Concepts: Explored the fundamental characteristics, architectures, economics, and ethical aspects of cloud computing.<br />
                - Edge Computing: Learned about the main features and distinctions of edge computing compared to cloud computing.<br />
                - Practical Sessions with AWS: Hands-on experience with various AWS services, including EC2, S3, Lambda, CLI, SDK for Java, SQS, and SNS.<br />
                - Ethical Considerations: Discussed the ethical implications of cloud computing technologies.
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded6} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - Introduction to Cyber Security & Physical Pen Testing: Basics of cybersecurity and hands-on physical penetration testing.<br />
                - Software Cracking: Techniques of software cracking using tools like x64dbg.<br />
                - Pen Testing: Penetration testing methodologies with Nmap, OpenVAS, and MetaSploit to gain remote access to systems.<br />
                - Password Cracking: Tools and techniques for password cracking, including Ophcrack and Rainbow tables.<br />
                - SQL Injection: Understanding SQL injection attacks on simulated e-commerce platforms.<br />
                - Machine Learning & CyberSecurity: The role of machine learning in cybersecurity, with a focus on privacy and intrusion detection systems.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        {/* Second Card Semantic Web */}
       
        <Card sx={{ minWidth: 300, maxWidth: 500, mt: 5, backgroundColor: 'rgba(80, 80, 129, 0.1)', backdropFilter: 'blur(30px)', boxShadow: 3, borderRadius: 2, padding: 3, color: 'white', }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <Button
              startIcon={<LocationIcon />}
              variant="outlined"
              size="small"
              onClick={handleLocationJNTUK}
              sx={{ minWidth: 'auto', padding: '8px', backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              JNTUK
            </Button>
          </Box>

          <CardContent>
            <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold', color: 'white' }}>
            Bachelor of Technology
            </Typography>
            <Typography variant="h4" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
            Information Technology
            </Typography>
            <br />
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            {/* Extracted Pokémon data from Bulbapedia and transformed it into RDF triples for structured knowledge representation. Designed an ontology and validated data using SHACL to ensure consistency in attributes and relationships. Developed a SPARQL endpoint with inference capabilities for querying and integrating linked data. */}
            </Typography>
          </CardContent>
        </Card>

      </Box>
    </Box>
  );
}