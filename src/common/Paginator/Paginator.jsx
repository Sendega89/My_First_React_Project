import React, {useState} from "react";
import s from "./Paginator.module.css";


function Paginator({onPageChanged, currentPage, totalUsersCount, pageSize}) {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / pageSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1;
    let rightPortionPageNumber = portionNumber * pageSize;

    return <div className={s.users_number_page}>

        {portionNumber > 1 &&
            <div>
                <button className={s.users_number_page_second}
                        onClick={() => {
                            setPortionNumber(1)
                        }}>First page
                </button>
                <button className={s.users_number_page_prew}
                        onClick={() => {
                            setPortionNumber(portionNumber - 1)
                        }}>
                    Prev
                </button>
            </div>}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {

                return <span className={currentPage === p && s.selectedPage}
                             key={Math.random() + pages}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }
                             }>{p} </span>
            })}
        {portionCount > portionNumber &&
            <div>
            <button className={s.users_number_page_next}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>
                Next
            </button>
                <button className={s.users_number_page_last}
                        onClick={() =>{
                            setPortionNumber(pagesCount) } }
                > Last page </button>
        </div>}
    </div>
}

export default Paginator;