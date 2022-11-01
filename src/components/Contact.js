import {
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const styles = (theme) => ({
  multilineColor: {
    color: "orange",
  },
});
export default function Contact() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <Grid
      container
      pb={5}
      style={{
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h4"
          pt={15}
          align="center"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Get in touch
        </Typography>
      </Grid>
      <Grid item xs={12} pb={10} style={{ color: "white" }}>
        <Typography variant="h5" align="center">
          Want to find out how can solve problems? Let's talk.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} pl={{ xs: 2, sm: 30 }} pr={{ xs: 2 }}>
        <Card>
          <Grid
            pt={{ xs: 2, sm: 5 }}
            pl={{ xs: 2, sm: 5 }}
            pr={{ xs: 2, sm: 5 }}
            item
            sm={12}
          >
            <TextField
              fullWidth
              required
              id="standard-required"
              label="Email Address"
              defaultValue="youremail@gmail.com"
              variant="standard"
            />
          </Grid>
          <Grid
            pt={{ xs: 2, sm: 5 }}
            pl={{ xs: 2, sm: 5 }}
            pr={{ xs: 2, sm: 5 }}
            item
            sm={12}
          >
            <TextField
              fullWidth
              required
              id="standard-required"
              label="First Name"
              defaultValue="Long"
              variant="standard"
            />
          </Grid>
          <Grid
            pt={{ xs: 2, sm: 5 }}
            pl={{ xs: 2, sm: 5 }}
            pr={{ xs: 2, sm: 5 }}
            item
            sm={12}
          >
            <TextField
              fullWidth
              required
              id="standard-required"
              label="Last Name"
              defaultValue="Nguyen"
              variant="standard"
            />
          </Grid>
          <Grid
            pt={{ xs: 2, sm: 5 }}
            pl={{ xs: 2, sm: 5 }}
            pr={{ xs: 2, sm: 5 }}
            item
            sm={12}
          >
            <TextField
              fullWidth
              id="standard-select-currency"
              select
              label="Select"
              value={currency}
              onChange={handleChange}
              helperText="Please select your currency"
              variant="standard"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            pt={{ xs: 2, sm: 5 }}
            pl={{ xs: 2, sm: 5 }}
            pr={{ xs: 2, sm: 5 }}
            pb={{ xs: 2, sm: 5 }}
            item
            sm={12}
          >
            <TextField
              fullWidth
              id="standard-textarea"
              label="Description"
              placeholder="Description"
              multiline
              variant="standard"
            />
          </Grid>
          <Grid
            pt={{ xs: 2, sm: 5 }}
            pl={{ xs: 2, sm: 5 }}
            pr={{ xs: 2, sm: 5 }}
            pb={{ xs: 2, sm: 5 }}
            item
            sm={12}
          >
            <Button variant="contained">Send</Button>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} pt={{ xs: 5 }} pl={{ xs: 5 }}>
        <Grid item xs={12} pl={{ sm: 5 }}>
          <Typography
            variant="h5"
            align="left"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Other ways to connect
          </Typography>
          <Typography variant="h6" align="left" style={{ color: "white" }}>
            Call, email, send me a post card - whatever works for you, I'll be
            here.
          </Typography>
        </Grid>
        <Grid item xs={12} pl={{ sm: 5 }} pt={8}>
          <Grid item xs={12} pl={2} pb={2} pr={12}>
            <Button
              size="large"
              variant="text"
              startIcon={<QuestionAnswerIcon />}
              style={{ color: "white" }}
            >
              Help center
            </Button>
            <hr />
          </Grid>
          <Grid item xs={12} pl={2} pb={2} pr={12}>
            <Button
              size="large"
              variant="text"
              startIcon={<SupportAgentIcon />}
              style={{ color: "white" }}
            >
              Get Support Now
            </Button>
            <hr />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
