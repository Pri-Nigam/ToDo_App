import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/eyeglasses.svg';
import trash from './images/trash-fill.svg';
import pen from './images/pencil-fill.svg'

function Table({data,handleDelete, setIsEdit}) {

  return (
    <div className="container" style={{display:"flex", justifyContent:"center"}}>
      {data.length === 0 ? (
        <div>
          <b className='col-md-11'>No list found!</b>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td className="w-5">{item.id}</td>
                <td className="w-20">{item.name}</td>
                <td className="w-55">{item.desc}</td>
                <td className="w-25">{item.date}</td>
                <td>
                  <Link className='btn btn-primary'to={`/show/${item.id}`}><img src={logo}></img></Link>
                  <button className='btn btn-danger' onClick={() => handleDelete(item.id)}><img src={trash}></img></button>
                  {/* <Link className='btn btn-success' onClick={()=> setIsEdit(true)}to={`/updateDetails/${item.id}`}><img src={pen}></img></Link> */}
                  <Link className='btn btn-success' onClick={()=> setIsEdit(true)}to={`/details/${item.id}`}><img src={pen}></img></Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

}

export default Table;