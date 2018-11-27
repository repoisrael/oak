import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import LockIcon from '@material-ui/icons/Lock'
import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { GitHubIcon } from 'rmw-shell/lib/components/Icons'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import { Container, Row, Col } from 'reactstrap';
import Header from '../../components/Header'

import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform:rotate(0deg
  }
  100% {
    transform:rotate(360deg);
  }
`

export const LogoWrapper = styled.div`
  animation: ${spin} infinite 20s linear;
`


const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column'
  },
  root: {
    flexGrow: 1,
    flex: '1 0 100%'
    // height: '100%',
    // overflow: 'hidden'
  },
  hero: {
    height: '100%',
    // minHeight: '80vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.type === 'light' ? theme.palette.primary.dark : theme.palette.primary.main
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    letterSpacing: '.7rem',
    textIndent: '.7rem',
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 24,
      letterSpacing: '.1em',
      textIndent: '.1rem'
    },
    color:'orange',
    whiteSpace: 'nowrap'
  },
  headline: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit,
    maxWidth: 600,
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      fontSize: 18
    }
  },
  content: {
    height: '100%',
    backgroundColor:'#fff',
    paddingTop: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit
    }
  },
  button: {
    marginTop: theme.spacing.unit * 3
  },
  logo: {
    // position:'relative',
    // display:'none',
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
    width: '100%',
    height: '20vw',
    maxHeight: 250,
    // animation: 'spin infinite 20s linear',
    // left:'50%',
    // height: '100%',
    textAlign:'center',
    // position:'relative',
    transform:'rotate(35deg)',
  },
  steps: {
    maxWidth: theme.spacing.unit * 130,
    margin: 'auto'
  },
  step: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  },
  stepIcon: {
    marginBottom: theme.spacing.unit
  },
  markdownElement: {},
  cardsContent: {
    padding: 15,
    direction: 'rtl',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: 0,
      paddingTop: 15
    }

  },
  card: {
    minWidth: 275,
    maxWidth: 350,
    margin: 15,
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: 0,
      marginTop: 7
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardTitle: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

})

class LandingPage extends Component {


  isAuthorised = () => {
    try {
      const key = Object.keys(localStorage).find(e => e.match(/persist:root/))
      const data = JSON.parse(localStorage.getItem(key))
      const auth = JSON.parse(data.auth)

      return auth && auth.isAuthorised

    } catch (ex) {
      return false
    }
  }

  componentDidMount() {y
    const { history } = this.props

    if (this.isAuthorised()) {
      history.push('/signin')
    }
  }


  render() {
    const { classes, history, theme } = this.props

    return (
      <div className={classes.main}>
        <Helmet>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="apple-mobile-web-app-status-bar-style" content={theme.palette.primary.main} />
          <meta name="msapplication-navbutton-color" content={theme.palette.primary.main} />
          <title>OAK STAR MEDIA</title>
        </Helmet>
        <AppBar position='static'>
          <Toolbar disableGutters={false}>
            <div style={{ flex: 1 }} />

           <Tooltip id="tooltip-icon1" title="צור קשר">
              <IconButton
                name='about'
                aria-label='צור קשר'
                color='inherit' 
                onClick={() => { history.push('/contact') }}
                rel='noopener'
              >
              צור קשר
              </IconButton>
            </Tooltip>


           <Tooltip id="tooltip-icon2" title="צור קשר">
              <IconButton
                name='about'
                aria-label='צור קשר'
                color='inherit'
                onClick={() => { history.push('/contact') }}
                rel='noopener'
              >
              צור קשר
              </IconButton>
            </Tooltip>

            
           <Tooltip id="tooltip-icon3" title="צור קשר">
              <IconButton
                name='about'
                aria-label='צור קשר'
                color='inherit'
                onClick={() => { history.push('/contact') }}
                rel='noopener'
              >
              צור קשר
              </IconButton>
            </Tooltip>

            
           <Tooltip id="tooltip-icon4" title="צור קשר">
              <IconButton
                name='about'
                aria-label='צור קשר'
                color='inherit'
                onClick={() => { history.push('/contact') }}
                rel='noopener'
              >
צוות
              </IconButton>
            </Tooltip>


            
           <Tooltip id="tooltip-icon5" title="צור קשר">
              <IconButton
                name='about'
                aria-label='צור קשר'
                color='inherit'
                onClick={() => { history.push('/contact') }}
                rel='noopener'
              >
תיק עבודות
              </IconButton>
            </Tooltip>


            
           <Tooltip id="tooltip-icon6" title="צור קשר">
              <IconButton
                name='about'
                aria-label='צור קשר'
                color='inherit'
                onClick={() => { history.push('/contact') }}
                rel='noopener'
              >
אודותנו
              </IconButton>
            </Tooltip>


            
           <Tooltip id="tooltip-icon7" title="צור קשר">
              <IconButton
                name='about'
                aria-label='צור קשר'
                color='inherit'
                onClick={() => { history.push('/contact') }}
                rel='noopener'
              >
ראשי
              </IconButton>
            </Tooltip>





<li class="menu-active" ><a href="#intro"></a></li>
            <li><a href="#about"></a></li>
            <li><a href="#services"></a></li>
            <li><a href="#portfolio"></a></li>
            <li><a href="#team"></a></li>
            <li class="menu-has-children"><a href="">רשת חברתית</a>
              <ul>
                <li><a href="#">טלפון</a></li>
                <li><a href="#">מייל</a></li>
                <li><a href="#">וואצאפ</a></li>
                <li><a href="#">פייסבוק</a></li>
              </ul>
            </li>
            <li><a href="#contact">צור קשר</a></li>

           <Tooltip id="tooltip-icon1" title="צור קשר">
              <IconButton
                name='about'
                aria-label='צור קשר'
                color='inherit'
                onClick={() => { history.push('/contact') }}
                rel='noopener'
              >
              צור קשר
              </IconButton>
            </Tooltip>

            <Tooltip id="tooltip-icon1" title="about">
              <IconButton
                name='about'
                aria-label='About'
                color='inherit'
                onClick={() => { history.push('/about') }}
                rel='noopener'
              >  אודות
              </IconButton>
            </Tooltip>


            <Tooltip id="tooltip-icon1" title="Sign in">
              <IconButton
                name='signin'
                aria-label='התחבר'
                color='inherit'
                onClick={() => { history.push('/signin') }}
                rel='noopener'
              >
                <LockIcon />
              </IconButton>
            </Tooltip>
            <Tooltip id="tooltip-icon2" title="GitHub repository">
              <IconButton
                name='github'
                aria-label='Open Github'
                color='inherit'
                href='https://github.com/repoisrael/react-most-wanted'
                target='_blank'
                rel='noopener'
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        <div className={classes.root}>


          <div className={classes.hero}>
            <div className={classes.content}>

        <Container fluid={true}>
          <Header />
        </Container>
          
              <div className={classes.text}>
                <Typography
                  variant='display2'
                  align='right'
                  component='h1'
                  color='inherit'
                  gutterBottom
                  className={classes.title}
                >
                  {'site 2 be'}
                </Typography>
                <Typography
                  variant='headline'
                  component='h2'
                  color='inherit'
                  gutterBottom
                  className={classes.headline}
                >
                  {'בניית אתרים ואפליקציות ווב'}
                </Typography>
                <Button
                  onClick={() => { history.push('/signin') }}
                  className={classes.button}
                  variant='outlined'
                  color='primary'
                >
                  {'תיק עבודות'}
                </Button>
              </div>

              <div className={classes.cardsContent}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h2">עיצוב גרפי אישי</Typography>
                    <br />
                    <Typography  >{`הלוגו שלך הוא הפנים של החברה שלך. חשוב להראות נוכחות וגם פשטות. אנו נעצב אצ הלוגו עבורך`}</Typography>
                    <br />
                    {/* <Typography className={classes.pos} color="textSecondary"> npx create-react-app test-app --scripts-version rmw-react-scripts   </Typography> */}
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => {
                      var win = window.open('https://github.com/TarikHuber/rmw-shell', '_blank')
                      win.focus();
                    }} >צפה בדוגמאות</Button>
                  </CardActions>
                </Card>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h2">מיתוג מוצרים וחנות אונליין</Typography>
                    <br />
                    <Typography  >{`תבנה בקלות את קטלוג המוצרים שלך בסליקה באשראי ובפייפאל`}</Typography>
                    <br />
                    <Typography className={classes.pos} color="textSecondary">
                      {`בין לקוחותינו`}        
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => {
                      var win = window.open('https://github.com/repo/react-most-wanted', '_blank')
                      win.focus();
                    }} >אודותנו</Button>
                  </CardActions>
                </Card>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h2">מי אנחנו?</Typography>
                    <Typography noWrap={false} color="textSecondary">
                      {`אני אלון כוכב - לכן השם 
                      Oak Star
                      אני בונה כל סוגי האתרים מאתר תדמית פשוט לאפליקציה שרצה על מערכת מורכבת`}
                      <br />
                      {` בונים אתרי חנות אונליין  - או אפליקציה וובית. `}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => { history.push('/signin') }} >לחצו להצעות מחיר</Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(LandingPage))
