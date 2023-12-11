import { useState } from "react";
import { useNavigate, useParams, usenav } from "react-router-dom";

const UpdateDetails = (props) => {
    const {data,setData} = props;
    const {id} = useParams();
    const nav = useNavigate();
    let item = null;

    data.forEach(i => {
        if (i.id == id) {
        item = i;
        }
    });

    const [formData, setFormData] = useState({
      id: id,
      name: item.name,
      desc: item.desc,
      date: item.date,
  });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.id) {
            setData((prevData) =>
            prevData.map((item) =>
                item.id === formData.id ? { ...item, ...formData } : item
            )
            );
            nav(`/detail/${formData.id}`);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Update Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Id</label>
                    <input
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    readOnly
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
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
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea
                    className="form-control"
                    id="desc"
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

export default UpdateDetails;