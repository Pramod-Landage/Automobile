import React from 'react';

const BMWCarDisplay = () => {
  return (
    <svg
      width="200"
      height="100"
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: 'black', borderRadius: '10px' }}
    >
      <rect x="10" y="40" width="180" height="40" fill="#ffffff" />
      <circle cx="40" cy="80" r="10" fill="#ffffff" />
      <circle cx="160" cy="80" r="10" fill="#ffffff" />
      <path
        d="M40 40 C 30 10, 170 10, 160 40"
        fill="#000000"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <text x="50" y="20" fill="#ffffff" fontSize="12">BMW</text>
    </svg>
  );
};

export default BMWCarDisplay;