import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {  AppBar,  Toolbar,  Typography,  Card,  CardContent,  Grid, IconButton, Container, alpha, createTheme, ThemeProvider, Button, CardMedia} from "@mui/material";
import { blue } from '@mui/material/colors';
import { Url } from 'url';
import { Box } from '@mui/system';

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  avatar_url: string;
}

let getData = async () => {
  return await fetch(`https://api.github.com/users/vladdy-moses/repos`)
  .then(res => res.json())
  .then((res: GithubRepo[]) => {
      console.log(res);
      return res;
  })
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});


function App() {
  const [repoData, setData] = useState<GithubRepo[]>([]);
  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <Box sx={{ flexGrow: 1}}>
     <ThemeProvider theme={darkTheme}>
      <AppBar>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
        </IconButton>
          <Typography variant="h5" color="#e6f6fe">
            Репозитории пользователя vladdy_moses
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid sx={{ flexGrow: 1, marginTop:10, marginBottom: 5 }} container spacing={3} direction="row"
              justifyContent="center" alignItems="center">
        {repoData.map((cardPar) => (
          <Grid item xs={6} sx={{flexGrow: 1}}>
            <Card key={cardPar.id} sx={{height: 500, backgroundColor: "lightBlue"}}>
              <CardContent>
                <Typography variant="h5" component="div" textAlign="center"> {cardPar.name} </Typography>
                <Typography variant="h6" color="lightblack">
                  <pre>Описание:</pre>
                  {cardPar.description}
                </Typography>
                <Typography variant="h6" color="lightblack">
                  <pre>url:</pre>
                  {cardPar.html_url}
                </Typography>
                <Button size="medium" onClick={event => window.location.href=cardPar.html_url}>Перейти</Button>
                <CardMedia
                component="img"
                alt="logo"
                height="50"
                image= {cardPar.avatar_url}
              />
              </CardContent>
            </Card>
          </Grid>
        ))}
        </Grid>
      </Container>
      </ThemeProvider>
      <Box sx={{flexGrow: 1}}>
            <ThemeProvider theme={darkTheme}>
              <AppBar position="sticky" sx={{bottom: 0, top: 'auto'}} color="primary">
                <Toolbar>
            
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Github repo
                  </Typography>
                  
                </Toolbar>
              </AppBar>
              </ThemeProvider>
            </Box>
    </Box>
    );
}
export default App;