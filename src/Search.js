import React, { useEffect } from "react";

const baseUrl = "http://openlibrary.org";

// export function searchBooks(query) {
//   const url = new URL(baseUrl + '/search.json');
//   url.searchParams.append('title', query);

//   return fetch(url).then(response => response.json());
// }

export function Search() {
  const [results, setResults] = React.useState(0);
  const [statusData, setStatusData] = React.useState();

  let mockResults = [
    {
      title: "The art of war",
      author_name: "Tsu",
      first_publish_year: 1970,
    },
    {
      title: "The Secrets",
      author_name: "Rwande",
      first_publish_year: 2000,
    },
    {
      title: "The magic of thinking big",
      author_name: "David",
      first_publish_year: 2001,
    },
  ];

  useEffect(() => {
    // setResults(mockResults);
    testerMethod();
  }, []);

  // const handleSearch = (event) => {
  //   searchBooks(event.target.value).then(response => {
  //     setResults(response.docs);
  //   });
  // };

  const testerMethod = async () => {
    let localRes = [];

    for (let i = 0; i < mockResults.length; i++) {
      let stResult = await scaryClown();
      localRes.push(stResult);
    }

    setResults(localRes);

    console.log("results", localRes);
  };

  function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 0);
    });
  }

  const allItemRows = (results || []).map((book) => (
    <tr key={book.key}>
      <td>{book.title}</td>
      <td>{book.author_name}</td>
      <td>{book.first_publish_year}</td>
      <td>{"Eternal peace..."}</td>
    </tr>
  ));

  return (
    <div>
      <div className="search-input">
        {/* <input onChange={handleSearch} type="text" placeholder="Search"/> */}
      </div>
      <h1 className="h1">Search Results</h1>
      <div className="books">
        <table>
          <thead>
            <tr>
              <th className="title-col">Title</th>
              <th className="author-col">Author</th>
              <th className="year-col">Pub Year</th>
              <th className="year-col">Test head</th>
            </tr>
          </thead>
          <tbody>{allItemRows}</tbody>
        </table>
      </div>
    </div>
  );
}
