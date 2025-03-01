import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Education() {
  const [extraExpanded1, setExtraExpanded1] = React.useState(false);
  const [extraExpanded3, setExtraExpanded3] = React.useState(false);
  const [extraExpanded4, setExtraExpanded4] = React.useState(false);  
  const [extraExpanded5, setExtraExpanded5] = React.useState(false);
  const [extraExpanded6, setExtraExpanded6] = React.useState(false);

  //Semantic Web Project Card 2
  const [extraExpanded2, setExtraExpanded2] = React.useState(false);
  const [extraExpanded7, setExtraExpanded7] = React.useState(false);
  const [extraExpanded8, setExtraExpanded8] = React.useState(false);

  // VRP Project Card 3
  const [extraExpanded9, setExtraExpanded9] = React.useState(false);
  const [extraExpanded10, setExtraExpanded10] = React.useState(false);
  const [extraExpanded11, setExtraExpanded11] = React.useState(false);

  // // My Portfolio Project Card 4
  // const [extraExpanded12, setExtraExpanded12] = React.useState(false);
  // const [extraExpanded13, setExtraExpanded13] = React.useState(false);
  // const [extraExpanded14, setExtraExpanded14] = React.useState(false);
  // const [extraExpanded15, setExtraExpanded15] = React.useState(false);




  const handleExtraExpandClick1 = () => {
    setExtraExpanded1(!extraExpanded1);
  };

 
  const handleExtraExpandClick3 = () => {
    setExtraExpanded3(!extraExpanded3);
  }
  const handleExtraExpandClick4 = () => {
    setExtraExpanded4(!extraExpanded4);
  }
  const handleExtraExpandClick5 = () => {
    setExtraExpanded5(!extraExpanded5);
  }
  const handleExtraExpandClick6 = () => {
    setExtraExpanded6(!extraExpanded6);
  }


  //Semantic Web Project Card 2
  const handleExtraExpandClick2 = () => {
    setExtraExpanded2(!extraExpanded2);
  };
  const handleExtraExpandClick7 = () => {
    setExtraExpanded7(!extraExpanded7);
  };
  const handleExtraExpandClick8 = () => {
    setExtraExpanded8(!extraExpanded8);
  };

  // VRP Project Card 3
  const handleExtraExpandClick9 = () => {
    setExtraExpanded9(!extraExpanded9);
  };
  const handleExtraExpandClick10 = () => {
    setExtraExpanded10(!extraExpanded10);
  };
  const handleExtraExpandClick11 = () => {
    setExtraExpanded11(!extraExpanded11);
  };

  // My Portfolio Project Card 4
  // const handleExtraExpandClick12 = () => {
  //   setExtraExpanded12(!extraExpanded12);
  // };
  // const handleExtraExpandClick13 = () => {
  //   setExtraExpanded13(!extraExpanded13);
  // };
  // const handleExtraExpandClick14 = () => {
  //   setExtraExpanded14(!extraExpanded14);
  // };
  // const handleExtraExpandClick15 = () => {
  //   setExtraExpanded15(!extraExpanded15);
  // };


  const handleGitHubClickAWS = () => {
    window.open('https://github.com/NaveenVarmaK/AWS-IoT-Traffic-Processing.git', '_blank');
  };
  const handleGitHubClickSW = () => {
    window.open('https://github.com/anjola-adeuyi/bulbapedia-knowledge-graph.git', '_blank');
  };
  // const handleGitHubClickMyPortfolio = () => {
  //   window.open(' ', '_blank');
  // };

  return (
    <Box
      sx={{
        position: 'relative',
        minWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0,
        mt: 15,
      }}
    >
      {/* Background Large Text */}
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: { xs: '60rem', md: '30rem' },
          fontWeight: 900,
          color: '#505081',
          zIndex: -1,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Projects
      </Typography>

      {/* Container for Cards */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Allow cards to wrap to the next line
          gap: 4, // Adds space between the cards
          justifyContent: 'center',
          alignItems: 'flex-start',
          mt: 5,
          width: '100%', // Ensure the container takes full width
        }}
      >
        {/* First Card */}
        <Card sx={{ minWidth: 300, maxWidth: 500, mt: 5, backgroundColor: 'rgba(80, 80, 129, 0.1)', backdropFilter: 'blur(30px)', boxShadow: 3, borderRadius: 2, padding: 3, color: 'white', }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <Button
              startIcon={<GitHubIcon />}
              variant="outlined"
              size="small"
              onClick={handleGitHubClickAWS}
              sx={{ minWidth: 'auto', padding: '8px', backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              GitHub
            </Button>
          </Box>

          <CardContent>
            <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold', color: 'white' }}>
              Development Project
            </Typography>
            <Typography variant="h4" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
              AWS-IoT-Traffic-Processing
            </Typography>
            <br />
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
              This project is designed to automate the process of uploading, summarizing, and consolidating IoT traffic data collected from geographically distributed IoT devices. The enterprise aims to analyze this traffic data to detect anomalies and bottlenecks, which will help guide infrastructure investment decisions. Instead of investing in permanent infrastructure, the enterprise uses a Public Cloud infrastructure that covers all geographical locations where the enterprise has a branch.
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Button
              onClick={handleExtraExpandClick1}
              variant="outlined"
              size="small"
              sx={{ ml: 0, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              S3
            </Button>
            <Button
              onClick={handleExtraExpandClick3}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              Lambda
            </Button>
            <Button
              onClick={handleExtraExpandClick4}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              SNS
            </Button>
            <Button
              onClick={handleExtraExpandClick5}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              SQS
            </Button>
            <Button
              onClick={handleExtraExpandClick6}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              EC2
            </Button>
          </CardActions>

          {/* Collapsible Sections */}
          <Collapse in={extraExpanded1} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
             - Used for storing and managing IoT traffic data files. <br />
- Files are uploaded via UploadS3.java to a designated S3 bucket (upload-client-cps2). <br />
- Summarized data is stored in a separate S3 bucket (summarizedtables-cps2).
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded3} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - SummarizeWorker Lambda Function: Processes uploaded files, summarizes IoT traffic data, and saves the output to an S3 bucket.<br />
                - ConsolidatorWorker Lambda Function: Applies statistical operations (e.g., standard deviation, average) on the summarized data and sends results to an SNS topic.<br />
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded4} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - ExportClientQueue: Stores metadata (bucket name and file name) for retrieving processed files.<br />
                - Planned enhancement: Implementing SQS between Lambda functions to improve reliability and handle busy processing queues.<br />
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded5} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - ConsolidatorWorker-SNS Topic: Sends notifications when processed files are ready for download.<br />
                - Allows users to subscribe via email or other methods for real-time updates on data processing status.<br />
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded6} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - Deployed the project on a t2.micro EC2 instance to evaluate performance and resource consumption<br />
                - Compared EC2 and AWS Lambda in terms of flexibility, resource usage, and cost-effectiveness for running the IoT data processing pipeline.<br />
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        {/* Second Card Semantic Web */}
       
        <Card sx={{ minWidth: 300, maxWidth: 500, mt: 5, backgroundColor: 'rgba(80, 80, 129, 0.1)', backdropFilter: 'blur(30px)', boxShadow: 3, borderRadius: 2, padding: 3, color: 'white', }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <Button
              startIcon={<GitHubIcon />}
              variant="outlined"
              size="small"
              onClick={handleGitHubClickSW}
              sx={{ minWidth: 'auto', padding: '8px', backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              GitHub
            </Button>
          </Box>

          <CardContent>
            <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold', color: 'white' }}>
              Development Project
            </Typography>
            <Typography variant="h4" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
            Bulbapedia Knowledge Graph
            </Typography>
            <br />
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            Extracted Pokémon data from Bulbapedia and transformed it into RDF triples for structured knowledge representation. Designed an ontology and validated data using SHACL to ensure consistency in attributes and relationships. Developed a SPARQL endpoint with inference capabilities for querying and integrating linked data.
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Button
              onClick={handleExtraExpandClick2}
              variant="outlined"
              size="small"
              sx={{ ml: 0, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              RDF
            </Button>
            <Button
              onClick={handleExtraExpandClick7}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              SHACL
            </Button>
            <Button
              onClick={handleExtraExpandClick8}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              SPARQL
            </Button>
          </CardActions>

          {/* Collapsible Sections */}
          <Collapse in={extraExpanded2} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - Converted Pokémon data from Bulbapedia into RDF triples for structured representation.<br />
                - Ensured alignment with schema.org and linked data principles.<br />
                - Implemented entity linking with DBpedia and Wikidata for semantic interoperability.<br />
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded7} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - Designed SHACL shapes to validate the knowledge graph structure.<br />
                - Enforced constraints on Pokémon attributes (height, weight, types).<br />
                - Implemented type hierarchy validation and property cardinality rules for data consistency.<br />
                - Used Apache Jena SHACL for RDF quality checks.
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded8} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - Developed a SPARQL endpoint for querying Pokémon data.<br />
                - Implemented inference support, including subclass hierarchy and transitive properties.<br />
                - Created predefined SPARQL queries for retrieving Pokémon details, evolution chains, and type relationships.<br />
                - Provided machine-readable and human-readable linked data views.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        {/* Vehicle Routing Problem Card */}
        <Card sx={{ minWidth: 300, maxWidth: 500, mt: 5, backgroundColor: 'rgba(80, 80, 129, 0.1)', backdropFilter: 'blur(30px)', boxShadow: 3, borderRadius: 2, padding: 3, color: 'white', }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          </Box>

          <CardContent>
            <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold', color: 'white' }}>
              Research Project
            </Typography>
            <Typography variant="h4" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
              Vehicle Routing Problem with Uncertain Demand
            </Typography>
            <br />
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            Investigating optimization strategies for vehicle routing under stochastic and uncertain demand conditions.
            Developing and testing probabilistic models to improve decision-making in logistics and supply chain management.
            Aiming to minimize overall transportation cost while maintaining service reliability in dynamic environments.
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Button
              onClick={handleExtraExpandClick9}
              variant="outlined"
              size="small"
              sx={{ ml: 0, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              XG Boost
            </Button>
            <Button
              onClick={handleExtraExpandClick10}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              BNN
            </Button>
            <Button
              onClick={handleExtraExpandClick11}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              ALNS
            </Button>
          </CardActions>

          {/* Collapsible Sections */}
          <Collapse in={extraExpanded9} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - Model Selection: XGBoost is chosen for its effectiveness in handling structured data and its ability to capture complex patterns in demand.<br />
                - Customized Loss Function: An asymmetric loss function is designed to penalize underestimations more heavily than overestimations, reflecting the cost imbalances in routing.<br />
                - Model Training: The model is trained using historical demand data and validated using cross-validation techniques. Performance is evaluated using metrics such as Mean Absolute Error (MAE), Mean Squared Error (MSE), and a custom penalty metric aligned with routing costs.<br />
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded10} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - Uncertainty Quantification: Bayesian Neural Networks are employed to provide predictions with uncertainty intervals. This helps in capturing the variability in demand and provides a probabilistic estimate of future demands.<br />
                - Probabilistic Methods: The Bayesian approach allows for the estimation of demand uncertainty, which is crucial for robust optimization and dynamic re-routing.<br />
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded11} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph sx={{ color: 'white', fontWeight: 'bold' }}>
                - Robust Optimization Model: ALNS is used to iteratively improve routing solutions by incorporating uncertainty intervals during feasibility checks.<br />
                - Destroy and Repair Operators: ALNS employs destroy operators to remove a subset of routes or collection points and repair operators to reinsert collection points using predicted demand and distance metrics.<br />
                - Stochastic Optimization: Multiple demand scenarios are simulated using predicted uncertainty intervals, and routes are optimized for worst-case scenarios to ensure robustness.<br />
                - Dynamic Re-Routing: Routes are dynamically adapted based on real-time data, updating routes as actual demand values become available during operations.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        {/* Add fourth cards here */}

        {/* <Card sx={{ minWidth: 300, maxWidth: 500, mt: 5, backgroundColor: 'rgba(80, 80, 129, 0.1)', backdropFilter: 'blur(30px)', boxShadow: 3, borderRadius: 2, padding: 3, color: 'white', }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <Button
              startIcon={<GitHubIcon />}
              variant="outlined"
              size="small"
              onClick={handleGitHubClickMyPortfolio}
              sx={{ minWidth: 'auto', padding: '8px', backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              GitHub
            </Button>
          </Box>

          <CardContent>
            <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold', color: 'white' }}>
              Development Project
            </Typography>
            <Typography variant="h4" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
              AWS-IoT-Traffic-Processing
            </Typography>
            <br />
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
              This project is designed to automate the process of uploading, summarizing, and consolidating IoT traffic data collected from geographically distributed IoT devices. The enterprise aims to analyze this traffic data to detect anomalies and bottlenecks, which will help guide infrastructure investment decisions. Instead of investing in permanent infrastructure, the enterprise uses a Public Cloud infrastructure that covers all geographical locations where the enterprise has a branch.
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Button
              onClick={handleExtraExpandClick12}
              variant="outlined"
              size="small"
              sx={{ ml: 0, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              React
            </Button>
            <Button
              onClick={handleExtraExpandClick13}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              Material-UI
            </Button>
            <Button
              onClick={handleExtraExpandClick14}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              TypeScript
            </Button>
            <Button
              onClick={handleExtraExpandClick15}
              variant="outlined"
              size="small"
              sx={{ ml: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
              SemanticWeb
            </Button>
          </CardActions>

          {/* Collapsible Sections */}
          {/* <Collapse in={extraExpanded12} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                - Advanced Algorithms<br />
                - Machine Learning<br />
                - Distributed Systems<br />
                - Web Development
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded13} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                - Python<br />
                - Node.js<br />
                - Java<br />
                - C++
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded14} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                - AWS Lambda<br />
                - AWS S3<br />
                - AWS SNS<br />
                - AWS SQS
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={extraExpanded15} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                - AWS Lambda<br />
                - AWS S3<br />
                - AWS SNS<br />
                - AWS SQS
              </Typography>
            </CardContent>
          </Collapse>
        </Card> */}
      </Box>
    </Box>
  );
}