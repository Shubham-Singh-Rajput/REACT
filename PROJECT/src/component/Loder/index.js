import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './LoderStyle';
import { useSelector } from 'react-redux';


export default function Loder() {
  const classes = useStyles();
  const select=useSelector(({loder})=>loder)
  console.log(select)
  return (
    <div>
      <Backdrop className={classes.backdrop} open={select} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

