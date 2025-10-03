import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        note: ''
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            await sendFormData(formData);
            setSuccessMessage('Thank you! Message sent.');
        } catch (error) {
            setErrorMessage('Error occurred while sending the email. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="office-info-text" id="contact-form-main">
            <div className="row">
                <div className="col col-lg-6 col-md-6 col-12">
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Таны нэр*"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col col-lg-6 col-md-6 col-12">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Таны и-мэйл хаяг*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col col-lg-12 col-12" >
                    <select
                        name="service"
                         className={`form-control text-white ${formData.service ? 'text-black' : 'text-gray-400'}`}
                        value={formData.service}
                        onChange={handleChange}
                        required
                        
                    >
                        <option disabled value="" style={{ color: '#999' }}>Үйлчилгээний төрөл сонгох*</option>
                        <option style={{color: 'black'}}>Зөвлөх үйлчилгээ</option>
                        <option style={{color: 'black'}}>Олон улсын худалдаа</option>
                        <option style={{color: 'black'}}>Тээвэр ложистик</option>
                    </select>
                </div>
                <div className="fullwidth col col-lg-12 col-12">
                    <textarea
                        className="form-control"
                        name="note"
                        id="note"
                        placeholder="Энд бичнэ үү..."
                        value={formData.note}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn-s4">
                    {loading ? <i className="ti-reload"></i> : 'Send Message'}
                </button>
            </div>
            <div className="clearfix error-handling-messages">
                {successMessage && <div id="success">{successMessage}</div>}
                {errorMessage && <div id="error">{errorMessage}</div>}
            </div>
        </form>
    );
};

const sendFormData = async (data) => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default ContactForm;
