import React from "react";
import { Row } from "react-bootstrap";

import ListCard from "../ListCard";

const List = ({ gitRepoList, selectedStarredRepo }) => {
  return (
    <Row className="my-4">
      {gitRepoList.map((value) => {
        const { id } = value;
        const memoryStar = localStorage.getItem(id);
        if (selectedStarredRepo) {
          if (memoryStar) {
            return (
              <ListCard content={value} key={id} memoryStar={memoryStar} />
            );
          }
        } else {
          return <ListCard content={value} key={id} />;
        }
        return null;
      })}
    </Row>
  );
};

export default List;
