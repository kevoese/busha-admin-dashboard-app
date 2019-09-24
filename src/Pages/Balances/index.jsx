import React from 'react';
import './Balances.scss';
import BalanceTableRow from '../../components/BalanceTableRow';
import tableRowDatas from './fixture';
import TableHeader from '../../components/TableHeader';

const Balances = () => {
  return (
    <div className="balances">
      <div className="balances__table">
        <TableHeader contents={["Name","Pending","Avaliable"]}/>
       <div>
        {
          tableRowDatas.map(({name, pending, available, imgUrl },index) =>  <BalanceTableRow
          name={name} 
          pending={pending}
          available={available}
          imgUrl={imgUrl}
          key={index}
        />)
        }
      </div>

      </div>
    </div> 
  )
}

export default Balances
