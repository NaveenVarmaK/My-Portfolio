import * as React from 'react';
import { Box, useMediaQuery, useTheme, Chip, Divider, Fade, Slide } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ComputerIcon from '@mui/icons-material/Computer';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Education() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Single active section state (only one can be active)
  const [activeSection, setActiveSection] = React.useState(null);

  // Hover state management
  const [hoveredCard, setHoveredCard] = React.useState(null); // 'masters', 'bachelors', or null
  
  const [isVisible, setIsVisible] = React.useState(false);
  const [cardHeight, setCardHeight] = React.useState(0);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 320);
    return () => clearTimeout(timer);
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
  }, [activeSection]);

  // Website handler
  const OpenWebsiteCPS2 = () => {
    window.open('https://ci.mines-stetienne.fr/cps2/syllabus/', '_blank');
  };

  // Section click handler - only one section can be active
  const handleSectionClick = (id) => setActiveSection(activeSection === id ? null : id);

  // Hover handlers
  const handleMastersCardHover = () => setHoveredCard('masters');
  const handleBachelorsCardHover = () => setHoveredCard('bachelors');
  const handleCardLeave = () => setHoveredCard(null);

  // Calculate card transform based on hover state
  const getMastersCardSize = () => {
    if (hoveredCard === 'bachelors') return 0.25; // More minimized when bachelors is hovered
    return 1; // Default full size
  };

  const getBachelorsCardSize = () => {
    if (hoveredCard === 'bachelors') return 1; // Full size when hovered
    return 0.25; // More minimized by default
  };

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
        background: 'linear-gradient(360deg,rgb(0, 35, 35), #080808 70%, #2d1800 100%)', // Updated with #2d1800 and light yellow
      }}
    >
      {/* Vertical EDUCATION Text */}
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
              color: 'rgba(0, 200, 200, 0.3)', // Updated to complement rgb(0, 35, 35) tint
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
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'rgba(0, 200, 200, 0.5)',
              }
            }}
          >
            EDUCATION
          </Typography>
        </Box>
      </Fade>

      {/* Container for both cards */}
      <Box
        ref={cardRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: { xs: '380px', sm: '750px', md: '850px', lg: '950px' },
          alignItems: 'center',
          ml: { xs: 0, sm: 16, md: 20 },
          transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
        }}
      >
        {/* Masters Card (Default expanded) */}
        <Fade in={isVisible} timeout={2500}>
          <Card
            onMouseEnter={handleMastersCardHover}
            onMouseLeave={handleCardLeave}
            sx={{
              minWidth: { xs: '100%', sm: 450, md: 550 },
              maxWidth: { xs: '100%', sm: 650, md: 950 },
              mx: { xs: 0, sm: 0 },
              flexGrow: getMastersCardSize(),
              transform: `scale(${hoveredCard === 'bachelors' ? 0.85 : 1})`,
              background: 'linear-gradient(145deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.94) 100%)', // Always black background
              backdropFilter: 'blur(25px)',
              boxShadow: hoveredCard === 'bachelors'
                ? '0 8px 32px rgba(0, 35, 35, 0.15), inset 0 1px 0 rgba(0, 80, 80, 0.05)' // Teal-tinted shadows
                : '0 25px 80px rgba(0, 35, 35, 0.5), inset 0 1px 0 rgba(0, 80, 80, 0.08)',
              borderRadius: 4,
              padding: { xs: 2, sm: 3 },
              color: '#e8f5f5', // Teal-tinted text
              border: hoveredCard === 'bachelors'
                ? '1px solid rgba(0, 60, 60, 0.5)' // Teal-tinted borders
                : '1px solid rgba(0, 60, 60, 0.9)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              opacity: hoveredCard === 'bachelors' ? 0.3 : 1,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: hoveredCard === 'bachelors'
                  ? 'linear-gradient(90deg, transparent 0%, rgba(0, 80, 80, 0.3) 50%, transparent 100%)' // Teal accent
                  : 'linear-gradient(90deg, transparent 0%, rgba(0, 80, 80, 0.8) 50%, transparent 100%)',
                transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              },
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
                icon={<SchoolIcon />}
                label={hoveredCard === 'bachelors' ? "2022-2024" : "Master's Degree"}
                size="small"
                sx={{
                  backgroundColor: 'rgba(0, 80, 80, 0.25)', // Teal-tinted chip
                  color: '#c8f0f0',
                  border: '1px solid rgba(0, 60, 60, 0.4)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  '& .MuiChip-icon': { color: '#a0d8d8' },
                  fontSize: { xs: '0.65rem', sm: '0.8rem' },
                }}
              />
              
              {hoveredCard !== 'bachelors' && (
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Button
                    startIcon={<OpenInNewIcon />}
                    variant="outlined"
                    size={isMobile ? "small" : "medium"}
                    onClick={OpenWebsiteCPS2}
                    sx={{
                      minWidth: 'auto',
                      padding: { xs: '6px 12px', sm: '8px 16px' },
                      backgroundColor: 'rgba(230, 250, 250, 0.95)', // Light teal tint
                      color: '#2c4e4e',
                      border: '1px solid rgba(0, 60, 60, 0.5)',
                      backdropFilter: 'blur(15px)',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      '&:hover': {
                        backgroundColor: 'rgba(245, 255, 255, 1)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 25px rgba(0, 80, 80, 0.3)',
                      },
                      fontSize: { xs: '0.75rem', sm: '0.9rem' },
                      borderRadius: 3,
                      transition: 'all 0.6s ease',
                    }}
                  >
                    Website
                  </Button>
                </Box>
              )}
            </Box>

            <CardContent sx={{ 
              p: hoveredCard === 'bachelors' ? { xs: 1, sm: 2 } : { xs: 2, sm: 3 },
              transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
            }}>
              {hoveredCard !== 'bachelors' ? (
                // Full view
                <>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 800,
                      color: '#f0ffff',
                      fontSize: { xs: '1.15rem', sm: '1.45rem' },
                      background: 'linear-gradient(135deg, #f0ffff 0%, #e8f5f5 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1.5,
                      fontFamily: '"Rajdhani", "Montserrat", sans-serif',
                    }}
                  >
                    École nationale supérieure des mines de Saint-Étienne & Université Jean Monnet
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <ComputerIcon sx={{ color: '#80d8d8', fontSize: { xs: '1.3rem', sm: '1.6rem' } }} />
                    <Typography 
                      variant="h4" 
                      component="div" 
                      sx={{ 
                        color: '#e8f5f5',
                        fontWeight: 800,
                        fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.1rem' },
                        lineHeight: 1.2,
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      Master of Science - Cyber-Physical Social Systems
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <CalendarTodayIcon sx={{ color: '#a0d8d8', fontSize: '1.1rem' }} />
                    <Typography 
                      sx={{ 
                        fontWeight: 600,
                        color: '#b8e8e8',
                        fontSize: { xs: '0.95rem', sm: '1.05rem' },
                        fontFamily: 'Montserrat, sans-serif',
                        fontStyle: 'italic',
                      }}
                    >
                      September 2023 - July 2025
                    </Typography>
                  </Box>

                  <Divider sx={{ 
                    backgroundColor: 'rgba(0, 60, 60, 0.3)',
                    mb: 3,
                    height: '1px',
                  }} />

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(232, 245, 245, 0.9)',
                      fontWeight: 500,
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' },
                      lineHeight: 1.7,
                      textAlign: 'justify',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Advanced interdisciplinary program combining Web Programming, Mobile Development, Digital Twin 
                    technologies, Semantic Web, Cybersecurity, Cloud and Edge Infrastructure, Machine Learning, 
                    Systems Engineering, Data Interoperability & Semantics, and Technological Foundations of 
                    Software Development for next-generation cyber-physical systems.
                  </Typography>
                </>
              ) : (
                // Minimized view
                <Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: 'rgba(232, 245, 245, 0.5)',
                      fontSize: { xs: '0.85rem', sm: '1.05rem' },
                      mb: 0.5,
                      lineHeight: 1.2,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Master of Science - Cyber-Physical Social Systems
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'rgba(160, 216, 216, 0.4)',
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                      fontFamily: 'Montserrat, sans-serif',
                      fontStyle: 'italic',
                    }}
                  >
                    September 2023 - July 2025
                  </Typography>
                </Box>
              )}
            </CardContent>

            {/* Subject buttons only show when not minimized */}
            {hoveredCard !== 'bachelors' && (
              <>
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
                  {[
                    { label: 'Web Programming', id: 'web_programming', color: '#4caf50' },
                    { label: 'Machine Learning', id: 'machine_learning', color: '#ff9800' },
                    { label: 'Semantic Web', id: 'semantic_web', color: '#2196f3' },
                    { label: 'Cloud & Edge', id: 'cloud_edge', color: '#9c27b0' },
                    { label: 'Cyber Security', id: 'cyber_security', color: '#f44336' },
                  ].map((subject, index) => (
                    <Button
                      key={subject.id}
                      onClick={() => handleSectionClick(subject.id)}
                      variant="outlined"
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        backgroundColor: activeSection === subject.id
                          ? `${subject.color}40`
                          : 'rgba(0, 0, 0, 0.8)', // Black button background
                        color: activeSection === subject.id ? '#ffffff' : '#c8f0f0',
                        border: activeSection === subject.id
                          ? `2px solid ${subject.color}`
                          : '1px solid rgba(0, 60, 60, 0.6)',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: activeSection === subject.id ? 700 : 600,
                        '&:hover': { 
                          backgroundColor: `${subject.color}30`,
                          borderColor: subject.color,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 8px 25px ${subject.color}40`,
                          color: '#ffffff',
                        },
                        fontSize: { xs: '0.75rem', sm: '0.9rem' },
                        minWidth: { xs: 'auto', sm: 'auto' },
                        px: { xs: 1.5, sm: 2.5 },
                        py: { xs: 0.5, sm: 0.75 },
                        borderRadius: 3,
                        transition: 'all 0.6s ease',
                      }}
                    >
                      {subject.label}
                    </Button>
                  ))}
                </CardActions>

                {/* Collapsible Sections for Master's */}
                {[
                  { 
                    id: 'web_programming',
                    content: "Developed Vue.js front-end applications, focusing on dynamic UI components and state management. Implemented unit testing in Java to ensure code reliability and maintainability. Gained expertise in Spring Boot, including dependency injection, Spring Data JPA, and RESTful services. Integrated Spring Security for authentication and authorization. Deployed applications to Clever Cloud, optimizing for scalability and performance." 
                  },
                  { 
                    id: 'machine_learning',
                    content: "Implemented a Decision Tree algorithm from scratch, gaining hands-on experience with tree-based models. Expanded knowledge to Ensemble Learning, including an introduction to Random Forest, an ensemble of Decision Trees. Built a Perceptron from scratch, gaining foundational understanding of (Artificial) Neural Networks. Applied Deep Learning techniques to diverse data types such as text, images, audio, and time series. Studied modern Neural Network architectures, including Variational Autoencoders (VAEs) and Generative Adversarial Networks (GANs), over multiple in-depth sessions." 
                  },
                  { 
                    id: 'semantic_web',
                    content: "Writing and managing RDF data for structured knowledge representation. Querying RDF databases using SPARQL to extract meaningful insights. Interacting with Linked Data Platforms to integrate and consume linked datasets. Working with JSON-LD and Schema.org for semantic web compatibility. Defining RDF schemas with SHACL to validate and enforce data consistency. Implementing web ontologies using Protégé to model domain-specific knowledge." 
                  },
                  { 
                    id: 'cloud_edge',
                    content: "Cloud Service Models: Gained a comprehensive understanding of Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Cloud Concepts: Explored the fundamental characteristics, architectures, economics, and ethical aspects of cloud computing. Edge Computing: Learned about the main features and distinctions of edge computing compared to cloud computing. Practical Sessions with AWS: Hands-on experience with various AWS services, including EC2, S3, Lambda, CLI, SDK for Java, SQS, and SNS. Ethical Considerations: Discussed the ethical implications of cloud computing technologies." 
                  },
                  { 
                    id: 'cyber_security',
                    content: "Introduction to Cyber Security & Physical Pen Testing: Basics of cybersecurity and hands-on physical penetration testing. Software Cracking: Techniques of software cracking using tools like x64dbg. Pen Testing: Penetration testing methodologies with Nmap, OpenVAS, and MetaSploit to gain remote access to systems. Password Cracking: Tools and techniques for password cracking, including Ophcrack and Rainbow tables. SQL Injection: Understanding SQL injection attacks on simulated e-commerce platforms. Machine Learning & CyberSecurity: The role of machine learning in cybersecurity, with a focus on privacy and intrusion detection systems." 
                  }
                ].map((section, index) => (
                  <Collapse key={section.id} in={activeSection === section.id} timeout={1200} unmountOnExit>
                    <CardContent sx={{ 
                      p: { xs: 2, sm: 3 },
                      pt: 0,
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.7) 100%)', // Black background for collapsible
                      borderRadius: 3,
                      mx: { xs: 2, sm: 3 },
                      mb: 2,
                      border: '1px solid rgba(0, 60, 60, 0.6)',
                      backdropFilter: 'blur(15px)',
                    }}>
                      <Typography 
                        paragraph 
                        sx={{ 
                          color: 'rgba(232, 245, 245, 0.9)',
                          fontWeight: 500,
                          fontSize: { xs: '0.95rem', sm: '1.05rem' },
                          lineHeight: 1.7,
                          mb: 0,
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                      >
                        {section.content}
                      </Typography>
                    </CardContent>
                  </Collapse>
                ))}
              </>
            )}
          </Card>
        </Fade>

        {/* Bachelor's Card (Minimized by default) */}
        <Fade in={isVisible} timeout={3000}>
          <Card
            onMouseEnter={handleBachelorsCardHover}
            onMouseLeave={handleCardLeave}
            sx={{
              minWidth: { xs: '100%', sm: 450, md: 550 },
              maxWidth: { xs: '100%', sm: 650, md: 950 },
              mx: { xs: 0, sm: 0 },
              flexGrow: getBachelorsCardSize(),
              transform: `scale(${hoveredCard === 'bachelors' ? 1 : 0.85})`,
              background: 'linear-gradient(145deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.94) 100%)', // Always black background
              backdropFilter: 'blur(25px)',
              boxShadow: hoveredCard === 'bachelors'
                ? '0 25px 80px rgba(0, 35, 35, 0.5), inset 0 1px 0 rgba(0, 80, 80, 0.08)'
                : '0 8px 32px rgba(0, 35, 35, 0.15), inset 0 1px 0 rgba(0, 80, 80, 0.05)',
              borderRadius: 4,
              padding: { xs: 2, sm: 3 },
              color: '#e8f5f5',
              border: hoveredCard === 'bachelors'
                ? '1px solid rgba(0, 60, 60, 0.9)'
                : '1px solid rgba(0, 60, 60, 0.5)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              opacity: hoveredCard === 'bachelors' ? 1 : 0.3,
              mt: 2,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: hoveredCard === 'bachelors'
                  ? 'linear-gradient(90deg, transparent 0%, rgba(0, 80, 80, 0.8) 50%, transparent 100%)'
                  : 'linear-gradient(90deg, transparent 0%, rgba(0, 80, 80, 0.3) 50%, transparent 100%)',
                transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              }
            }}
          >
            {/* Header Section */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 1,
              mb: hoveredCard === 'bachelors' ? 2 : 1,
            }}>
              <Chip
                icon={<AutoStoriesIcon />}
                label={hoveredCard === 'bachelors' ? "Bachelor's Degree" : "2018-2022"}
                size="small"
                sx={{
                  backgroundColor: 'rgba(0, 80, 80, 0.2)',
                  color: hoveredCard === 'bachelors' ? '#c8f0f0' : 'rgba(200, 240, 240, 0.6)',
                  border: `1px solid rgba(0, 60, 60, ${hoveredCard === 'bachelors' ? '0.4' : '0.2'})`,
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  '& .MuiChip-icon': { color: hoveredCard === 'bachelors' ? '#a0d8d8' : 'rgba(160, 216, 216, 0.6)' },
                  fontSize: { xs: '0.65rem', sm: '0.8rem' },
                }}
              />
            </Box>

            <CardContent sx={{ 
              p: hoveredCard === 'bachelors' ? { xs: 2, sm: 3 } : { xs: 1, sm: 2 },
              transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
            }}>
              {hoveredCard !== 'bachelors' ? (
                // Minimized view
                <Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: 'rgba(232, 245, 245, 0.5)',
                      fontSize: { xs: '0.85rem', sm: '1.05rem' },
                      mb: 0.5,
                      lineHeight: 1.2,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Bachelor of Technology - Information Technology
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'rgba(160, 216, 216, 0.4)',
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                      fontFamily: 'Montserrat, sans-serif',
                      fontStyle: 'italic',
                    }}
                  >
                    July 2017 - Feb 2022
                  </Typography>
                </Box>
              ) : (
                // Expanded view
                <Box>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 800,
                      color: '#f0ffff',
                      fontSize: { xs: '1.15rem', sm: '1.45rem' },
                      background: 'linear-gradient(135deg, #f0ffff 0%, #e8f5f5 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1.5,
                      fontFamily: '"Rajdhani", "Montserrat", sans-serif',
                    }}
                  >
                    Jawaharlal Nehru Technological University, Kakinada
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <AutoStoriesIcon sx={{ color: '#80d8d8', fontSize: { xs: '1.3rem', sm: '1.6rem' } }} />
                    <Typography 
                      variant="h4" 
                      component="div" 
                      sx={{ 
                        color: '#e8f5f5',
                        fontWeight: 800,
                        fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.1rem' },
                        lineHeight: 1.2,
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      Bachelor of Technology - Information Technology
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <CalendarTodayIcon sx={{ color: '#a0d8d8', fontSize: '1.1rem' }} />
                    <Typography 
                      sx={{ 
                        fontWeight: 600,
                        color: '#b8e8e8',
                        fontSize: { xs: '0.95rem', sm: '1.05rem' },
                        fontFamily: 'Montserrat, sans-serif',
                        fontStyle: 'italic',
                      }}
                    >
                      July 2017 - Feb 2022
                    </Typography>
                  </Box>

                  <Divider sx={{ 
                    backgroundColor: 'rgba(0, 60, 60, 0.25)',
                    mb: 3,
                    height: '1px',
                  }} />

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(232, 245, 245, 0.85)',
                      fontWeight: 500,
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' },
                      lineHeight: 1.7,
                      textAlign: 'justify',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Comprehensive foundation in programming fundamentals, algorithms and data structures, 
                    database management systems, software engineering principles, and information systems. 
                    Built strong technical fundamentals in computer science and information technology 
                    with hands-on project experience and problem-solving methodologies.
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Fade>
      </Box>
    </Box>
  );
}
