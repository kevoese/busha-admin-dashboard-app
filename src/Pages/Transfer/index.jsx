import React from 'react'
import './Transfer.scss';
import TableHeader from '../../components/TableHeader';

const Transfer = () => {
  return (
    <div className="transfers">
      <div className="transfers__table">
        <div className="transfers__table__new-transfer">
          <button>
            <p>New transfer</p>
            <span> ^</span>
          </button>
        </div>
        <TableHeader classes="heading-color" contents={["Reference","Status","Amount"]} />
        <div className="transfers__table__content">
            <div>
              <p className="you-havent-made-any">You haven’t made any transfers yet</p>
              <p className="your-transfers-will">Your transfers will be displayed here.</p>
            </div>
        </div>
      </div>
    </div> 
  )
}

export default Transfer;
