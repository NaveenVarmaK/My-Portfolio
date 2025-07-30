import * as React from 'react';
import { Box, Typography, Fade, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function SophisticatedHeader() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);
  const [cardHeight, setCardHeight] = React.useState(0);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsVisible(true);
    const contentTimer = setTimeout(() => setShowContent(true), 800);
    
    return () => clearTimeout(contentTimer);
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
  }, [showContent]);

  // Social media links data
  const socialLinks = [
    {
      icon: GitHubIcon,
      url: 'https://github.com/NaveenVarmaK',
      label: 'GitHub',
      color: '#ffffff'
    },
    {
      icon: LinkedInIcon,
      url: 'https://linkedin.com/in/knaveenv',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      icon: EmailIcon,
      url: 'mailto:naveen.varma.kalidindi@etu.univ-st-etienne.fr',
      label: 'Email',
      color: '#ea4335'
    }
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '100%',
        minHeight: { xs: '70vh', md: '100vh' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0,
        overflow: 'visible',
        // Black background with subtle texture
        background: '#100000',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }
      }}
    >
      {/* Vertical PORTFOLIO Text */}
      <Fade in={isVisible} timeout={1000}>
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 10, sm: 20, md: 40 },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            height: cardHeight > 0 ? `${cardHeight}px` : '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.15)',
              fontWeight: 200,
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
              fontFamily: '"JetBrains Mono", "Space Mono", monospace',
              '&:hover': {
                color: 'rgba(255, 255, 255, 0.25)',
              }
            }}
          >
            PORTFOLIO
          </Typography>
        </Box>
      </Fade>

      {/* Main Content Container */}
      <Box
        ref={cardRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
          maxWidth: '1200px',
          ml: { xs: 12, sm: 16, md: 20 },
          mr: { xs: 2, sm: 4, md: 8 },
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 2,
        }}
      >
        {/* Greeting Text */}
        <Fade in={showContent} timeout={1400}>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 300,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
              mb: { xs: 2, sm: 3 },
              fontFamily: "montserrat, sans-serif",
              letterSpacing: '0.3px',
              lineHeight: 1.4,
            }}
          >
            Hello! My Name is
          </Typography>
        </Fade>

        {/* Name - Main Focus */}
        <Fade in={showContent} timeout={1600}>
          <Box sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
            <Typography
              variant="h1"
              sx={{
                color: '#ffffff',
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '4rem', md: '5.5rem', lg: '6.5rem' },
                lineHeight: { xs: 0.9, sm: 0.95, md: 1 },
                fontFamily: '"Playfair Display", "Crimson Text", serif',
                letterSpacing: { xs: '-1px', sm: '-2px', md: '-3px' },
                mb: { xs: 1, sm: 2 },
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                textShadow: '0 8px 32px rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  textShadow: '0 12px 40px rgba(255, 255, 255, 0.15)',
                }
              }}
            >
              Naveen Varma
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 300,
                fontSize: { xs: '2.5rem', sm: '4rem', md: '5.5rem', lg: '6.5rem' },
                lineHeight: { xs: 0.9, sm: 0.95, md: 1 },
                fontFamily: '"Playfair Display", "Crimson Text", serif',
                letterSpacing: { xs: '-1px', sm: '-2px', md: '-3px' },
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                textShadow: '0 8px 32px rgba(255, 255, 255, 0.08)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  color: '#ffffff',
                }
              }}
            >
              KALIDINDI
            </Typography>
          </Box>
        </Fade>

        {/* Role/Title Section */}
        <Fade in={showContent} timeout={1800}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 2, sm: 3 },
            mb: { xs: 4, sm: 5 },
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 400,
                  fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.2rem' },
                  fontFamily: "montserrat, sans-serif",
                  letterSpacing: '0.3px',
                }}
              >
                Computer Science Engineer
              </Typography>
            </Box>
            
            <Box
              sx={{
                width: { xs: '100%', sm: '2px' },
                height: { xs: '1px', sm: '30px' },
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
                display: { xs: 'block', sm: 'block' },
              }}
            />
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 400,
                  fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.2rem' },
                  fontFamily: "montserrat, sans-serif",
                  letterSpacing: '0.3px',
                }}
              >
                Full Stack Developer
              </Typography>
            </Box>
          </Box>
        </Fade>

        {/* Divider */}
        <Fade in={showContent} timeout={2000}>
          <Box
            sx={{
              width: { xs: '80%', sm: '60%', md: '50%' },
              height: '1px',
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
              mb: { xs: 3, sm: 4 },
            }}
          />
        </Fade>

        {/* Social Media Icons - Bottom */}
        <Fade in={showContent} timeout={2200}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: { xs: 3, sm: 4, md: 5 },
              alignItems: 'center',
            }}
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <IconButton
                  key={social.label}
                  onClick={() => window.open(social.url, '_blank')}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    backgroundColor: 'transparent', // No background
                    border: 'none', // No border
                    borderRadius: 0, // No border radius
                    padding: { xs: '8px', sm: '10px', md: '12px' },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      color: social.color,
                      backgroundColor: 'transparent',
                      transform: 'translateY(-3px) scale(1.1)',
                      filter: `drop-shadow(0 5px 10px ${social.color}40)`,
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' }
                    }
                  }}
                  aria-label={social.label}
                >
                  <IconComponent />
                </IconButton>
              );
            })}
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
