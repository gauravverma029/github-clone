import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { formattedDate } from "../../utils/core";

const ListCard = ({ content }) => {
  const {
    id,
    name,
    url,
    description,
    created_at,
    language,
    stargazers_count,
  } = content;

  const memoryStar = localStorage.getItem(id);

  const [startCount, setStarCount] = useState(memoryStar || stargazers_count);

  const addStarRating = () => {
    const incrementedStarCount = parseInt(startCount) + 1;
    localStorage.setItem(id, incrementedStarCount);
    setStarCount(incrementedStarCount);
  };

  const formattedCreatedDate = formattedDate(new Date(created_at));

  return (
    <Col xs lg="3" className="my-2">
      <Card className="text-center">
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{language}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <Button
              variant={memoryStar ? "outline-secondary" : "outline-primary"}
              size="sm"
              onClick={addStarRating}
              disabled={memoryStar}
            >
              <div>
                <span>Star : </span> <span>{startCount}</span>
              </div>
            </Button>
          </Card.Text>
          <Button variant="primary" size="sm" href={url} target="_blank">
            Repo Link
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Created At :- {formattedCreatedDate}
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ListCard;
