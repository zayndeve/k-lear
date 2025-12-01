import "./../styles/components/Advertisement.css";

export default function Advertisement() {
  return (
    <section className="advertisement-section">
      <video
        className="advertisement-video"
        controls
        autoPlay
        muted
        loop
      >
        <source
          src="/video/5302221_Seoul_South_Korea_3840x2160.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
