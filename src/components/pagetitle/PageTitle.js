import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const PageTitle = (props) => {
    const { t } = useTranslation();

    return (
        <div className="wpo-page-title">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{t(props.pageTitle)}</h2>
                            <ol>
                                <li><Link to="/home">{t('home')}</Link></li>
                                <li>{t(props.pagesub)}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;

