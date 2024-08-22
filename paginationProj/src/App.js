import "./App.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import Comment from "./componenets/Comment";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [comments, setComments] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetchComments(1);
  }, []);

  const handlePageChange = (data) => {
    let pageNumber = data.selected + 1;
    fetchComments(pageNumber);
  };

  const fetchComments = (pageNumber) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}`)
      .then((response) => {
        setPageCount(Math.ceil(response.headers.get("x-total-count") / 10));
        return response.json();
      })
      .then((comments) => setComments(comments));
  };

  return (
    <div className="App">
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
      <ReactPaginate
        pageCount={pageCount}
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        nextClassName="page-item"
        previousClassName="page-item"
        pageLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeLinkClassName="active"
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
