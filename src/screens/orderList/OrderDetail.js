/*
주문내역 -> 주문상세 페이지
*/
import React from 'react';
import { Box, Card, CardContent, Divider, Grid, Typography } from '@material-ui/core';

function OrderDetail(){
  return (
    <Card>
        <CardContent>
          <Typography
            align="left"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            강릉 대관령 휴게소
          </Typography>

          <Box p={2}>
            <Grid container justify="space-between" spacing={2}>
              <Grid container alignItems="center" spacing={5} xs={9}>
                <Grid item>
                  <Typography
                    color="textSecondary"
                    display="inline"
                    variant="body2"
                  >
                    치즈라면
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    color="textSecondary"
                    display="inline"
                    variant="body2"
                  >
                    1개
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  color="textSecondary"
                  display="inline"
                  variant="body2"
                >
                  4000 원
                </Typography>
              </Grid>
              <Grid container alignItems="center" spacing={5} xs={9}>
                <Grid item>
                  <Typography
                    color="textSecondary"
                    display="inline"
                    variant="body2"
                  >
                    김치라면
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    color="textSecondary"
                    display="inline"
                    variant="body2"
                  >
                    1개
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  color="textSecondary"
                  display="inline"
                  variant="body2"
                >
                  4000 원
                </Typography>
              </Grid>
              <Grid item spacing={5}>
                <Typography color="textSecondary" variant="body2">
                  주문일시: 2020년 8월 2일 18:00
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  주문번호: 00061
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </CardContent>
      </Card>
  )
}
export default OrderDetail;