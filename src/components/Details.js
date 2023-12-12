import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Details(props) {
  const { setData } = props;
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    desc: '',
    date: ''
  });


  // useEffect(() => {
  //   if(props.isEdit) {
  //     setFormData(pr)
  //   }
  // })
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateId() || !validateName() || !validateDescription() || !validateDate()) {
      return;
    }

    // props.isEdit ? updateData(formData): setData

    setData((prev) => [...prev, formData]);
    console.log("-------", formData);
    setFormData({
      id: '',
      name: '',
      desc: '',
      date: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateId = () => {
    if (formData.id.trim() === '') {
      alert('ID is required.');
      return false;
    }

    return true;
  };

  const validateName = () => {
    if (formData.name.trim() === '') {
      alert('Name is required.');
      return false;
    }
    return true;
  };

  const validateDescription = () => {
    if (formData.desc.trim() === '') {
      alert('Description is required.');
      return false;
    }
    return true;
  };

  const validateDate = () => {
    const currentDate = new Date();
    const selectedDate = new Date(formData.date);

    if (selectedDate < currentDate) {
      alert('Date should be present or in the future.');
      return false;
    }
    return true;
  };

  return (
    <div className="container mt-4">
      <h2>Add Details</h2>
      <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <label htmlFor="id" className="form-label">ID:</label>
              <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              />
          </div>
          <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              />
          </div>
          <div className="mb-3">
              <label htmlFor="desc" className="form-label">Description:</label>
              <textarea
              className="form-control"
              id="desc"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              ></textarea>
          </div>
          <div className="mb-3">
              <label htmlFor="date" className="form-label">Date:</label>
              <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

Details.propTypes = {
  setData: PropTypes.func.isRequired
};

export default Details;
