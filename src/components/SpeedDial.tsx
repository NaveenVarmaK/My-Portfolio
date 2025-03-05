import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
// import DescriptionIcon from '@mui/icons-material/Description'; // Using Description icon for CV

const actions = [
  { icon: <GitHubIcon />, name: 'GitHub', link: 'https://github.com/NaveenVarmaK' },
  { icon: <LinkedInIcon />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/knaveenv' },
  { icon: <EmailIcon />, name: 'Email', link: 'mailto:naveen.varma.kalidindi@etu.univ-st-etienne.fr' },
  // { icon: <DescriptionIcon />, name: 'Download CV', link: 'https://yourwebsite.com/yourcv.pdf' }
];

export default function ContactSpeedDial() {
  return (
    <Box sx={{ position: 'fixed', bottom: 30, right: 16 }}>
      <SpeedDial ariaLabel="Contact SpeedDial" icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => window.open(action.link, '_blank')}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
