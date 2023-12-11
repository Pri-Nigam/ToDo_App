import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Details from './Details';
import { useState } from 'react';
import Table from './Table';
import Show from './Show';
import UpdateDetails from './UpdateDetails';

function Header() {
  const [data, setData] = useState([]);

  return (
    <div className="header">
      <Router>
        <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1>ToDo App</h1>
            </div>
            <div className="d-flex my-4">
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
          <Route path="/details" element={<Details setData={setData} />} />
          <Route path="/table" element={<Table data={data} setData={setData} />} />
          <Route path="/show/:id" element={<Show data={data} setData={setData}/>} />
          <Route path="/updateDetails/:id" element={<UpdateDetails data={data} setData={setData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Header;
