import * as React from 'react';
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home'); // Default to 'home'

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue); // Update the state
    scrollToSection(newValue); // Scroll to the corresponding section
  };

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed', // Fix the navbar at the bottom
        bottom: 30, // Position the navbar 30px from the bottom
        left: '50%', // Center the navbar horizontally
        transform: 'translateX(-50%)', // Adjust for exact centering
        width: 'auto', // Let the width be determined by content
        maxWidth: '100%', // Ensure it doesn't exceed the screen width
        bgcolor: 'background.paper', // Set background color
        boxShadow: 10, // Add shadow
        borderRadius: 2, // Add border radius
        zIndex: 1000, // Ensure the navbar is above other content
      }}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        sx={{ width: '100%', borderRadius: 10 }} // Ensure the BottomNavigation takes full width of its container
      >
        <BottomNavigationAction label="Home" value="home" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction label="Experience" value="experience" icon={<WorkHistoryRoundedIcon />} />
        <BottomNavigationAction label="Projects" value="projects" icon={<CodeRoundedIcon />} />
        <BottomNavigationAction label="Education" value="education" icon={<SchoolRoundedIcon />} />
        <BottomNavigationAction label="Skills" value="skills" icon={<StarRoundedIcon />} />
        <BottomNavigationAction label="Certifications" value="certifications" icon={<WorkspacePremiumRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );
}