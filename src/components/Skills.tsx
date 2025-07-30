import * as React from 'react';
import { Box, useMediaQuery, useTheme, Chip, Fade, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import CloudIcon from '@mui/icons-material/Cloud';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountTreeIcon from '@mui/icons-material/AccountTree';


const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.8),
  transition: 'all 0.3s ease',
}));

export default function SkillsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isVisible, setIsVisible] = React.useState(false);
  const [hoveredCategory, setHoveredCategory] = React.useState(null);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 320);
    return () => clearTimeout(timer);
  }, []);

  const allSkills = [
    // Frontend
    { id: 'html', label: 'HTML', category: 'frontend' },
    { id: 'css', label: 'CSS', category: 'frontend' },
    { id: 'bootstrap', label: 'Bootstrap', category: 'frontend' },
    { id: 'angular', label: 'Angular', category: 'frontend' },
    { id: 'react', label: 'React', category: 'frontend' },
    { id: 'vue', label: 'Vue.js', category: 'frontend' },
    { id: 'javascript', label: 'JavaScript', category: 'frontend' },
    { id: 'typescript', label: 'TypeScript', category: 'frontend' },
    
    // Backend
    { id: 'fastapi', label: 'FastAPI', category: 'backend' },
    { id: 'restapi', label: 'RestAPI', category: 'backend' },
    { id: 'springboot', label: 'Spring Boot', category: 'backend' },
    
    // Programming Languages
    { id: 'python', label: 'Python', category: 'languages' },
    { id: 'java', label: 'Java', category: 'languages' },
    { id: 'kotlin', label: 'Kotlin', category: 'languages' },
    { id: 'c', label: 'C', category: 'languages' },
    { id: 'cpp', label: 'C++', category: 'languages' },
    { id: 'sql', label: 'SQL', category: 'languages' },
    { id: 'sdlc', label: 'SDLC', category: 'languages' },
    { id: 'oops', label: 'OOPs', category: 'languages' },
    
    // Cloud & DevOps
    { id: 'aws', label: 'AWS Cloud', category: 'cloud' },
    { id: 'git', label: 'Git', category: 'cloud' },
    { id: 'docker', label: 'Docker', category: 'cloud' },
    
    // Data Analytics & GIS (Now more focused)
    { id: 'ortools', label: 'OR-Tools VRP', category: 'data' },
    { id: 'qgis', label: 'QGIS', category: 'data' },
    
    // NEW & MOVED: All Semantic Web and Knowledge Graph skills now in their own category
    { id: 'knowledgegraph', label: 'Knowledge Graph', category: 'semantic' },
    { id: 'semanticweb', label: 'Semantic Web', category: 'semantic' },
    { id: 'ontology', label: 'Ontology Engineering', category: 'semantic' },
    { id: 'rml', label: 'RML', category: 'semantic' },
    { id: 'sparql', label: 'SPARQL', category: 'semantic' },
    { id: 'graphdb', label: 'GraphDB', category: 'semantic' },

    // AI & Machine Learning
    { id: 'llm', label: 'LLM', category: 'ai' },
  ];

  const categories = [
    { id: 'frontend', title: 'Frontend', icon: WebIcon, color: '#4caf50' },
    { id: 'backend', title: 'Backend', icon: CodeIcon, color: '#2196f3' },
    { id: 'languages', title: 'Programming Languages', icon: CodeIcon, color: '#ff9800' },
    { id: 'semantic', title: 'Semantic Web & KG', icon: AccountTreeIcon, color: '#00bcd4' }, // NEW CATEGORY
    { id: 'ai', title: 'AI & ML', icon: PsychologyIcon, color: '#e91e63' },
    { id: 'cloud', title: 'Cloud & DevOps', icon: CloudIcon, color: '#9c27b0' },
    { id: 'data', title: 'Data Analytics & GIS', icon: StorageIcon, color: '#f44336' }, // Renamed for clarity
  ];

  const handleCategoryHover = React.useCallback((categoryId) => {
    setHoveredCategory(categoryId);
  }, []);

  const handleCategoryLeave = React.useCallback(() => {
    setHoveredCategory(null);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '100%',
        minHeight: { xs: '70vh', md: '100vh' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: 2, sm: 4 },
        background: 'linear-gradient(360deg, rgb(15, 0, 35) 5%, #080808 70%, rgb(0, 35, 35) 100%)',
      }}
    >
      {/* Vertical SKILLS Text */}
      <Fade in={isVisible} timeout={1000}>
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 10, sm: 20, md: 40 },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          <Typography
            sx={{
              color: 'rgba(90, 0, 210, 0.3)',
              fontWeight: 300,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
              letterSpacing: { xs: '8px', sm: '12px', md: '16px' },
              textAlign: 'center',
              userSelect: 'none',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'rgba(90, 0, 210, 0.5)',
              }
            }}
          >
            SKILLS
          </Typography>
        </Box>
      </Fade>

      {/* Main Content Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: { xs: '380px', sm: '750px', md: '950px' },
          alignItems: 'center',
          ml: { xs: 0, sm: 16, md: 20 },
        }}
      >
        {/* Category Buttons */}
        <Fade in={isVisible} timeout={1500}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center',
              mb: 6,
            }}
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = hoveredCategory === category.id;
              
              return (
                <Button
                  key={category.id}
                  onMouseEnter={() => handleCategoryHover(category.id)}
                  onMouseLeave={handleCategoryLeave}
                  onClick={() => setHoveredCategory(isActive ? null : category.id)}
                  startIcon={<IconComponent />}
                  variant="outlined"
                  size={isMobile ? "medium" : "large"}
                  sx={{
                    backgroundColor: isActive ? `${category.color}40` : 'rgba(0, 0, 0, 0.8)',
                    color: isActive ? '#ffffff' : '#c8f0f0',
                    border: isActive ? `2px solid ${category.color}` : '1px solid rgba(0, 60, 60, 0.6)',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: isActive ? 700 : 600,
                    '&:hover': {
                      backgroundColor: `${category.color}30`,
                      borderColor: category.color,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 25px ${category.color}40`,
                      color: '#ffffff',
                    },
                    fontSize: { xs: '0.8rem', sm: '0.95rem' },
                    px: { xs: 2, sm: 3 },
                    py: { xs: 1, sm: 1.5 },
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    textTransform: 'none',
                  }}
                >
                  {category.title}
                </Button>
              );
            })}
          </Box>
        </Fade>

        {/* Skills Grid */}
        <Fade in={isVisible} timeout={2000}>
          <Box
            component="ul"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              listStyle: 'none',
              p: 0,
              m: 0,
              gap: 2,
              maxWidth: '100%',
            }}
          >
            {allSkills.map((skill) => {
              const categoryInfo = categories.find(cat => cat.id === skill.category);
              const isHighlighted = hoveredCategory === skill.category;
              const isDimmed = hoveredCategory && hoveredCategory !== skill.category;

              return (
                <ListItem key={skill.id}>
                  <Chip 
                    label={skill.label} 
                    sx={{ 
                      color: isHighlighted ? '#ffffff' : '#e8f5f5',
                      backgroundColor: isHighlighted 
                        ? `${categoryInfo.color}50` 
                        : 'rgba(0, 60, 60, 0.3)',
                      backdropFilter: 'blur(20px)',
                      border: isHighlighted 
                        ? `2px solid ${categoryInfo.color}` 
                        : '1px solid rgba(0, 60, 60, 0.5)',
                      borderRadius: 3,
                      padding: { xs: '10px 16px', sm: '12px 20px' },
                      fontWeight: isHighlighted ? 700 : 600,
                      fontSize: { xs: '0.85rem', sm: '0.95rem' },
                      fontFamily: 'Montserrat, sans-serif',
                      transition: 'all 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease, font-weight 0.3s ease',
                      boxShadow: isHighlighted 
                        ? `0 12px 30px ${categoryInfo.color}40` 
                        : '0 4px 15px rgba(0, 35, 35, 0.2)',
                      opacity: isDimmed ? 0.4 : 1,
                      '&:hover': {
                        backgroundColor: `${categoryInfo.color}40`,
                        borderColor: categoryInfo.color,
                        boxShadow: `0 15px 35px ${categoryInfo.color}50`,
                        color: '#ffffff',
                      }
                    }} 
                  />
                </ListItem>
              );
            })}
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}