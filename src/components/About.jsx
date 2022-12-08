import AboutImg from "../assets/img/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="container grid md:grid-cols-2 my-10 lg:my-24 gap-6 lg:gap-12"
    >
      <div className="flex justify-center lg:justify-end">
        <img
          className="rounded-xl w-full max-w-[500px] mb-4 md:mb-0"
          src={AboutImg}
          alt="space_bycicle"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-orange-500 text-center">STORY</p>
        <h2 className="text-white mb-4 text-center">ABOUT US</h2>
        <div className="text-gray-300 text-lg text-justify">
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
