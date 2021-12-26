import React from "react";
import "./App.css";
import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  Grid,
  InputBase,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const pages = ["Главная", "Каталог", "О нас"];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CosmTheme
            </Typography>
            <Box
              sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
              justifyContent="left"
              alignItems="flex-start"
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Поиск..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <Container></Container>
      <Grid
        sx={{ flexGrow: 1, marginTop: 10 }}
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={3} sx={{ flexGrow: 1 }}>
          <Card sx={{ maxWidth: 300, marginTop: 10 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://beautyrobot.ru/wp-content/uploads/2017/04/Pic17.1-min.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Тушь для бровей
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Выберите для себя наилучший образ с нашим ассортиментом лучших
                брендов тушей для бровей
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium">Перейти</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300, marginTop: 10 }}>
            <CardMedia
              component="img"
              alt="Тушь"
              height="140"
              image="https://img0.liveinternet.ru/images/attach/c/10/109/30/109030910_02695132.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Помада
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Мы предлагаем самые безопасные помады сотни оттенков, которые не
                были тестированы на животных.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium">Перейти</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300, marginTop: 10 }}>
            <CardMedia
              component="img"
              alt="Помада"
              height="140"
              image="https://www.insertmag.ca/wp-content/uploads/2014/12/Shimmering-Marsala-Cheek-Trio-.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Хайлайтер
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Давно искали нужный оттенок хайлатера? Мы все сделали за Вас и
                создали конструктор, попробуйте.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium">Перейти</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid>
        <Stack
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: 10 }}
        >
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar
            position="fixed"
            sx={{ bottom: 0, top: "auto" }}
            color="primary"
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                2021 All rights reserved
              </Typography>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>
    </Box>
  );
}

export default App;
