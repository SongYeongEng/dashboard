import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@material-ui/core';
import g1 from './Group -1.png';
import g2 from './Group -2.png';
import g3 from './Group -3.png';
import g4 from './Group 17.png';
import './mydashboard.css';

function Dashboard() {
  return (
    <div className="Dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent >
              <Typography variant="h4" gutterBottom>
                Total Traffic
              </Typography>
              <Typography variant="h8">123,456</Typography>
              <Avatar className='avatar'>
                <img src={g1} alt="My image" />
              </Avatar>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                NEW USERS
              </Typography>
              <Typography variant="h8">2,345</Typography>
              <Avatar className='avatar'>
                <img src={g2} alt="My image" />
              </Avatar>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Sales
              </Typography>
              <Typography variant="h8">924</Typography>
              <Avatar className='avatar'>
                <img src={g3} alt="My image" />
              </Avatar>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                PERFOMANCE
              </Typography>
              <Typography variant="h8">48.65%</Typography>
              <Avatar className='avatar'>
                <img src={g4} alt="My image" />
              </Avatar>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;