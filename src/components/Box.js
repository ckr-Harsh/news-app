import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as Mat from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
  root: {
    width: 350,
    marginRight: 15,
    [theme.breakpoints.up('xs')]:{
      width:400,
    },
    [theme.breakpoints.up('sm')]:{
      width:400,
    },
    [theme.breakpoints.up('md')]:{
      width:340,
    }
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

 function Box(props) {
  const classes = useStyles();

  return (
    <div container className='grid'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="IMAGE NOT FOUND"
          height="200"
          image={props.urlToImage}
          title='News'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button color={'primary'} fullWidth className={classes.cta} href={props.url} target="_blank" rel="noreferrer">
          Find Out More <Mat.ChevronRightRounded />
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default Box;