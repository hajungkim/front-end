/*
주문하기(메뉴) 페이지 탭
*/

import React, { Component } from 'react';
import {  Typography, List, ListItem, ListItemText, ListSubheader,
  Paper, makeStyles } from '@material-ui/core';

  const item = [
    {
      id: 1,
      primary: '뚝배기 불고기',
      secondary: "8000원",
    },
    {
      id: 2,
      primary: '뚝배기 불고기',
      secondary: "8000원",
    },
    {
      id: 3,
      primary: '뚝배기 불고기',
      secondary: "8000원",
    },
    {
      id: 4,
      primary: '뚝배기 불고기',
      secondary: "8000원",
    },
    {
      id: 5,
      primary: '뚝배기 불고기',
      secondary: "8000원",
    },
    {
      id: 6,
      primary: '뚝배기 불고기',
      secondary: "8000원",
    },
    {
      id: 7,
      primary: '뚝배기 불고기',
      secondary: "8000원",
    },
    {
      id: 8,
      primary: '뚝배기 불고기',
      secondary: "8000원",
    },
  ];
  
  const useStyles = makeStyles((theme) => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    
  }));

export default function Order() {
  const classes = useStyles();
      return (
        <div>
          <Paper square className={classes.paper}>
            <Typography className={classes.text} variant="h5" gutterBottom>
              강릉 대관령 휴게소
            </Typography>
            <List className={classes.list}>
              {item.map(({ id, primary, secondary, person }) => (
                <React.Fragment key={id}>
                  {id === 1 && <ListSubheader className={classes.subheader}>한식</ListSubheader>}
                  {id === 3 && <ListSubheader className={classes.subheader}>명동칼국수</ListSubheader>}
                  <ListItem button>
                    <ListItemText primary={primary} secondary={secondary} />
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </div>
      );
  }