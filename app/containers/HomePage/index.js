/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Card } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 275,
    margin: 5
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function HomePage() {
  const classes = useStyles();
  return (
<div>
    <Card className={classes.root} raised={true}>
    <b>Card 1</b>
    </Card>
        <Card className={classes.root} raised={true}>
        <b>Card 2</b>
        </Card>
            <Card className={classes.root} raised={true}>
            <b>Card 3</b>
            </Card>
            </div>
  );
}
