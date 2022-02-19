import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { Box } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

function App(props) {
  const [animationClass, setAnimationClass] = useState('test')


  return <ThemeProvider theme={theme}>
    <Box className={"animated-gradient"} sx={{width: "100wh", height: "90vh"}}>
    <Grid container spacing={3} sx={{p: 2}}>
      <Grid item md={9} xs={6}/>
      <Grid item md={1} xs={2}>
      <Button fullWidth color="inherit" variant="text">Hello</Button>
      </Grid>
      <Grid item md={1} xs={2}>
      <Button fullWidth color="inherit" variant="text">Hello</Button>
      </Grid>
      <Grid item md={1} xs={2}>
      <Button fullWidth color="inherit" variant="text">Hello</Button>
      </Grid>
    </Grid>
    <Grid container spacing={3} sx={{p: 5}}>
      <Grid item xs={12} sx={{height: "20vh"}}></Grid>
      <Grid item>
      <Typography variant="h1">Drew's site!</Typography>
      </Grid>
    </Grid>
    </Box>
    </ThemeProvider>;
}

export default App;
