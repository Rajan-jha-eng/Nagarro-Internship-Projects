import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart, Star } from '@material-ui/icons';
import accounting from 'accounting';
import { actionTypes } from '../Reducer';
import {useStateValue} from "../StateProvider";




const useStyles = makeStyles((theme) => ({
  root: { 
    maxWidth: 345,
    
  },
  star: {
    color: '#ffc300'
  },
  action: {
      marginTop: "1rem",
      paddingTop: '5rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    verticalAlign: 'middle',

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Product({product : {id, name, price, rating, image, productType, description}}) {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
  dispatch({
    type: actionTypes.ADD_TO_BASKET,
    item:{
      id,
      name,
      price,
      rating,
      image,
      productType,
      description
    }
  })
  }

  return (
    <Card className={classes.root}>
      <CardHeader

        action={
          <Typography
              classname={classes.action}
              variant='h5'
              color='textSecondary'
          >
              {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="In Stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={addToBasket}>
        <AddShoppingCart ></AddShoppingCart>
        </IconButton>
        {Array(rating) 
        .fill()
        .map((_, i) => (
           <Star className={classes.star}></Star>
        ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
