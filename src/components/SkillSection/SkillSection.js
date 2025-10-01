import React from 'react';
import FunFactSection from '../FunFact/FunFact';
import { useTranslation } from 'react-i18next';

const SkillSection = (props) => {
    const { t } = useTranslation();
    const progress = t('skill.progress', { returnObjects: true });

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="wpo-skill-img">
                            <img src={props.Akimg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="wpo-section-title-s2">
                            <p>{t('skill.subtitle')}</p>
                            <h2 dangerouslySetInnerHTML={{ __html: t('skill.title') }} />
                        </div>
                        <div className="wpo-skill-progress">
                            <p>{t('skill.description')}</p>

                            {Object.values(progress).map((item, idx) => (
                                <div className="wpo-progress-single" key={idx}>
                                    <h5 className="progress-title">{item.title}</h5>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: `${item.value}%` }} />
                                    </div>
                                    <span className="progress-number">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                        <FunFactSection/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillSection;
