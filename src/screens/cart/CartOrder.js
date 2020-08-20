/*
장바구니 -> 주문하기 버튼
*/
import React from 'react'
import { Box, Button, Card, CardHeader, Divider, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      margin: 30,
      height: 600
    },
  });

const foodList = [
  {
    id: 1,
    foodName: "김치라면",
    foodQuantity: 1,
    foodCost: 4000,
  },
  {
    id: 2,
    foodName: "치즈라면",
    foodQuantity: 2,
    foodCost: 4000,
  },
  {
    id: 3,
    foodName: "해물라면",
    foodQuantity: 3,
    foodCost: 5000,
  },
  {
    id: 4,
    foodName: "김치라면",
    foodQuantity: 1,
    foodCost: 4000,
  },
  {
    id: 5,
    foodName: "치즈라면",
    foodQuantity: 2,
    foodCost: 4000,
  },
  {
    id: 6,
    foodName: "해물라면",
    foodQuantity: 3,
    foodCost: 5000,
  },
]; 

export default function CartOrder() {
    const classes = useStyles();
    
    return (
      <div className={classes.root}>
        <Card className="root">
          <CardHeader
            subtitle={`${foodList.length} in total`}
            title="강릉 대관령 휴게소"
          />
          <Divider />
          <List>
            {foodList.map((food, i) => (
              <ListItem key={food.id}>
                <ListItemText
                  primary={food.foodName}
                  secondary={`수량: ${food.foodQuantity}개`}
                />
                <ListItemText align="right" primary={`${food.foodCost}원`} />
              </ListItem>
            ))}
            <Divider />
            <ListItem>
              <ListItemText primary="결제금액" />
              <ListItemText align="right" primary="13,000원" />
            </ListItem>
          </List>
          <Box display="flex" justifyContent="center" p={2}>
            <Button color="primary" size="medium" variant="outlined">
              결제하기
          </Button>
          </Box>
        </Card>
      </div>
    )
}
