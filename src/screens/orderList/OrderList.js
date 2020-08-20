/*
주문내역 페이지, 주문번호 팝업, 주문상세내역 팝업
*/
import React from 'react'
import { Box, Card, CardContent, Divider, Grid, Button, Typography, Link, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function OrderList() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Typography
            align="left"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            8/15 (토)
            </Typography>
          <Typography align="left" color="textPrimary" variant="body1">
            강릉 대관령 휴게소
            </Typography>
        </CardContent>
        <Box flexGrow={1} />
        <Divider />
        <Box p={2}>
          <Grid container justify="center" spacing={10}>
            <Grid item>
              <Button color="primary" variant="outlined" onClick={handleClickOpen}>
                주문번호
                </Button>
            </Grid>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description" 
              fullWidth={true}
            >
          
              <DialogContent>
                <DialogContentText id="alert-dialog-description" >
                  고객님의 주문번호는
                </DialogContentText>
              </DialogContent>
              <DialogTitle id="alert-dialog-title">{"000145"}번 입니다</DialogTitle>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  X
                </Button>
              </DialogActions>
            </Dialog>

            <Grid item>
              <Button color="primary" variant="outlined" onClick={handleClickOpen2}>
                주문상세
              </Button>
            </Grid>
            <Dialog
              open={open2}
              onClose={handleClose2}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              fullWidth={true}
            >
              <DialogTitle id="alert-dialog-title">{"강릉 대관령 휴게소"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description" >
                  {"치즈라면"} {"1"}개   {"4000"}원
                </DialogContentText>
                <DialogContentText id="alert-dialog-description" >
                  {"김치라면"} {"1"}개   {"4000"}원
                </DialogContentText>
                <DialogContentText id="alert-dialog-description" >
                  주문일시 : {"2020"}년 {"8"}월 {"20"}일
                </DialogContentText>
                <DialogContentText id="alert-dialog-description" >
                  주문번호 : {"00061"}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose2} color="primary">
                  X
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Box>
      </Card>
    </div>
  );
}
