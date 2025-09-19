import React, { useState } from 'react';

const TeamForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        address: '',
        note: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group half-col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name:"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group half-col">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email:"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group half-col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Subject:"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group half-col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Your Address:"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group full-col">
                <textarea
                    className="form-control"
                    name="note"
                    placeholder="Description..."
                    value={formData.note}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="form-group full-col">
                <button className="btn theme-btn-s4" type="submit">Get In Touch</button>
            </div>
        </form>
    );
};

export default TeamForm;
