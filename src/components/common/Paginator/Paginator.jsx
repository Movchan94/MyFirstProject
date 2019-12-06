import React, {useState} from 'react';
import styles from './Paginator.module.css';

let Paginator = ({totalUserCount, pageSize, currentPage, onPageChanged, portionSize = 20}) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
   let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        className={currentPage === p && styles.selectedPage}
                        onClick={(e) => {
                            onPageChanged(p)
                        }}> {p} </span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}

        </div>
    )
}
export default Paginator;

