export default function IframeComponent() {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="w-full h-[1080px] transform scale-[0.5] origin-top-left ">
        <iframe
          src="https://movie-mania-plum.vercel.app/"
          width="1920"
          height="1080"
          className="border-none object-cover"
        ></iframe>
      </div>
    </div>
  );
}
