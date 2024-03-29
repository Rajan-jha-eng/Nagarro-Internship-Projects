import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Link as RouteLink, useHistory } from 'react-router-dom'
import { auth } from './firebase';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Rajan Jha'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme(
    {
        palette: {
            primary: {
              main: '#383B56',
            },
            secondary: {
              main: '#D90429',
            },
          },
    }
)

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    color: '#383B56',
    backgroundColor: 'transparent',
    border: '2px solid #383B56'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth)=>history.push('/')).catch(err=>alert(err.message))
  }

  return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <ThemeProvider theme={theme}>
            <form className={classes.form} noValidate>
            <TextField
                value={email}
                onChange={e=>setEmail(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                />
            <TextField
                value={password}
                onChange={e=>setPassword(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
            <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
                label="Remember me"
                />
            <Button
                onClick={signin}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <RouteLink to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                </RouteLink>
                </Grid>
            </Grid>
            </form>
        </ThemeProvider>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}