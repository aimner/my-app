import React, { useState } from "react";
import classes from "./UserPagination.module.scss";

export function UserPagination(props) {
  let pages = [];
  let numberPagesDisplayed = 10;
  for (let i = 1; i <= Math.ceil(props.pageCount); i++) {
    pages.push(i);
  }
  let [paginationCount, setPaginationCount] = useState(0);

  return (
    <>
      {paginationCount !== 0 ? (
        <button onClick={() => setPaginationCount(paginationCount - 1)}>
          PREV
        </button>
      ) : null}
      {pages.map((item) =>
        item > paginationCount * numberPagesDisplayed &&
        item <= paginationCount * numberPagesDisplayed + 10 ? (
          <button
            className={props.currentPage === item ? classes.curientPage : null}
            onClick={() => {
              props.onChangeCurrentPage(item);
            }}
          >
            {item}
          </button>
        ) : null
      )}
      {props.pageCount / numberPagesDisplayed > paginationCount ? (
        <button onClick={() => setPaginationCount(paginationCount + 1)}>
          NEXT
        </button>
      ) : null}
    </>
  );
}
