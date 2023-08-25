import React from "react";

function LoversLane() {
  return (
    <div className="flex justify-center">
      <iframe
        width="75%"
        height="150"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1601006970%3Fsecret_token%3Ds-4COiMTBSq9W&color=%23080414&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </div>
  );
}
export default function Listen() {
  return (
    <div className="site-background">
      <div className=" text-center titles">Listen!</div>
      <LoversLane />
    </div>
  );
}
