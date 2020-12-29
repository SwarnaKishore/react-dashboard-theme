import { Button } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class Dashboard extends React.Component {
    render() {
      return (
        <div>
          <Button variant="contained" color="primary">Dashboard</Button>
          <Copyright />
        </div>
      );
    }
}

export default Dashboard;
