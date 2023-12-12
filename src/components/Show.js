import React from 'react';
import { useParams } from 'react-router-dom';
import trash from './images/trash-fill.svg';
import pen from './images/pencil-fill.svg';
import {Link} from 'react-router-dom';


function Show({data, handleDelete}) {
  const {id} = useParams();
  let variable = null;

  data.forEach(element => {
    if (element.id == id) {
      variable = element;
    } 
  });

  return (
    <>
      <div className='container' style={{display:"flex", justifyContent:"center"}}>
        <div class="card mb-3" style={{width: '30rem'}}>
          <div class="row g-0">
            {/* <div class="col-md-4">
              <img src="..." class="img-fluid rounded-start" alt="..."/>
            </div> */}
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text"><small class="text-body-secondary">{variable.id}</small></p>
                <h5 class="card-title">{variable.name}</h5>
                <p class="card-text">{variable.desc}</p>
                <p class="card-text">{variable.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{display:"flex", justifyContent:"center", marginLeft: '78px'}}>
        <button className='btn btn-danger' onClick={() => handleDelete(variable.id)}><img src={trash}></img></button>
        <Link className='btn btn-success mx-2' to={`/updateDetails/${variable.id}`}><img src={pen}></img></Link>
      </div>
    </>
  )
}

export default Show;