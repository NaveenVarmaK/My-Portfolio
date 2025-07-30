import * as React from 'react';
import { Box, Card, CardContent, Typography, Fade } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Floating animation for the card
const float = keyframes`
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-8px) scale(1.01); }
`;

// Pulse animation for decorative elements
const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
`;

// Enhanced card with dark glassmorphism
const EnhancedCard = styled(Card)(() => ({
  background: 'linear-gradient(145deg, rgba(2, 2, 2, 0.90) 0%, rgba(5, 5, 8, 0.94) 100%)',
  backdropFilter: 'blur(40px)',
  boxShadow: '0 25px 80px rgba(5, 12, 16, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(32, 32, 40, 0.9)',
  borderRadius: '16px',
  position: 'relative',
  overflow: 'hidden',
  animation: `${float} 8s ease-in-out infinite`,
  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
    boxShadow: '0 30px 100px rgba(5, 12, 16, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
    border: '1px solid rgba(32, 32, 40, 1.0)',
    '& .decorative-quote': {
      opacity: 0.6,
      transform: 'scale(1.1)',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(80, 80, 129, 0.8) 50%, transparent 100%)',
  }
}));

export default function EnhancedDescription() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);
  const [cardHeight, setCardHeight] = React.useState(0);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsVisible(true);
    const contentTimer = setTimeout(() => setShowContent(true), 600);
    
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

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '100%',
        minHeight: { xs: '60vh', md: '80vh' },
        display: 'flex',
        justifyContent: 'center',
        background: 'linear-gradient(360deg, #010000 15%, #080808 50%, #100000 100%)',
        alignItems: 'center',
        p: { xs: 2, sm: 0 },
        overflow: 'visible',
      }}
    >
      {/* Vertical ABOUT Text */}
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
              color: 'rgba(80, 80, 129, 0.3)',
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
                color: 'rgba(80, 80, 129, 0.5)',
              }
            }}
          >
            ABOUT
          </Typography>
        </Box>
      </Fade>

      {/* Large Background Text */}
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: { xs: '4rem', sm: '8rem', md: '15rem', lg: '20rem' },
          fontWeight: 900,
          color: 'rgba(80, 80, 129, 0.05)',
          zIndex: -1,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 2s ease-in-out',
        }}
      >
        Myself
      </Typography>

      {/* Subtle Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -2,
        }}
      />

      {/* Enhanced Card Container */}
      <Box
        ref={cardRef}
        sx={{
          ml: { xs: 0, sm: 12, md: 16 },
          mr: { xs: 0, sm: 4, md: 8 },
          width: '100%',
          maxWidth: { xs: '380px', sm: '750px', md: '850px', lg: '950px' },
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Fade in={isVisible} timeout={1200}>
          <EnhancedCard>
            <CardContent
              sx={{
                p: { xs: 3, sm: 4, md: 5 },
                pt: { xs: 2, sm: 3 },
                position: 'relative',
              }}
            >
              {/* Opening quote decoration */}
              <Box
                className="decorative-quote"
                sx={{
                  position: 'absolute',
                  top: { xs: 15, sm: 20 },
                  left: { xs: 15, sm: 20 },
                  fontSize: { xs: '2.5rem', sm: '4rem' },
                  color: 'rgba(255, 255, 255, 0.15)',
                  fontFamily: 'serif',
                  lineHeight: 1,
                  transition: 'all 0.3s ease',
                  animation: `${pulse} 4s ease-in-out infinite`,
                }}
              >
                "
              </Box>

              {/* Main Content */}
              <Fade in={showContent} timeout={1500}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.4rem' },
                    lineHeight: { xs: 1.7, sm: 1.8, md: 1.9 },
                    color: 'rgba(255, 255, 255, 0.95)',
                    textAlign: 'justify',
                    position: 'relative',
                    zIndex: 2,
                    pl: { xs: 3, sm: 4 },
                    pr: { xs: 3, sm: 4 },
                    pt: { xs: 2, sm: 3 },
                    pb: { xs: 2, sm: 3 },
                    fontFamily: "montserrat, sans-serif",
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    mb: 3,
                  }}
                >
                  Passionate technologist and innovative problem-solver with a relentless drive for excellence 
                  in software engineering. I specialize in building scalable, user-centric applications that 
                  bridge the gap between complex technical challenges and real-world solutions. My expertise 
                  spans full-stack development, cloud architecture, and emerging technologies, always with 
                  a focus on creating meaningful impact through code.
                </Typography>
              </Fade>

              {/* Closing quote decoration */}
              <Box
                className="decorative-quote"
                sx={{
                  position: 'absolute',
                  bottom: { xs: 15, sm: 20 },
                  right: { xs: 15, sm: 20 },
                  fontSize: { xs: '2.5rem', sm: '4rem' },
                  color: 'rgba(255, 255, 255, 0.15)',
                  fontFamily: 'serif',
                  lineHeight: 1,
                  transform: 'rotate(180deg)',
                  transition: 'all 0.3s ease',
                  animation: `${pulse} 4s ease-in-out infinite 2s`,
                }}
              >
                "
              </Box>
            </CardContent>
          </EnhancedCard>
        </Fade>
      </Box>
    </Box>
  );
}
