import React from "react";
import s from "./Paginator.module.css";


function Paginator (props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return  <div className={s.users_number_page}>
            {pages.map(p => {

                return <span className={props.currentPage === p && s.selectedPage}
                             key={Math.random()+pages}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }
                             }>{p} </span>
            })}
        </div>
}
export default Paginator;