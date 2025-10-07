import React from 'react';

function Vibheeshan({ des }) {

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
            autoPlay
            muted
            preload="auto"
            src={value.video}
            type="video/mp4"
            title={value.name}
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

export default Vibheeshan;
