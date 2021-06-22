import React from 'react';

function HomepageImage() {
  const url = 'https://res.cloudinary.com/dzwpbkn3u/image/upload/v1624160830/rain_hcqddw.gif';
  return (
    <img src={url} style={{width: 300}} alt='rain' />
  );
}

export default HomepageImage;
