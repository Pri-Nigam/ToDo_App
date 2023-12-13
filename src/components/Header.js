import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Details from './Details';
import { useState } from 'react';
import Table from './Table';
import Show from './Show';
import UpdateDetails from './UpdateDetails';

function Header() {
  const [data, setData] = useState([]);
  let nav = useNavigate();

//   const getDataById = (id) => {

//   }

//   cosnt updateData = (data) => {

//   }


  //api implemnt in use effect ..
  const handleDelete = (id) => {
    console.log(id)
    setData(data.filter(obj => obj.id !== id));
    console.log('first')
    nav(`/table`);
  }

  return (
    <div className="header">
        <div className="d-flex justify-content-between align-items-center">
            <div style={{margin: '12px'}}>
              <h1>ToDo App</h1>
            </div>
            <div className="d-flex my-4 mx-3">
              <div className="ms-2">
                <Link to="/details" className="btn btn-primary">Add Details</Link>
              </div>
              <div className="ms-2">
                <Link to="/table" className="btn btn-primary">Home</Link>
              </div>
            </div>
          </div>

          <Routes>
            <Route path="/"></Route>
            <Route path="/details" element={<Details setData={setData}/>} />
            <Route path="/table" element={<Table data={data} handleDelete={handleDelete}/>} />
            <Route path="/show/:id" element={<Show data={data} handleDelete={handleDelete}/>} />
            <Route path="/updateDetails/:id" element={<UpdateDetails data={data} setData={setData} />} />
        </Routes>
    </div>
  );
}

export default Header;
