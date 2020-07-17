import React, { useState } from "react";
import { Form, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";

const Search = ({ languageList, handledByLanguages, handledByStarredRepo }) => {
  const [selectedLang, setSelectedLang] = useState("All");

  const handleLanguageFilter = (value) => {
    setSelectedLang(value);
    handledByLanguages({ value });
  };

  const handleChange = (evt) => {
    handledByStarredRepo(evt.target.checked);
  };

  return (
    <Row className="justify-content-md-center my-4">
      <Form inline>
        <Form.Label
          className="my-1 mr-2"
          htmlFor="inlineFormCustomSelectPref"
        ></Form.Label>
        <DropdownButton
          id="dropdown-basic-button"
          title={`Select Language : ${selectedLang}`}
        >
          <Dropdown.Item
            key={"all"}
            onClick={() => handleLanguageFilter("All")}
          >
            {"All"}
          </Dropdown.Item>
          {languageList &&
            languageList.map((value) => {
              return (
                <Dropdown.Item
                  key={value}
                  onClick={() => handleLanguageFilter(value)}
                >
                  {value}
                </Dropdown.Item>
              );
            })}
        </DropdownButton>
        <Col xs="auto" className="my-1">
          <Form.Check
            type="switch"
            id="custom-switch"
            label="starred repositories"
            onChange={handleChange}
          />
        </Col>
      </Form>
    </Row>
  );
};

export default Search;
