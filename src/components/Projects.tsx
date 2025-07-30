import * as React from 'react';
import { Box, useMediaQuery, useTheme, Chip, Divider, Fade, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloudIcon from '@mui/icons-material/Cloud';
import DataObjectIcon from '@mui/icons-material/DataObject';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Current active project (0: AWS, 1: Semantic, 2: VRP)
  const [activeProject, setActiveProject] = React.useState(0);
  
  // Single active section state - only one section can be active at a time
  const [activeSection, setActiveSection] = React.useState(null);

  const [isVisible, setIsVisible] = React.useState(false);
  const [cardHeight, setCardHeight] = React.useState(0);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  React.useEffect(() => {
    const updateCardHeight = () => {
      if (cardRef.current) {
        setCardHeight(cardRef.current.offsetHeight);
      }
    };

    updateCardHeight();
    window.addEventListener('resize', updateCardHeight);
    
    const observer = new MutationObserver(updateCardHeight);
    if (cardRef.current) {
      observer.observe(cardRef.current, { 
        childList: true, 
        subtree: true, 
        attributes: true 
      });
    }

    return () => {
      window.removeEventListener('resize', updateCardHeight);
      observer.disconnect();
    };
  }, [activeProject, activeSection]);

  // Project data
  const projects = [
    {
      id: 'aws',
      title: 'AWS IoT Traffic Processing',
      subtitle: 'Cloud Infrastructure & Analytics',
      category: 'Development Project',
      icon: CloudIcon,
      color: '#ff9500',
      github: 'https://github.com/NaveenVarmaK/AWS-IoT-Traffic-Processing.git',
      description: 'Automated IoT traffic data processing pipeline using AWS cloud services. Built scalable infrastructure for uploading, summarizing, and consolidating geographically distributed IoT device data. Implemented anomaly detection and bottleneck analysis to guide infrastructure investment decisions with real-time processing capabilities.',
      technologies: [
        { label: 'S3', key: 's3', content: "Used for storing and managing IoT traffic data files. Files are uploaded via UploadS3.java to a designated S3 bucket (upload-client-cps2). Summarized data is stored in a separate S3 bucket (summarizedtables-cps2)." },
        { label: 'Lambda', key: 'lambda', content: "SummarizeWorker Lambda Function: Processes uploaded files, summarizes IoT traffic data, and saves the output to an S3 bucket. ConsolidatorWorker Lambda Function: Applies statistical operations (e.g., standard deviation, average) on the summarized data and sends results to an SNS topic." },
        { label: 'SNS', key: 'sns', content: "ConsolidatorWorker-SNS Topic: Sends notifications when processed files are ready for download. Allows users to subscribe via email or other methods for real-time updates on data processing status." },
        { label: 'SQS', key: 'sqs', content: "ExportClientQueue: Stores metadata (bucket name and file name) for retrieving processed files. Planned enhancement: Implementing SQS between Lambda functions to improve reliability and handle busy processing queues." },
        { label: 'EC2', key: 'ec2', content: "Deployed the project on a t2.micro EC2 instance to evaluate performance and resource consumption. Compared EC2 and AWS Lambda in terms of flexibility, resource usage, and cost-effectiveness for running the IoT data processing pipeline." }
      ]
    },
    {
      id: 'semantic',
      title: 'Bulbapedia Knowledge Graph',
      subtitle: 'Semantic Web & Knowledge Graphs',
      category: 'Development Project',
      icon: DataObjectIcon,
      color: '#4caf50',
      github: 'https://github.com/anjola-adeuyi/bulbapedia-knowledge-graph.git',
      description: 'Extracted Pokémon data from Bulbapedia and transformed it into RDF triples for structured knowledge representation. Designed custom ontology with SHACL validation to ensure data consistency. Developed SPARQL endpoint with inference capabilities for querying and integrating linked data with semantic web standards.',
      technologies: [
        { label: 'RDF', key: 'rdf', content: "Converted Pokémon data from Bulbapedia into RDF triples for structured representation. Ensured alignment with schema.org and linked data principles. Implemented entity linking with DBpedia and Wikidata for semantic interoperability." },
        { label: 'SHACL', key: 'shacl', content: "Designed SHACL shapes to validate the knowledge graph structure. Enforced constraints on Pokémon attributes (height, weight, types). Implemented type hierarchy validation and property cardinality rules for data consistency. Used Apache Jena SHACL for RDF quality checks." },
        { label: 'SPARQL', key: 'sparql', content: "Developed a SPARQL endpoint for querying Pokémon data. Implemented inference support, including subclass hierarchy and transitive properties. Created predefined SPARQL queries for retrieving Pokémon details, evolution chains, and type relationships. Provided machine-readable and human-readable linked data views." }
      ]
    },
    {
      id: 'vrp',
      title: 'Vehicle Routing with Uncertainty',
      subtitle: 'Optimization & Machine Learning',
      category: 'Research Project',
      icon: LocalShippingIcon,
      color: '#9c27b0',
      github: null,
      description: 'Investigating optimization strategies for vehicle routing under stochastic and uncertain demand conditions. Developing probabilistic models using machine learning to improve decision-making in logistics. Implementing adaptive algorithms to minimize transportation costs while maintaining service reliability in dynamic environments.',
      technologies: [
        { label: 'XGBoost', key: 'xgboost', content: "Model Selection: XGBoost is chosen for its effectiveness in handling structured data and its ability to capture complex patterns in demand. Customized Loss Function: An asymmetric loss function is designed to penalize underestimations more heavily than overestimations, reflecting the cost imbalances in routing. Model Training: The model is trained using historical demand data and validated using cross-validation techniques." },
        { label: 'BNN', key: 'bnn', content: "Uncertainty Quantification: Bayesian Neural Networks are employed to provide predictions with uncertainty intervals. This helps in capturing the variability in demand and provides a probabilistic estimate of future demands. Probabilistic Methods: The Bayesian approach allows for the estimation of demand uncertainty, which is crucial for robust optimization and dynamic re-routing." },
        { label: 'ALNS', key: 'alns', content: "Robust Optimization Model: ALNS is used to iteratively improve routing solutions by incorporating uncertainty intervals during feasibility checks. Destroy and Repair Operators: ALNS employs destroy operators to remove a subset of routes or collection points and repair operators to reinsert collection points using predicted demand and distance metrics. Dynamic Re-Routing: Routes are dynamically adapted based on real-time data, updating routes as actual demand values become available during operations." }
      ]
    }
  ];

  // Navigation handlers
  const goToNext = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
    // Reset active section when switching projects
    setActiveSection(null);
  };

  const goToPrevious = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    // Reset active section when switching projects
    setActiveSection(null);
  };

  const goToProject = (index) => {
    setActiveProject(index);
    // Reset active section when switching projects
    setActiveSection(null);
  };

  // Toggle section expansion - only one active at a time
  const toggleSection = (sectionKey) => {
    setActiveSection(prevActive => prevActive === sectionKey ? null : sectionKey);
  };

  const currentProject = projects[activeProject];
  const IconComponent = currentProject.icon;

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '100%',
        minHeight: { xs: '70vh', md: '120vh' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: 2, sm: 0 },
        overflow: 'visible',
        background: 'linear-gradient(360deg, #2d1800 5%, #080808 70%, #001000 100%)',
      }}
    >
      {/* Vertical PROJECTS Text with Dynamic Color */}
      <Fade in={isVisible} timeout={1000}>
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 10, sm: 20, md: 40 },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            height: cardHeight > 0 ? `${cardHeight}px` : '800px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          <Typography
            sx={{
              // Dynamic color based on active project
              color: `${currentProject.color}60`, // 60% opacity of the project color
              fontWeight: 300,
              fontSize: { 
                xs: '1.2rem',
                sm: '1.5rem',
                md: '2rem',
                lg: '2.5rem'
              },
              letterSpacing: { xs: '8px', sm: '12px', md: '16px' },
              textAlign: 'center',
              userSelect: 'none',
              textTransform: 'uppercase',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)', // Smooth color transition
              '&:hover': {
                color: `${currentProject.color}80`, // 80% opacity on hover
                transform: 'scale(1.05)',
              }
            }}
          >
            PROJECTS
          </Typography>
        </Box>
      </Fade>

      {/* Subtle Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(80, 80, 129, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(80, 80, 129, 0.02) 0%, transparent 50%)
          `,
          zIndex: -2,
        }}
      />

      {/* Navigation Controls */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: { xs: '85%', sm: '90%', md: '95%' },
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          zIndex: 10,
        }}
      >
        {/* Previous Button */}
        <IconButton
          onClick={goToPrevious}
          sx={{
            backgroundColor: 'rgba(32, 32, 40, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(80, 80, 129, 0.3)',
            color: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(32, 32, 40, 0.9)',
              borderColor: 'rgba(80, 80, 129, 0.5)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
            width: { xs: 40, sm: 48 },
            height: { xs: 40, sm: 48 },
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }} />
        </IconButton>

        {/* Project Indicators */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
          {projects.map((_, index) => (
            <IconButton
              key={index}
              onClick={() => goToProject(index)}
              sx={{
                width: { xs: 12, sm: 16 },
                height: { xs: 12, sm: 16 },
                minWidth: 'auto',
                p: 0,
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  fontSize: { xs: '0.8rem', sm: '1rem' },
                  color: index === activeProject ? currentProject.color : 'rgba(80, 80, 129, 0.4)',
                  transition: 'all 0.3s ease',
                }}
              />
            </IconButton>
          ))}
        </Box>

        {/* Next Button */}
        <IconButton
          onClick={goToNext}
          sx={{
            backgroundColor: 'rgba(32, 32, 40, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(80, 80, 129, 0.3)',
            color: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(32, 32, 40, 0.9)',
              borderColor: 'rgba(80, 80, 129, 0.5)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
            width: { xs: 40, sm: 48 },
            height: { xs: 40, sm: 48 },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }} />
        </IconButton>
      </Box>

      {/* Single Project Card Container */}
      <Box
        ref={cardRef}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          maxWidth: { xs: '380px', sm: '750px', md: '850px', lg: '950px' },
          ml: { xs: 0, sm: 16, md: 20 },
          mr: { xs: 0, sm: 12, md: 16 },
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Active Project Card */}
        <Fade in={isVisible} timeout={1200} key={activeProject}>
          <Card
            sx={{
              minWidth: { xs: '100%', sm: 500, md: 600 },
              maxWidth: { xs: '100%', sm: 700, md: 900 },
              background: 'linear-gradient(145deg, rgba(2, 2, 2, 0.90) 0%, rgba(5, 5, 8, 0.94) 100%)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 25px 80px rgba(5, 12, 16, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
              borderRadius: 4,
              padding: { xs: 2, sm: 3 },
              color: '#e8f0ff',
              border: '1px solid rgba(32, 32, 40, 0.9)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: `linear-gradient(90deg, transparent 0%, ${currentProject.color}AA 50%, transparent 100%)`,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              }
            }}
          >
            {/* Header Section */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              p: 1,
              mb: 2,
            }}>
              <Chip
                icon={<IconComponent />}
                label={currentProject.category}
                size="small"
                sx={{
                  backgroundColor: `${currentProject.color}50`,
                  color: '#e8f0ff',
                  border: '1px solid rgba(32, 32, 40, 0.6)',
                  '& .MuiChip-icon': { color: '#e8f0ff' },
                  fontSize: { xs: '0.6rem', sm: '0.75rem' },
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                }}
              />
              
              {currentProject.github && (
                <Button
                  startIcon={<GitHubIcon />}
                  variant="outlined"
                  size={isMobile ? "small" : "medium"}
                  onClick={() => window.open(currentProject.github, '_blank')}
                  sx={{
                    minWidth: 'auto',
                    padding: { xs: '6px 12px', sm: '8px 16px' },
                    backgroundColor: 'rgba(220, 230, 250, 0.95)',
                    color: '#2c3e50',
                    border: '1px solid rgba(120, 140, 180, 0.5)',
                    backdropFilter: 'blur(10px)',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    '&:hover': { 
                      backgroundColor: 'rgba(240, 245, 255, 1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(80, 120, 180, 0.3)',
                    },
                    fontSize: { xs: '0.7rem', sm: '0.875rem' },
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                  }}
                >
                  GitHub
                </Button>
              )}
            </Box>

            <CardContent sx={{ 
              p: { xs: 2, sm: 3 },
              transition: 'all 0.8s ease',
            }}>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: 800, 
                  color: '#f0f6ff',
                  fontSize: { xs: '1.1rem', sm: '1.4rem' },
                  background: 'linear-gradient(135deg, #f0f6ff 0%, #d8e8ff 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1.5,
                  fontFamily: '"Rajdhani", "Montserrat", sans-serif',
                }}
              >
                {currentProject.title}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <IconComponent sx={{ color: currentProject.color, fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
                <Typography 
                  variant="h4" 
                  component="div" 
                  sx={{ 
                    color: '#e8f0ff', 
                    fontWeight: 800,
                    fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2rem' },
                    lineHeight: 1.2,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {currentProject.subtitle}
                </Typography>
              </Box>

              <Divider sx={{ 
                backgroundColor: 'rgba(120, 140, 180, 0.3)', 
                mb: 3,
                height: '1px',
              }} />

              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(232, 240, 255, 0.9)', 
                  fontWeight: 500,
                  fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.1rem' },
                  lineHeight: 1.7,
                  textAlign: 'justify',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                {currentProject.description}
              </Typography>
            </CardContent>

            <CardActions 
              disableSpacing 
              sx={{
                flexWrap: 'wrap',
                gap: 1.5,
                justifyContent: { xs: 'center', sm: 'flex-start' },
                px: { xs: 2, sm: 3 },
                pb: 3,
              }}
            >
              {currentProject.technologies.map((tech) => (
                <Button
                  key={tech.key}
                  onClick={() => toggleSection(tech.key)}
                  variant="outlined"
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    backgroundColor: activeSection === tech.key
                      ? `${currentProject.color}40`
                      : 'rgba(2, 2, 2, 0.8)',
                    color: activeSection === tech.key ? '#ffffff' : '#c8d8f0',
                    border: activeSection === tech.key
                      ? `2px solid ${currentProject.color}`
                      : '1px solid rgba(32, 32, 40, 0.6)',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: activeSection === tech.key ? 700 : 600,
                    '&:hover': { 
                      backgroundColor: `${currentProject.color}30`,
                      borderColor: currentProject.color,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 25px ${currentProject.color}40`,
                      color: '#ffffff',
                    },
                    fontSize: { xs: '0.7rem', sm: '0.875rem' },
                    minWidth: { xs: 'auto', sm: 'auto' },
                    px: { xs: 1.5, sm: 2.5 },
                    py: { xs: 0.5, sm: 0.75 },
                    borderRadius: 3,
                    transition: 'all 0.6s ease',
                  }}
                >
                  {tech.label}
                </Button>
              ))}
            </CardActions>

            {/* Collapsible Sections */}
            {currentProject.technologies.map((tech) => (
              <Collapse key={tech.key} in={activeSection === tech.key} timeout={1200} unmountOnExit>
                <CardContent sx={{ 
                  p: { xs: 2, sm: 3 },
                  pt: 0,
                  background: 'linear-gradient(135deg, rgba(2, 2, 2, 0.6) 0%, rgba(5, 5, 8, 0.7) 100%)',
                  borderRadius: 3,
                  mx: { xs: 2, sm: 3 },
                  mb: 2,
                  border: '1px solid rgba(32, 32, 40, 0.6)',
                  backdropFilter: 'blur(15px)',
                }}>
                  <Typography 
                    paragraph 
                    sx={{ 
                      color: 'rgba(232, 240, 255, 0.9)', 
                      fontWeight: 500,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.7,
                      mb: 0,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    {tech.content}
                  </Typography>
                </CardContent>
              </Collapse>
            ))}
          </Card>
        </Fade>
      </Box>
    </Box>
  );
}
