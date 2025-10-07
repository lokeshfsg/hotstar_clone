import React from 'react';

function Winner({ des }) {
  
  if (!des || des.length === 0) {
    return <p>No data available</p>;
  }
  return (
    <div>
      {des.map((value) => (
        
        <div key={value.id} className="mat">
          <video
            width="560"
            height="315"
            controls
            muted
            preload="auto"
            src={process.env.PUBLIC_URL + encodeURI(value.video)}
            title={value.name}
            onError={(e) => console.error('Video failed to load:', e)}
          >
            Your browser does not support the video tag.
          </video>

          <br /><br />
          <h2>{value.name}</h2>
          <h3>Type: {value.type}</h3>
          <p>{value.description}</p>
          <h4>Rating: {value.rating}</h4>
        </div>
      ))} 
    </div>
  );
}

export default Winner;
