import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import CodeIcon from "@mui/icons-material/Code";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export default function About() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
      rows: 2,
      cols: 2,
      featured: true,
    },
  ];
  return (
    <Grid
      container
      style={{
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Grid item xs={12} pt={{xs:10, sm:20}} pb={{xs:10, sm:12}} align="center" pl={{xs:1, sm:65}} pr={{xs:1, sm:65}}>
        <Typography variant="h4" style={{ color: "white", fontWeight: "bold" }}>
          We're on a mission to make building UIs more accessible
        </Typography>
        <Typography
          variant="h7"
          style={{ color: "white", fontWeight: "lighter" }}
        >
          Our mission is to empower anyone to build UIs, faster. We're reducing
          the entry barrier, making design skills accessible.
        </Typography>
      </Grid>
      <Grid container columnSpacing={8} pl={{xs:3, sm:8}} pt={{xs:2 ,sm:5}}  style={{backgroundColor:"#34495e"}}>
        <Grid item pt={2} pb={10} align="left">
          <Card sx={{ maxWidth: 345 }} className="card-dev">
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image="assets/images/dev.jpg"
                alt="green iguana"
                className="img-dev"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  H.Long
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Software Engineering Student
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  FPT University HCM
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography
            variant="h4"
            style={{ color: "white", fontWeight: "800" }}
          >
            LOREM ISPUM
          </Typography>
          <Typography variant="h5" style={{ color: "white" }} pt={2}>
            LOREM ISPUM
          </Typography>
          <Typography
            variant="h7"
            style={{ color: "white", fontWeight: "lighter" }}
            pt={2}
            pr={5}
            paragraph="true"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet.
          </Typography>
          <Typography variant="h6" style={{ color: "white" }} pt={1}>
            MY HOBBIES
            <hr />
          </Typography>
          <Grid container columnSpacing={{xs:2,sm:8}} pt={1}>
            <Grid item xs={6} sm={3}>
              <Button
                size="large"
                variant="text"
                startIcon={<CodeIcon />}
                style={{ color: "white" }}
              >
                Coding
              </Button>
              <Button
                size="large"
                variant="text"
                startIcon={<VideogameAssetIcon />}
                style={{ color: "white" }}
              >
                Playing game
              </Button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button
                size="large"
                variant="text"
                startIcon={<BeachAccessIcon />}
                style={{ color: "white" }}
              >
                Travelling
              </Button>
              <Button
                size="large"
                variant="text"
                startIcon={<MusicNoteIcon />}
                style={{ color: "white" }}
              >
                Music
              </Button>
            </Grid>
          </Grid>
          <Typography variant="h6" style={{ color: "white" }} pt={2}>
            SOCIAL LINKS
            <hr />
          </Typography>
          <Grid item xs={12} pt={2} pb={{xs:5}}>
            <Stack direction="row" spacing={4}>
              <FacebookIcon fontSize="large" style={{ color: "white" }} />
              <GitHubIcon fontSize="large" style={{ color: "white" }} />
              <TelegramIcon fontSize="large" style={{ color: "white" }} />
              <EmailIcon fontSize="large" style={{ color: "white" }} />
              <LinkedInIcon fontSize="large" style={{ color: "white" }} />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} align="center">
        <Typography
        pt={8}
            variant="h4"
            style={{ color: "white", fontWeight: "800" }}
          >
            THIS IS BUILDING BASE ON...
          </Typography>
        </Grid>
      <Grid item xs={6} pt={10} pb={8} align="center">
        <Typography variant="h4" style={{ color: "white", fontWeight: "bold" }}>
          REACTJS
        </Typography>
        <Typography
          variant="h7"
          style={{ color: "white", fontWeight: "lighter" }}
        >
          JavaScript library for building user interfaces
        </Typography>
      </Grid>
      <Grid item xs={6} pt={10} pb={8} align="center">
        <Typography variant="h4" style={{ color: "white", fontWeight: "bold" }}>
          MATERIAL UI
        </Typography>
        <Typography
          variant="h7"
          style={{ color: "white", fontWeight: "lighter" }}
        >
           CSS framework for building user interfaces
        </Typography>
      </Grid>
      <Grid container pb={5}>
        <Grid item xs={6} align="center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            width="90"
           
          />

        </Grid>
        <Grid item  xs={6} align="center">
          <img src="https://mui.com/static/logo.png" width="90" />

        </Grid>
      </Grid>
      </Grid>
    </Grid>
  );
}
