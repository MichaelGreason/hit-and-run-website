import React from "react";

function Forgetmyname() {
  return (
    <div className="flex justify-center music">
      <div className=" bg-black">Forgetmyname - Pop</div>
    </div>
  );
}
function LoversLane() {
  return (
    <div className="flex justify-center music">
      <div className=" bg-black">
        Lovers Lane - Acoustic
        <iframe
          width="100%"
          height="150"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1601006970%3Fsecret_token%3Ds-4COiMTBSq9W&color=%23080414&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </div>
  );
}

function Beats() {
  return (
    <div className="flex justify-center music">
      <div className=" bg-black">
        Beats/ Instrumentals
        <iframe
          width="100%"
          height="150"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1601022984%3Fsecret_token%3Ds-i1dkEitYeny&color=%23080414&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </div>
  );
}
export default function Listen() {
  return (
    <div className="site-background">
      <div className=" text-center titles mb-20">Listen!</div>
      <LoversLane />
      <Beats />
    </div>
  );
}
