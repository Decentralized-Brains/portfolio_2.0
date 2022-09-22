import AboutImg from "../assets/img/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="container grid md:grid-cols-2 xl:my-24 xl:gap-12"
    >
      <div className="h-[160px] md:hidden"></div>
      <div className="flex justify-end">
        <img
          className="rounded-xl w-full max-w-[500px] mb-4 md:mb-0"
          src={AboutImg}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-orange-500">STORY</p>
        <h2 className="text-white mb-4">ABOUT US</h2>
        <div className="text-gray-300 text-lg">
          <p>
            Our team can help integrate blockchain into your business as a
            blockchain development company. From cryptocurrency development
            services to innovative contract and wallet development, we can help
            you develop enterprise-ready blockchain applications and elevate
            your business to new heights.
          </p>
          <p className="my-4">
            We have contributed to establishing some of the most productive NFT
            projects and Metaverse product launches on platforms like OpenSea,
            Raible, Sandbox, and Decentraland. We provide end-to-end services,
            from planning and development through deployment and promotion.
          </p>
          <p>
            Our full-stack blockchain developers help build next-generation
            networks and allow businesses to establish a more robust financial
            infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
