import React from 'react';

export default function BMW() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="relative w-full max-w-4xl h-96">
        {/* Sky and ground */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-gray-300"></div>
        {/* Car container */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-96">
          {/* Shadows */}
          <div className="absolute -bottom-8 left-0 right-0 h-4 bg-black opacity-30 rounded-full blur-xl"></div>
          {/* Car body */}
          <svg viewBox="0 0 400 200" className="w-full drop-shadow-2xl">
            {/* Main body */}
            <rect x="50" y="80" width="300" height="70" rx="10" fill="#000000" />
            {/* Windshield */}
            <polygon points="100,80 150,40 250,40 300,80" fill="#1a1a2e" opacity="0.8" />
            {/* Windows */}
            <rect x="110" y="50" width="50" height="35" fill="#4a90e2" opacity="0.6" />
            <rect x="240" y="50" width="50" height="35" fill="#4a90e2" opacity="0.6" />
            {/* Front bumper */}
            <rect x="50" y="145" width="70" height="15" fill="#1a1a1a" />
            {/* Rear bumper */}
            <rect x="280" y="145" width="70" height="15" fill="#1a1a1a" />
            {/* Headlights */}
            <circle cx="70" cy="85" r="8" fill="#ffeb3b" opacity="0.9" />
            <circle cx="85" cy="85" r="8" fill="#ffeb3b" opacity="0.9" />
            {/* Taillights */}
            <circle cx="330" cy="85" r="8" fill="#ff4444" opacity="0.9" />
            <circle cx="345" cy="85" r="8" fill="#ff4444" opacity="0.9" />
            {/* Wheels */}
            <circle cx="120" cy="160" r="20" fill="#333333" />
            <circle cx="120" cy="160" r="16" fill="#555555" />
            <circle cx="120" cy="160" r="12" fill="#222222" />
            <circle cx="280" cy="160" r="20" fill="#333333" />
            <circle cx="280" cy="160" r="16" fill="#555555" />
            <circle cx="280" cy="160" r="12" fill="#222222" />
            {/* Hood detail */}
            <polygon points="60,80 80,60 320,60 340,80" fill="#0a0a0a" />
            {/* Doors */}
            <rect x="130" y="85" width="70" height="60" fill="#1a1a1a" stroke="#333333" strokeWidth="2" />
            <rect x="200" y="85" width="70" height="60" fill="#1a1a1a" stroke="#333333" strokeWidth="2" />
            {/* Door handles */}
            <rect x="140" y="105" width="15" height="4" fill="#666666" />
            <rect x="245" y="105" width="15" height="4" fill="#666666" />
            {/* Shine/reflection */}
            <ellipse cx="160" cy="90" rx="20" ry="8" fill="#333333" opacity="0.6" />
          </svg>
        </div>
        {/* Text below */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-3xl font-bold text-white">BMW M5</h1>
          <p className="text-gray-300 text-sm">Pure Driving Performance</p>
        </div>
      </div>
    </div>
  );
}