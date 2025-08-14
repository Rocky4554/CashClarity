import React from 'react';

export function ProFeatureWrapper({ 
  children, 
  isProUser, 
  onProRequired, 
  className = "" 
}) {
  const handleClick = (e) => {
    if (!isProUser) {
      e.preventDefault();
      e.stopPropagation();
      onProRequired();
    }
  };

  return (
    <div 
      className={`${className} ${!isProUser ? 'relative cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      {children}
      {!isProUser && (
        <div className="absolute inset-0 bg-transparent z-10" />
      )}
    </div>
  );
}