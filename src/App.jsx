import { useState, useEffect } from "react";
import "./App.css";
import Table1 from "./Components/Table";
import AddElement from "./Components/AddElement";
import SearchBar from "./Components/SearchBar";
import { Button, Flex } from "@chakra-ui/react";

function App() {
  const [name, setName] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [row, setRow] = useState([]);

  const FetchName = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setName(data);
      });
  };

  useEffect(() => {
    FetchName();
  }, []);

  //for pagination
  const pageSize = 40;
  const totalPage = Math.ceil(name.length / pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //search
  useEffect(() => {
    if (name.length > 0) {
      setRow(name);
    }
  }, [name]);
  const foundItem = name.filter((item) => item.name.includes(searchText));

  //sliced array
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const dataSlice = name.slice(startIndex, endIndex);

  return (
    <>
      <SearchBar name={name} search={searchText} onChange={setSearchText} />
      <AddElement name={name} setName={setName} />

      {searchText ? <Table1 name={foundItem} /> : <Table1 name={dataSlice} />}

      <Flex gap={"20px"}>
        {Array.from({ length: totalPage }, (q, index) => index + 1).map(
          (pageNumber) => {
            return (
              <Button
                key={pageNumber}
                mt={"10px"}
                isDisabled={currentPage === pageNumber}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </Button>
            );
          }
        )}
      </Flex>
    </>
  );
}

export default App;
