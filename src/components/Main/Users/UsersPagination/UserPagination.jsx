import React from "react";
import classes from "./UserPagination.module.scss";


export function UserPagination(props) {
  let pages = [];
  
  for (let i = 1; i <= Math.ceil(props.pageCount); i++) {
    pages.push(i);
  }

  return (
    <>
      {pages.map((item) => (
        <button
          className={props.currentPage === item ? classes.curientPage : null}
          onClick={() => {
            props.onChangeCurrentPage(item);
          }}
        >
          {item}
        </button>
      ))}
    </>
  );
}
