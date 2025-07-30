import * as React from 'react';
import { Box, useMediaQuery, useTheme, Chip, Divider, Fade } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import DataObjectIcon from '@mui/icons-material/DataObject';

type ExperienceSection = 'python2025' | 'rdf2025' | 'graphdb2025' | 'iec2025' | 'llm2025' | 'python2024' | 'vue2024' | 'qgis2024' | 'ortools2024' | 'fastapi2024';
type HoveredCard = 'new' | 'old';

export default function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [activeSection, setActiveSection] = React.useState<ExperienceSection | null>(null);
  const [hoveredCard, setHoveredCard] = React.useState<HoveredCard | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [cardHeight, setCardHeight] = React.useState(0);
  const cardRef = React.useRef<HTMLDivElement>(null);

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
      observer.observe(cardRef.current, { childList: true, subtree: true, attributes: true });
    }

    return () => {
      window.removeEventListener('resize', updateCardHeight);
      observer.disconnect();
    };
  }, [activeSection]);

  const handleSectionClick = (id: ExperienceSection) => setActiveSection(activeSection === id ? null : id);

  // Hover handlers
  const handleNewCardHover = () => setHoveredCard('new');
  const handleOldCardHover = () => setHoveredCard('old');
  const handleCardLeave = () => setHoveredCard(null);

  const handleGitHubClick = () => {
    window.open(
      'https://github.com/NaveenVarmaK/Pipeline_Mapping_IEC61850_OmegaX-CSDM.git'
    );
  };

  // Calculate card sizes based on hover state
  const getNewCardSize = () => (hoveredCard === 'old' ? 0.25 : 1);
  const getOldCardSize = () => (hoveredCard === 'old' ? 1 : 0.25);

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
        background: 'linear-gradient(360deg, #001000 15%, #080808 50%, #010000 100%)',
      }}
    >
      {/* Vertical EXPERIENCE Text */}
      <Fade in={isVisible} timeout={1000}>
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 10, sm: 20, md: 40 },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            height: cardHeight > 0 ? `${cardHeight}px` : '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          <Typography
            sx={{
              color: 'rgba(120, 180, 140, 0.3)',
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
                color: 'rgba(120, 180, 140, 0.5)',
              }
            }}
          >
            EXPERIENCE
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
        {/* New Experience Card (2025) */}
        <Fade in={isVisible} timeout={2500}>
          <Card
            onMouseEnter={handleNewCardHover}
            onMouseLeave={handleCardLeave}
            sx={{
              minWidth: { xs: '100%', sm: 450, md: 550 },
              maxWidth: { xs: '100%', sm: 650, md: 950 },
              mx: { xs: 0, sm: 0 },
              flexGrow: getNewCardSize(),
              transform: `scale(${hoveredCard === 'old' ? 0.85 : 1})`,
              background: hoveredCard === 'old'
                ? 'linear-gradient(145deg, rgba(2, 8, 2, 0.4) 0%, rgba(5, 8, 5, 0.6) 100%)' // Green-tinted backgrounds
                : 'linear-gradient(145deg, rgba(2, 8, 2, 0.90) 0%, rgba(5, 8, 5, 0.94) 100%)',
              backdropFilter: 'blur(25px)',
              boxShadow: hoveredCard === 'old'
                ? '0 8px 32px rgba(5, 16, 8, 0.15), inset 0 1px 0 rgba(220, 255, 220, 0.05)' // Green-tinted shadows
                : '0 25px 80px rgba(5, 16, 8, 0.5), inset 0 1px 0 rgba(220, 255, 220, 0.08)',
              borderRadius: 4,
              padding: { xs: 2, sm: 3 },
              color: '#e8f5e8', // Green-tinted text
              border: hoveredCard === 'old'
                ? '1px solid rgba(40, 60, 40, 0.5)' // Green-tinted borders
                : '1px solid rgba(40, 60, 40, 0.9)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              opacity: hoveredCard === 'old' ? 0.3 : 1,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: hoveredCard === 'old'
                  ? 'linear-gradient(90deg, transparent 0%, rgba(120, 180, 140, 0.3) 50%, transparent 100%)' // Green accent
                  : 'linear-gradient(90deg, transparent 0%, rgba(120, 180, 140, 0.8) 50%, transparent 100%)',
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
                label={hoveredCard === 'old' ? "2025" : "Academic Institution"}
                size="small"
                sx={{
                  backgroundColor: 'rgba(120, 180, 140, 0.25)', // Green-tinted chip
                  color: '#c8f0d8',
                  border: '1px solid rgba(140, 180, 150, 0.4)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  '& .MuiChip-icon': { color: '#a0d8b0' },
                  fontSize: { xs: '0.65rem', sm: '0.8rem' },
                }}
              />
              {hoveredCard !== 'old' && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    startIcon={<GitHubIcon />}
                    variant="outlined"
                    size={isMobile ? "small" : "medium"}
                    onClick={handleGitHubClick}
                    sx={{
                      minWidth: 'auto',
                      padding: { xs: '6px 12px', sm: '8px 16px' },
                      backgroundColor: 'rgba(230, 250, 235, 0.95)', // Light green tint
                      color: '#2c4e35',
                      border: '1px solid rgba(140, 180, 150, 0.5)',
                      backdropFilter: 'blur(15px)',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      '&:hover': {
                        backgroundColor: 'rgba(245, 255, 248, 1)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 25px rgba(120, 180, 140, 0.3)',
                      },
                      fontSize: { xs: '0.75rem', sm: '0.9rem' },
                      borderRadius: 3,
                      transition: 'all 0.6s ease',
                    }}
                  >
                    Pipeline
                  </Button>
                </Box>
              )}
            </Box>

            <CardContent sx={{
              p: hoveredCard === 'old' ? { xs: 1, sm: 2 } : { xs: 2, sm: 3 },
              transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
            }}>
              {hoveredCard !== 'old' ? (
                <>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 800,
                      color: '#f0fff6',
                      fontSize: { xs: '1.15rem', sm: '1.45rem' },
                      background: 'linear-gradient(135deg, #f0fff6 0%, #e8f5e8 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1.5,
                      fontFamily: '"Rajdhani", "Montserrat", sans-serif',
                    }}
                  >
                    École nationale supérieure des mines de Saint-Étienne
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <DataObjectIcon sx={{ color: '#80d8a8', fontSize: { xs: '1.3rem', sm: '1.6rem' } }} />
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        color: '#e8f5e8',
                        fontWeight: 800,
                        fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.1rem' },
                        lineHeight: 1.2,
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      Data Engineer / ETL Pipeline Developer - Intern
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <CalendarTodayIcon sx={{ color: '#a0d8b0', fontSize: '1.1rem' }} />
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: '#b8e8c8',
                        fontSize: { xs: '0.95rem', sm: '1.05rem' },
                        fontFamily: 'Montserrat, sans-serif',
                        fontStyle: 'italic',
                      }}
                    >
                      April 2025 - August 2025
                    </Typography>
                  </Box>

                  <Divider sx={{
                    backgroundColor: 'rgba(140, 180, 150, 0.3)',
                    mb: 3,
                    height: '1px',
                  }} />

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(232, 245, 232, 0.9)',
                      fontWeight: 500,
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' },
                      lineHeight: 1.7,
                      textAlign: 'justify',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Developed an advanced ETL Pipeline for creating Knowledge Graphs from IEC 61850 compliant CSV files, following the Omega-X ontology pattern for energy data modeling and semantic interoperability. Built automated evaluation systems with performance monitoring, implemented AI-powered Word document data extraction using LLM technologies, and created a mapping solutions for energy device hierarchies with GraphDB integration for semantic data storage and querying.
                  </Typography>
                </>
              ) : (
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'rgba(232, 245, 232, 0.5)',
                      fontSize: { xs: '0.85rem', sm: '1.05rem' },
                      mb: 0.5,
                      lineHeight: 1.2,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Data Engineer / ETL Pipeline Developer - Intern
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(160, 216, 180, 0.4)',
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                      fontFamily: 'Montserrat, sans-serif',
                      fontStyle: 'italic',
                    }}
                  >
                    April 2025 - August 2025
                  </Typography>
                </Box>
              )}
            </CardContent>

            {/* Technology buttons only show when not minimized */}
            {hoveredCard !== 'old' && (
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
                    { label: 'Python', id: 'python2025' as ExperienceSection, color: '#4a90e2' },
                    { label: 'RDF/SPARQL', id: 'rdf2025' as ExperienceSection, color: '#e74c3c' },
                    { label: 'GraphDB', id: 'graphdb2025' as ExperienceSection, color: '#27ae60' },
                    { label: 'IEC 61850', id: 'iec2025' as ExperienceSection, color: '#f39c12' },
                    { label: 'LLM/AI', id: 'llm2025' as ExperienceSection, color: '#9b59b6' },
                  ].map((tech) => (
                    <Button
                      key={tech.id}
                      onClick={() => handleSectionClick(tech.id)}
                      variant="outlined"
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        backgroundColor: activeSection === tech.id
                          ? `${tech.color}40`
                          : 'rgba(2, 8, 2, 0.8)', // Green-tinted button background
                        color: activeSection === tech.id ? '#ffffff' : '#c8f0d8',
                        border: activeSection === tech.id
                          ? `2px solid ${tech.color}`
                          : '1px solid rgba(40, 60, 40, 0.6)',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: activeSection === tech.id ? 700 : 600,
                        '&:hover': {
                          backgroundColor: `${tech.color}30`,
                          borderColor: tech.color,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 8px 25px ${tech.color}40`,
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
                      {tech.label}
                    </Button>
                  ))}
                </CardActions>

                {/* Collapsible Sections for 2025 Experience */}
                {[
                  {
                    id: 'python2025' as ExperienceSection,
                    content: "Designed a ETL pipeline using Python with automated CSV processing, regex-based device extraction, and ISO 8601 time standardization. Implemented modular architecture with integrated evaluation systems for performance monitoring and resource usage tracking.",
                  },
                  {
                    id: 'rdf2025' as ExperienceSection,
                    content: "Developed RDF knowledge graphs using SDM-RDFizer with Jinja2 templating for automated RML mapping generation.",
                  },
                  {
                    id: 'graphdb2025' as ExperienceSection,
                    content: "Integrated GraphDB repository management with automated import capabilities, authentication handling, and query optimization. Built a database interaction systems for knowledge graph storage, retrieval, and semantic reasoning.",
                  },
                  {
                    id: 'iec2025' as ExperienceSection,
                    content: "Implemented IEC 61850 standard compliance with automated device hierarchy processing, logical node mapping, and data attribute extraction. Created semantic representations of energy devices following international standards for power system communication.",
                  },
                  {
                    id: 'llm2025' as ExperienceSection,
                    content: "Built AI-powered Word document processing system using Google Gemma 3-4B-IT model with LM Studio integration. Implemented few-shot learning techniques for data object extraction, de-duplication algorithms, and automated dictionary generation.",
                  }
                ].map((section) => (
                  <Collapse key={section.id} in={activeSection === section.id} timeout={1200} unmountOnExit>
                    <CardContent sx={{
                      p: { xs: 2, sm: 3 },
                      pt: 0,
                      background: 'linear-gradient(135deg, rgba(2, 8, 2, 0.6) 0%, rgba(5, 8, 5, 0.7) 100%)',
                      borderRadius: 3,
                      mx: { xs: 2, sm: 3 },
                      mb: 2,
                      border: '1px solid rgba(40, 60, 40, 0.6)',
                      backdropFilter: 'blur(15px)',
                    }}>
                      <Typography
                        paragraph
                        sx={{
                          color: 'rgba(232, 245, 232, 0.9)',
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

        {/* Old Experience Card (2024) */}
        <Fade in={isVisible} timeout={3000}>
          <Card
            onMouseEnter={handleOldCardHover}
            onMouseLeave={handleCardLeave}
            sx={{
              minWidth: { xs: '100%', sm: 450, md: 550 },
              maxWidth: { xs: '100%', sm: 650, md: 950 },
              mx: { xs: 0, sm: 0 },
              flexGrow: getOldCardSize(),
              transform: `scale(${hoveredCard === 'old' ? 1 : 0.85})`,
              background: hoveredCard === 'old'
                ? 'linear-gradient(145deg, rgba(2, 8, 2, 0.90) 0%, rgba(5, 8, 5, 0.94) 100%)'
                : 'linear-gradient(145deg, rgba(2, 8, 2, 0.4) 0%, rgba(5, 8, 5, 0.6) 100%)',
              backdropFilter: 'blur(25px)',
              boxShadow: hoveredCard === 'old'
                ? '0 25px 80px rgba(5, 16, 8, 0.5), inset 0 1px 0 rgba(220, 255, 220, 0.08)'
                : '0 8px 32px rgba(5, 16, 8, 0.15), inset 0 1px 0 rgba(220, 255, 220, 0.05)',
              borderRadius: 4,
              padding: { xs: 2, sm: 3 },
              color: '#e8f5e8',
              border: hoveredCard === 'old'
                ? '1px solid rgba(40, 60, 40, 0.9)'
                : '1px solid rgba(40, 60, 40, 0.5)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              opacity: hoveredCard === 'old' ? 1 : 0.3,
              mt: 2,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: hoveredCard === 'old'
                  ? 'linear-gradient(90deg, transparent 0%, rgba(120, 180, 140, 0.8) 50%, transparent 100%)'
                  : 'linear-gradient(90deg, transparent 0%, rgba(120, 180, 140, 0.3) 50%, transparent 100%)',
                transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              },
            }}
          >
            {/* Header */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 1,
              mb: hoveredCard === 'old' ? 2 : 1,
            }}>
              <Chip
                icon={<SchoolIcon />}
                label={hoveredCard === 'old' ? "Academic Institution" : "2024"}
                size="small"
                sx={{
                  backgroundColor: 'rgba(120, 180, 140, 0.2)',
                  color: hoveredCard === 'old' ? '#c8f0d8' : 'rgba(200, 240, 216, 0.6)',
                  border: `1px solid rgba(140, 180, 150, ${hoveredCard === 'old' ? '0.4' : '0.2'})`,
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  '& .MuiChip-icon': { color: hoveredCard === 'old' ? '#a0d8b0' : 'rgba(160, 216, 180, 0.6)' },
                  fontSize: { xs: '0.65rem', sm: '0.8rem' },
                }}
              />
            </Box>

            <CardContent sx={{
              p: hoveredCard === 'old' ? { xs: 2, sm: 3 } : { xs: 1, sm: 2 },
              transition: 'all 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
            }}>
              {hoveredCard !== 'old' ? (
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'rgba(232, 245, 232, 0.5)',
                      fontSize: { xs: '0.85rem', sm: '1.05rem' },
                      mb: 0.5,
                      lineHeight: 1.2,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Web Application Developer - Intern
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(160, 216, 180, 0.4)',
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                      fontFamily: 'Montserrat, sans-serif',
                      fontStyle: 'italic',
                    }}
                  >
                    April 2024 - August 2024
                  </Typography>
                </Box>
              ) : (
                <Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 800,
                      color: '#f0fff6',
                      fontSize: { xs: '1.15rem', sm: '1.45rem' },
                      background: 'linear-gradient(135deg, #f0fff6 0%, #e8f5e8 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1.5,
                      fontFamily: '"Rajdhani", "Montserrat", sans-serif',
                    }}
                  >
                    École nationale supérieure des mines de Saint-Étienne
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <WorkIcon sx={{ color: '#80d8a8', fontSize: { xs: '1.3rem', sm: '1.6rem' } }} />
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        color: '#e8f5e8',
                        fontWeight: 800,
                        fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.1rem' },
                        lineHeight: 1.2,
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      Web Application Developer - Intern
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <CalendarTodayIcon sx={{ color: '#a0d8b0', fontSize: '1.1rem' }} />
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: '#b8e8c8',
                        fontSize: { xs: '0.95rem', sm: '1.05rem' },
                        fontFamily: 'Montserrat, sans-serif',
                        fontStyle: 'italic',
                      }}
                    >
                      April 2024 - August 2024
                    </Typography>
                  </Box>

                  <Divider sx={{
                    backgroundColor: 'rgba(140, 180, 150, 0.25)',
                    mb: 3,
                    height: '1px',
                  }} />

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(232, 245, 232, 0.85)',
                      fontWeight: 500,
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' },
                      lineHeight: 1.7,
                      textAlign: 'justify',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Developed a Python-based application to optimize waste collection and treatment scenarios in Saint-Étienne, improving environmental performance. Designed key performance indicators to minimize emissions and resource use. Built FastAPI-based APIs for seamless data handling and a Vue.js interface for scenario selection and visualization. Conducted geospatial analysis with QGIS to calculate collection point distances and optimized vehicle routing with Google OR-Tools, reducing travel distance and fuel consumption.
                  </Typography>
                </Box>
              )}
            </CardContent>

            {/* Technology buttons only show when hovered */}
            {hoveredCard === 'old' && (
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
                    { label: 'Python', id: 'python2024' as ExperienceSection, color: '#4a90e2' },
                    { label: 'VueJS', id: 'vue2024' as ExperienceSection, color: '#4fc08d' },
                    { label: 'QGIS', id: 'qgis2024' as ExperienceSection, color: '#589632' },
                    { label: 'OR-Tools', id: 'ortools2024' as ExperienceSection, color: '#4285f4' },
                    { label: 'FastAPI', id: 'fastapi2024' as ExperienceSection, color: '#009688' },
                  ].map((tech) => (
                    <Button
                      key={tech.id}
                      onClick={() => handleSectionClick(tech.id)}
                      variant="outlined"
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        backgroundColor: activeSection === tech.id
                          ? `${tech.color}40`
                          : 'rgba(2, 8, 2, 0.8)',
                        color: activeSection === tech.id ? '#ffffff' : '#c0e8d0',
                        border: activeSection === tech.id
                          ? `2px solid ${tech.color}`
                          : '1px solid rgba(40, 60, 40, 0.6)',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: activeSection === tech.id ? 700 : 600,
                        '&:hover': {
                          backgroundColor: `${tech.color}30`,
                          borderColor: tech.color,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 8px 25px ${tech.color}30`,
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
                      {tech.label}
                    </Button>
                  ))}
                </CardActions>

                {/* Collapsible sections only show when hovered */}
                {[
                  {
                    id: 'python2024' as ExperienceSection,
                    content: "I chose a modular Python package approach for better maintainability, integration, and scalability. Each process—Transport, Methanisation, Sludge Treatment, Cleaning, Fuel Conversion, and more—was encapsulated in separate packages, ensuring seamless updates and efficient waste management modeling.",
                  },
                  {
                    id: 'vue2024' as ExperienceSection,
                    content: "Developed a Vue.js frontend for evaluating multiple waste management scenarios, enabling users to select inputs, compare different models, and visualize data through interactive graphs. This helped identify the most efficient waste management strategy for the metropolitan area.",
                  },
                  {
                    id: 'qgis2024' as ExperienceSection,
                    content: "Utilized QGIS for geospatial analysis to extract distance matrices, essential for calculating total distances per polygon and optimizing waste collection routes. With 176 collection points, the goal was to estimate fuel consumption for each polygon.",
                  },
                  {
                    id: 'ortools2024' as ExperienceSection,
                    content: "Addressed an NP-hard Traveling Salesman Problem by optimizing waste collection routes using Google OR-Tools. Implemented a Vehicle Routing Problem (VRP) approach to estimate total fuel consumption per polygon.",
                  },
                  {
                    id: 'fastapi2024' as ExperienceSection,
                    content: "Implemented FastAPI for input and output handling in the waste management model. Used POST requests to submit total waste and fuel consumption per polygon, while a GET API allowed users to retrieve results from file or history.",
                  }
                ].map((section) => (
                  <Collapse key={section.id} in={activeSection === section.id} timeout={1200} unmountOnExit>
                    <CardContent sx={{
                      p: { xs: 2, sm: 3 },
                      pt: 0,
                      background: 'linear-gradient(135deg, rgba(2, 8, 2, 0.6) 0%, rgba(5, 8, 5, 0.7) 100%)',
                      borderRadius: 3,
                      mx: { xs: 2, sm: 3 },
                      mb: 2,
                      border: '1px solid rgba(40, 60, 40, 0.6)',
                      backdropFilter: 'blur(15px)',
                    }}>
                      <Typography
                        paragraph
                        sx={{
                          color: 'rgba(232, 245, 232, 0.85)',
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
      </Box>
    </Box>
  );
}
