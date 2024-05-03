import React from 'react';
import useLocation from './useLocation'; // Adjust the import path based on your folder structure

const MyComponent = () => {
  const location = useLocation();

  // Use the location data in your component
  // Example: render latitude and longitude
  return (
    <div>
      <p>Latitude: {location?.latitude}</p>
      <p>Longitude: {location?.longitude}</p>
    </div>
  );
};

export default MyComponent;
