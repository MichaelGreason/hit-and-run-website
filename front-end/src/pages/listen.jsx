import React from "react";

export default function Listen() {
  return (
    <div className="site-background">
      <div className=" text-center titles">Listen!</div>
      <div className="">
        <div>Forgetmyname</div>
        <audio controls>
          <source
            src="https://dl.dropboxusercontent.com/home/Nikki%20Lux/Five+F_V_1.mp3"
            type="audio/mpeg"
          />
        </audio>
      </div>
    </div>
  );
}
