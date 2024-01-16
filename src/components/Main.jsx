import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import fetchAxios from "../redux/reducers/fetchAxios";

function Main() {
  const dispatch = useDispatch();
  const datoPrimaFetch = useSelector((state) => state.fetch.containerFetchAxios);
  console.log(datoPrimaFetch);
  useEffect(() => {
    dispatch(fetchAxios());
  }, []);
  return (
    <>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Main;
