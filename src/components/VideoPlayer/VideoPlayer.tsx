import { useRef } from "react";

type VideoPlayerProps = {
  src: string;
  poster: string;
  width?: string;
  height?: string;
};

const VideoPlayer = ({
  src,
  poster,
  width = "100%",
  height = "auto",
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const play = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const stop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        width={width}
        height={height}
        controls={false}
      />
      <div>
        <button onClick={play}>Play</button>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
