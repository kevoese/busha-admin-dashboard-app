import React from 'react';
import './BalanceTableRow.scss';

const BalanceTableRow = ({name, pending, available, imgUrl, index}) => {
  return (
    <div className="table-row" key={index}>
       <div className="table-row__name">
         <img src={imgUrl} alt=""/>
         <p>{name}</p>
       </div>
       <div className="table-row__pending">
         <p>
          {pending && pending.btc}
         </p>
         <p>
          {pending &&pending.naira}
         </p>
       </div>
       <div className="table-row__pending">
       <p>
          {available && available.btc}
         </p>
         <p>
          {available && available.naira}
         </p>
       </div>
    </div>
  )
}

export default BalanceTableRow
