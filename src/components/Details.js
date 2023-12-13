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
  const [validationMessages, setValidationMessages] = useState({
    id: '',
    name: '',
    desc: '',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateId() || !validateName() || !validateDescription() || !validateDate()) {
      return;
    }

    setData((prev) => [...prev, formData]);
    console.log("-------", formData);
    setFormData({
      id: '',
      name: '',
      desc: '',
      date: ''
    });

    setValidationMessages({
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

    setValidationMessages({
      ...validationMessages,
      [name]: ''
    });
  };

  const validateId = () => {
    if (formData.id.trim() === '') {
      setValidationMessages({
        ...validationMessages,
        id: 'ID is required.'
      });
      return false;
    }

    return true;
  };

  const validateName = () => {
    if (formData.name.trim() === '') {
      setValidationMessages({
        ...validationMessages,
        name: 'Name is required.'
      });
      return false;
    }
    return true;
  };

  const validateDescription = () => {
    if (formData.desc.trim() === '') {
      setValidationMessages({
        ...validationMessages,
        desc: 'Description is required.'
      });
      return false;
    }
    return true;
  };

  const validateDate = () => {
    const currentDate = new Date();
    const selectedDate = new Date(formData.date);

    if (formData.date.trim() === '') {
      setValidationMessages({
        ...validationMessages,
        date: 'Date is required.'
      });
      return false;
    }
    else if (selectedDate < currentDate) {
      setValidationMessages({
        ...validationMessages,
        date: 'Date should be present or in the future.'
      });
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
          {validationMessages.id && <div className="text-danger">{validationMessages.id}</div>}
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
          {validationMessages.name && <div className="text-danger">{validationMessages.name}</div>}
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
          {validationMessages.desc && <div className="text-danger">{validationMessages.desc}</div>}
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
          {validationMessages.date && <div className="text-danger">{validationMessages.date}</div>}
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
