import React, { useEffect, useRef } from 'react';

const WebcamTest = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error('error:', err);
      });
  };

  // const paintToCanvas = () => {
  //   const video = videoRef.current;
  //   const photo = photoRef.current;
  //   const ctx = photo.getContext('2d');

  //   const width = 320;
  //   const height = 240;
  //   photo.width = width;
  //   photo.height = height;

  //   return setInterval(() => {
  //     ctx.drawImage(video, 0, 0, width, height);
  //   }, 200);
  // };

  // const stop = (e) => {
  //   const stream = video.srcObject;
  //   const tracks = stream.getTracks();

  //   for (let i = 0; i < tracks.length; i++) {
  //     const track = tracks[i];
  //     track.stop();
  //   }

  //   video.srcObject = null;
  // };

  return (
    <div>
      <button>Take a photo</button>
      <video ref={videoRef} />
      <canvas />
    </div>
  );
};

export default WebcamTest;
