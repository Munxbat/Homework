import React from 'react';

const SectionTitle = ({ title, subtitle, titleColor }) => {
    return (
        <div className="wpo-section-title">
            <p>{subtitle}</p>
            <h2>{title} <span>{titleColor}</span></h2>
        </div>

    );
};

export default SectionTitle;