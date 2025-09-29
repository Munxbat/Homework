import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Search = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  const results = query
    ? [
        { id: 1, title: `Result for ${query}`, description: `This is a sample result for ${query}` },
      ]
    : [];

  return (
    <div className="container my-5">
      <h2>{t('search_results')}</h2>
      {query ? (
        <p>
          {t('searching_for')}: <strong>{query}</strong>
        </p>
      ) : (
        <p>{t('no_query')}</p>
      )}
      <div>
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{result.title}</h5>
                <p className="card-text">{result.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>{t('no_results')}</p>
        )}
      </div>
    </div>
  );
};

export default Search;