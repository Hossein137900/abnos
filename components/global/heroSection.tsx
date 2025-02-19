interface HeroProps {
  title: string;
  description?: string;
  videoUrl: string;
}

const HeroSection = ({ title, description, videoUrl }: HeroProps) => {
  return (
    <div className="relative w-full h-[350px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute blur-sm brightness-90 top-0 left-0 w-full h-full object-cover z-10"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 bg-black/40">
        <h1 className="text-lg md:text-xl font-bold text-center mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-md md:text-md text-center max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
