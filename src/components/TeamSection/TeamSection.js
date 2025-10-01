import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import TeamData from '../../api/Team'; // Team массив
import { useTranslation } from 'react-i18next';

const TeamSection = (props) => {
    const { t } = useTranslation();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const { SectionTitleShow = false, sliceStart = 0, sliceEnd = 3 } = props;

    // TeamData-г шалгахын тулд консолд хэвлэх
    console.log('TeamData:', TeamData);

    return (
        <section className={props.hclass || ''}>
            <div className="container">
                {SectionTitleShow && (
                    <div className="row">
                        <SectionTitle
                            subtitle={t('PageTitles.team', 'Our Team')}
                            title={t('team1.title', 'Meet Our Team')}
                            titleColor={t('team1.member', 'Team Members')}
                        />
                    </div>
                )}
                <div className="wpo-team-wrap">
                    <div className="row">
                        {TeamData.slice(sliceStart, sliceEnd).map((team, index) => (
                            <div className="col col-lg-4 col-sm-6 col-12" key={index}>
                                <div className="wpo-team-item">
                                    <div className="wpo-team-img">
                                        <img src={team.Imga} alt={team.slug || 'team member'} />
                                    </div>
                                    <div className="wpo-team-text">
                                        <h3>
                                            <Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>
                                                {t(team.title, team.title)} {/* titleKey -> title */}
                                            </Link>
                                        </h3>
                                        <span>{t(team.subtitle, team.subtitle)} {/* subtitleKey -> subtitle */}</span>
                                        <div className="social">
                                            <ul>
                                                <li>
                                                    <Link onClick={ClickHandler} to="#">
                                                        <i className="ti-facebook"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;