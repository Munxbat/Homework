// VideoPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

// Видео файлуудыг import
import video1 from '../../assets/video1.mp4';

const videos = {
  'MiningDrills': video1,
//   'MiningEquipment': video2,
//   'HeavyTires': video3,
};

const VideoPage = () => {
  const { slug } = useParams(); // URL-аас slug авна
  const videoSrc = videos[slug] || video1; // slug тохирохгүй бол анхны видео

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      <video
        src={videoSrc}
        type="video/mp4"
        autoPlay
        loop
        muted
        
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
    </div>
  );
};

export default VideoPage;
