import React from 'react'
import { Typography, Button ,AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar,Container } from '@mui/material'
 
import { makeStyles } from '@mui/styles'
import { PhotoCamera } from '@mui/icons-material'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}));

const App = () => {
  const classes = useStyles(); 

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera  />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              PhotoAlbum
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone This is a photo album and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen
            </Typography>
              <div>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant='contained' color='primary'>
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' color='primary'>
                      Secondary Action
                    </Button>
                  </Grid>
                </Grid>
              </div>

          </Container>
        </div>

        
      </main>
    </>
  )
}

export default App