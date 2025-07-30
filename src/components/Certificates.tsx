import * as React from 'react';
import { Box, useMediaQuery, useTheme, Chip, Divider, Fade, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function CertificationsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null);
  
  const [isVisible, setIsVisible] = React.useState(false);
  const [cardHeight, setCardHeight] = React.useState(0);
  const cardRef = React.useRef<HTMLDivElement>(null);

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
  }, [hoveredCard]);

  // Enhanced certifications data
  const certifications = [
    {
      id: 'aws',
      title: 'AWS Certified Cloud Practitioner 2020',
      provider: 'Amazon Web Services',
      platform: 'A Cloud Guru',
      icon: CloudIcon,
      color: '#ff9900',
      date: 'October 24, 2022',
      status: 'Certified',
      description: 'Comprehensive understanding of AWS Cloud fundamentals, core services, security, architecture, pricing, and support. Covers essential AWS concepts including compute, storage, networking, and database services.',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Cost Management'],
      verificationLink: 'https://verify.acloud.guru/54DDF408F9EA',
      showVerifyButton: true,
    },
    {
      id: 'angular',
      title: 'Angular - The Complete Guide',
      provider: 'Angular',
      platform: 'Udemy',
      icon: CodeIcon,
      color: '#dd0031',
      date: '2023',
      status: 'Completed',
      description: 'Master Angular (formerly Angular 2) and build awesome, reactive web apps with the successor of AngularJS. Comprehensive course covering components, directives, services, forms, HTTP, routing, and more.',
      skills: ['Angular Framework', 'TypeScript', 'Web Development'],
      verificationLink: '#',
      showVerifyButton: false,
    },
  ];

  // Hover handlers - only for non-mobile devices
  const handleCardHover = (cardId: string) => {
    if (!isMobile) {
      setHoveredCard(cardId);
    }
  };
  
  const handleCardLeave = () => {
    if (!isMobile) {
      setHoveredCard(null);
    }
  };

  // Calculate card transform based on hover state - simplified for mobile
  const getCardTransform = (cardId: string) => {
    if (isMobile) return 'scale(1)'; // No scaling on mobile
    if (hoveredCard === null) return 'scale(1)';
    if (hoveredCard === cardId) return 'scale(1.03)'; // Reduced scale for better mobile performance
    return 'scale(0.97)';
  };

  const getCardOpacity = (cardId: string) => {
    if (isMobile) return 1; // No opacity changes on mobile
    if (hoveredCard === null) return 1;
    if (hoveredCard === cardId) return 1;
    return 0.8;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '100%',
        minHeight: { xs: 'auto', md: '120vh' }, // Auto height on mobile
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: 1, sm: 2, md: 0 }, // Better padding for mobile
        overflow: 'visible',
        background: 'linear-gradient(360deg, rgb(35, 0, 20) 5%, #080808 70%, rgb(15, 0, 35) 100%)',
      }}
    >
      {/* Vertical CERTIFICATIONS Text - Hidden on mobile for space */}
      {!isMobile && (
        <Fade in={isVisible} timeout={1000}>
          <Box
            sx={{
              position: 'absolute',
              left: { sm: 20, md: 40 },
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
                color: 'rgba(140, 0, 80, 0.3)',
                fontWeight: 300,
                fontSize: { xs: '1.2rem', sm: '1.5rem', md:'2rem', lg: '2.5rem' },
                letterSpacing: { xs: '8px', sm: '12px', md: '16px' },
                textAlign: 'center',
                userSelect: 'none',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'rgba(140, 0, 80, 0.5)',
                }
              }}
            >
              CERTIFICATIONS
            </Typography>
          </Box>
        </Fade>
      )}

      {/* Mobile Title */}
      {isMobile && (
        <Fade in={isVisible} timeout={1000}>
          <Box
            sx={{
              position: 'absolute',
              top: { xs: 20 },
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                color: 'rgba(140, 0, 80, 0.7)',
                fontWeight: 600,
                fontSize: '1.5rem',
                letterSpacing: '4px',
                textAlign: 'center',
                userSelect: 'none',
                textTransform: 'uppercase',
                fontFamily: '"Rajdhani", "Montserrat", sans-serif',
              }}
            >
              CERTIFICATIONS
            </Typography>
          </Box>
        </Fade>
      )}

      {/* Subtle Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(140, 0, 80, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(140, 0, 80, 0.02) 0%, transparent 50%)
          `,
          zIndex: -2,
        }}
      />

      {/* Certifications Container */}
      <Box
        ref={cardRef}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Row on medium+ screens, column on small
          gap: { xs: 2, sm: 3, md: 4 },
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' }, // Center on mobile, flex-start on desktop
          width: '100%',
          maxWidth: { xs: '100%', sm: '600px', md: '1400px' }, // Increased max width for side-by-side cards
          ml: { xs: 0, sm: 8, md: 20 }, // No left margin on mobile
          mr: { xs: 0, sm: 4, md: 8 },
          mt: { xs: 8, sm: 4, md: 0 }, // Top margin for mobile title
          px: { xs: 2, sm: 4 }, // Horizontal padding for mobile
          pb: { xs: 4, sm: 0 }, // Bottom padding for mobile
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {certifications.map((cert, index) => {
          const IconComponent = cert.icon;
          
          return (
            <Fade key={cert.id} in={isVisible} timeout={1200 + index * 200}>
              <Card
                onMouseEnter={() => handleCardHover(cert.id)}
                onMouseLeave={handleCardLeave}
                sx={{
                  width: { 
                    xs: '100%', // Full width on mobile
                    sm: '90%',  // Slightly reduced on small tablets
                    md: 'calc(50% - 20px)', // Half width minus gap on medium+ screens
                    lg: 450,   // Fixed width on large screens
                  },
                  maxWidth: { xs: 'none', sm: 500, md: 'none', lg: 550 }, // No max width constraint on medium screens
                  minHeight: { md: 400 }, // Ensure consistent height on desktop
                  transform: getCardTransform(cert.id),
                  opacity: getCardOpacity(cert.id),
                  // Black card background with magenta theme
                  background: hoveredCard === cert.id
                    ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.90) 100%)'
                    : 'linear-gradient(135deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.85) 100%)',
                  backdropFilter: 'blur(40px)',
                  boxShadow: hoveredCard === cert.id
                    ? '0 20px 60px rgba(140, 0, 80, 0.3), 0 0 0 1px rgba(140, 0, 80, 0.3)'
                    : '0 8px 20px rgba(140, 0, 80, 0.1), 0 0 0 1px rgba(140, 0, 80, 0.1)',
                  borderRadius: { xs: 3, sm: 4 }, // Smaller border radius on mobile
                  padding: { xs: 1.5, sm: 2, md: 3 }, // Reduced padding on mobile
                  color: 'white',
                  border: hoveredCard === cert.id
                    ? '1px solid rgba(140, 0, 80, 0.4)'
                    : '1px solid rgba(140, 0, 80, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: isMobile ? 'default' : 'pointer', // No pointer cursor on mobile
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column', // Ensure content stretches to fill card height
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: hoveredCard === cert.id
                      ? `linear-gradient(90deg, transparent 0%, ${cert.color} 50%, transparent 100%)`
                      : `linear-gradient(90deg, transparent 0%, ${cert.color}40 50%, transparent 100%)`,
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }
                }}
              >
                {/* Header Section */}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  p: { xs: 0.5, sm: 1 }, // Reduced padding on mobile
                  mb: { xs: 1, sm: 2 },
                }}>
                  {cert.showVerifyButton && (
                    <Button
                      startIcon={<OpenInNewIcon />}
                      variant="outlined"
                      size="small" // Always small on mobile
                      onClick={() => window.open(cert.verificationLink, '_blank')}
                      sx={{
                        minWidth: 'auto',
                        padding: { xs: '4px 8px', sm: '6px 12px', md: '8px 16px' },
                        backgroundColor: 'rgb(255, 255, 255)',
                        color: 'rgba(140, 0, 80, 1)',
                        border: '1px solid rgba(140, 0, 80, 0.3)',
                        backdropFilter: 'blur(10px)',
                        fontFamily: 'Montserrat, sans-serif',
                        '&:hover': { 
                          backgroundColor: 'rgba(140, 0, 80, 0.2)',
                          borderColor: 'rgba(140, 0, 80, 0.5)',
                          transform: isMobile ? 'none' : 'translateY(-2px)',
                          boxShadow: '0 5px 20px rgba(140, 0, 80, 0.3)',
                          // color: '#ffffff',
                        },
                        fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.875rem' },
                        fontWeight: 600,
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Verify
                    </Button>
                  )}
                </Box>

                <CardContent sx={{ 
                  p: { xs: 1.5, sm: 2, md: 3 }, // Reduced padding on mobile
                  transition: 'all 0.8s ease',
                  flex: 1, // Allow content to fill remaining space
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'white',
                      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }, // Smaller on mobile
                      background: 'linear-gradient(135deg, #ffffff 0%, #e3e3e3 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1,
                      lineHeight: 1.3, // Better line height for mobile
                      fontFamily: '"Rajdhani", "Montserrat", sans-serif',
                    }}
                  >
                    {cert.title}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <IconComponent sx={{ color: cert.color, fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' } }} />
                    <Box>
                      <Typography 
                        variant="h6" 
                        component="div" 
                        sx={{ 
                          color: 'white', 
                          fontWeight: 600,
                          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                          lineHeight: 1.2,
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                      >
                        {cert.provider}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.7)', 
                          fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                      >
                        {cert.platform}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <CalendarTodayIcon sx={{ color: 'rgba(140, 0, 80, 0.8)', fontSize: { xs: '0.9rem', sm: '1rem' } }} />
                    <Typography 
                      sx={{ 
                        fontWeight: 600, 
                        color: 'rgba(140, 0, 80, 0.8)',
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                        background: 'linear-gradient(135deg, rgba(140, 0, 80, 0.8) 0%, rgba(140, 0, 80, 0.6) 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: 'Montserrat, sans-serif',
                        fontStyle: 'italic', // Italic for date
                      }}
                    >
                      Completed {cert.date}
                    </Typography>
                  </Box>

                  <Divider sx={{ 
                    backgroundColor: 'rgba(140, 0, 80, 0.2)', 
                    mb: { xs: 2, sm: 3 },
                    height: '1px',
                  }} />

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.9)', 
                      fontWeight: 500,
                      fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.05rem' }, // Smaller on mobile
                      lineHeight: { xs: 1.5, sm: 1.6 }, // Better line height for mobile
                      textAlign: 'justify',
                      mb: { xs: 2, sm: 3 },
                      flex: 1, // Allow description to take up available space
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    {cert.description}
                  </Typography>

                  {/* Skills Section */}
                  <Box sx={{ mb: 2, mt: 'auto' }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      Key Skills:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, sm: 1 } }}>
                      {cert.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: `${cert.color}20`,
                            color: 'white',
                            border: `1px solid ${cert.color}40`,
                            fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' },
                            fontWeight: 500,
                            height: { xs: 24, sm: 'auto' }, // Fixed height on mobile
                            fontFamily: 'Montserrat, sans-serif',
                            '&:hover': {
                              backgroundColor: `${cert.color}30`,
                              borderColor: cert.color,
                            },
                            transition: 'all 0.3s ease',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          );
        })}
      </Box>
    </Box>
  );
}
