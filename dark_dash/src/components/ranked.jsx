

import React from 'react';
// import './App.css'; // You can create a CSS file for styling
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Table.css";
const Table = () => {
    // Dummy data for the paid and unpaid tables
    const paidData = [
        { wardNo: 36, wardName: 'Nipaniya', percentagePaid: 80 },
        { wardNo: 42, wardName: 'Swami vivekanand', percentagePaid: 95 },
        { wardNo: 15, wardName: 'Bijasan', percentagePaid: 75 },
        { wardNo: 55, wardName: 'South tukoganj', percentagePaid: 75 },
        { wardNo: 74, wardName: 'Vishnupuri', percentagePaid: 75 },
        { wardNo: 82, wardName: 'Sudama Nagar', percentagePaid: 75 },
    ];

    

    return (
        <div className="app">
            <PaymentTable data={paidData} tableName="Paid" />
       
        </div>
    );
};

const PaymentTable = ({ data, tableName }) => {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h4>Most paying wards</h4>
                    <div>
                        <table className="table">
                            <thead>
                                <tr className='content'>
                                    <th>Ward No.</th>
                                    <th>Ward Name</th>
                                    {tableName === 'Paid' ? <th>Paid Tax %</th> : <th>Unpaid Tax %</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item) => (
                                    <tr key={item.wardNo} className='content'>
                                        <td>{item.wardNo}</td>
                                        <td>{item.wardName}</td>
                                         <td><button type="button" class="btn btn-success btn-md">{item.percentagePaid}%</button></td> 
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;