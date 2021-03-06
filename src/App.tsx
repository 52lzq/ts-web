import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
// import { Header, Paper } from './components';
function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <Link color='inherit' href='https://material-ui.com/'>
        Material-UI.
      </Link>
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth='sm'>
      {/* <Header /> */}
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Create Reactsfsf 2App v4-beta example with TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
      <div>232332</div>
    </Container>
  );
}
