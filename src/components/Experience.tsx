import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'expand',
})<ExpandMoreProps>(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default function ExpandableCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [extraExpanded, setExtraExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExtraExpandClick = () => {
    setExtraExpanded(!extraExpanded);
  };

  return (
    <Box sx={{ position: 'relative', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', p:0 , mt:25 }}>
      {/* Background Large Text */}
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: { xs: '40rem', md: '20rem' }, // Responsive font size
          fontWeight: 900,
          color: 'rgba(0, 0, 0, 0.1)', // Transparent text
          zIndex: -1,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        EXPERIENCE
      </Typography>

      {/* Foreground Card */}
      <Card sx={{ minWidth: 'auto', maxWidth: 'auto',  mt: 0 }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            École nationale supérieure des mines de Saint-Étienne
          </Typography>
          <Typography variant="h5" component="div">
            Web Application Developer
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 2.0 }}>adjective</Typography>
          <Typography variant="body2">
            Developed a Python application to generate waste collection and treatment scenarios, evaluating environmental performance for districts in Saint-Étienne.
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>

          <Button onClick={handleExtraExpandClick} variant="outlined" size="small">
            More Details
          </Button>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              The word "benevolent" comes from the Latin "bene" (well) and "volens" (wishing), meaning "wishing well for others."
            </Typography>
          </CardContent>
        </Collapse>

        <Collapse in={extraExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              This second section expands separately from the first one and is controlled by the "More Details" button.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}
