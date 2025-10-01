import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const CtaSection = (props) => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError(t('cta.email_error')); // Translated error message
            return;
        }
        // Placeholder for form submission logic (e.g., API call)
        console.log("Submitted email:", email);
        setEmail(""); // Reset input
        setError(""); // Clear error
        alert(t('cta.success_message')); // Translated success message
    };

    return (
        <section className={props.hclass || 'wpo-cta-section'}>
            <div className="container">
                <div className="wpo-subscribe-wrap">
                    <div className="subscribe-text">
                        <h3>{t('cta.title')}</h3>
                    </div>
                    <div className="subscribe-form">
                        <form onSubmit={handleSubmit}>
                            <div className="input-field">
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('cta.placeholder')}
                                    aria-label={t('cta.placeholder')}
                                    required
                                />
                                <button type="submit">{t('cta.button')}</button>
                            </div>
                            {error && <p className="error-message">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;