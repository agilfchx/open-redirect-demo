import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Redirect = () => {
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    /* [Vulnerable] */
    const nextPage = urlParams.get('nextPage');

    if (nextPage) {
      window.location.assign(nextPage);
    } else {
      window.location.assign('/'); 
    }
  }, [location]);

  return null;
};

export default Redirect;

/* [Mitigation] - Whitelist Path */

// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const allowedPaths = ['/posts/1', '/posts/2', '/posts/3']; // Daftar URL yang diizinkan

// const Redirect = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const nextPage = urlParams.get('nextPage');

//     if (nextPage) {
//       const path = new URL(nextPage).pathname; // Mendapatkan pathname dari URL
//       if (allowedPaths.includes(path)) {
//         window.location.assign(path); // Redirect ke URL yang diizinkan
//       } else {
//         window.location.assign('/'); // Redirect ke homepage jika tidak diizinkan
//       }
//     } else {
//       window.location.assign('/'); 
//     }
//   }, [location]);

//   return null;
// };

// export default Redirect;

/* [Mitigation] - Fixed Domain & Whitelist Path */

// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const allowedPaths = ['/posts/1', '/posts/2', '/posts/3']; // Daftar URL yang diizinkan
// const fixedDomain = 'http://localhost:5173'; // Domain tetap yang diperbolehkan

// const Redirect = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const nextPage = urlParams.get('nextPage');

//     if (nextPage) {
//       const url = new URL(nextPage);
//       const path = url.pathname;

//       if (allowedPaths.includes(path) && url.origin === fixedDomain) {
//         window.location.assign(fixedDomain + path);
//       } else {
//         window.location.assign(fixedDomain + '/'); 
//     } else {
//       window.location.assign(fixedDomain + '/'); 
//     }
//   }, [location]);

//   return null;
// };

// export default Redirect;
