import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { getPastDate } from "../utils/core";
import Header from "../components/Header";
import Search from "../components/Search";
import List from "../components/List";

const Repository = () => {
  const [repositories, setRepositories] = useState(null);
  const [gitRepoList, setGitRepoList] = useState(null);
  const [languageList, setLanguageList] = useState(null);
  const [selectedStarredRepo, setSelectedStarredRepo] = useState(false);
  const pastDate = getPastDate();

  useEffect(() => {
    fetch(
      `https://api.github.com/search/repositories?q=created:>${pastDate}&sort=stars&order=desc`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          const { items } = result;

          const languagesList =
            items && Array.from(new Set(items.map(({ language }) => language)));
          setRepositories(items);
          setGitRepoList(items);
          setLanguageList(languagesList);
        },
        (error) => {
          console.log("Error");
        }
      );
  }, [pastDate]);

  const handledByLanguages = ({ value }) => {
    const filteredData = repositories.filter((repoValue) => {
      return repoValue.language === value;
    });
    if (value === "All") {
      setGitRepoList(repositories);
    } else {
      setGitRepoList(filteredData);
    }
  };

  const handledByStarredRepo = (value) => {
    setSelectedStarredRepo(value);
  };

  return (
    <Container fluid>
      <Header />
      <Search
        languageList={languageList}
        handledByLanguages={handledByLanguages}
        handledByStarredRepo={handledByStarredRepo}
      />
      {gitRepoList ? (
        <List
          gitRepoList={gitRepoList}
          selectedStarredRepo={selectedStarredRepo}
        />
      ) : (
        <Row className="justify-content-md-center my-4">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Row>
      )}
    </Container>
  );
};

export default Repository;
