import React from 'react';

import { Link, useLocation } from 'react-router-dom';

export default () => {
  const location = useLocation();
  console.log(location)
  return (
    <div className="footers">
      <div className="footers__inner text--center">
        <div>
          &laquo;leben ist bewegung, bewegung ist gesundheit, gesundheit ist leben&raquo;
        </div>
      </div>

      {location.pathname !== '/data-protection' && <div className="footers__link">
        <Link to="/data-protection">
          Datenschutzerklärung
        </Link>
      </div>}

    </div>
  )
}
