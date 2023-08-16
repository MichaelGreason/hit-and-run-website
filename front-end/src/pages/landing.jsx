import React from "react";

export default function Landing() {
  return (
    <>
      <div className="site-background">
        <div className="text-center text-6xl font-extrabold titles">
          Welcome to the studio
        </div>
        <div className="cards font-extrabold">
          Hi, my name is Michael Greason. I am the owner and operator of Hit and
          Run Studios here in Orange County, NC. I focus on delivering an
          amazing product at a low cost. I attended college at Full Sail
          University in Winter Park, FL where I obtained my Audio Engineering
          degree. I have live music experience touring the US in my band
          <a
            className=" text-blue-200"
            href="https://open.spotify.com/artist/48STVXwvno3eEgQTw9GSjG?si=pG1VFW6MS0W5flrQvWdn3A"
          >
            {" "}
            The Second After
          </a>
          . Please, click around and explore my site, feel free to reach out via
          the contact page about rates, schedule, or any questions you may have.
          LETSGO!
        </div>
        <div className="cards">
          <img src="/src/assets/dsc04626.JPG" alt="MG photo" className="pb-8" />
        </div>
      </div>
    </>
  );
}
