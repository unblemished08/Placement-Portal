import React from "react";
import image1 from "./image1.jpg"; // Correctly import the image

const About = () => {
  return (
    <>
      <div className="flex w-full bg-pink5 my-4 font-medium items-center align-center justify-evenly">
        <h1 className="bold py-4">
          This is about page
        </h1>
      </div>
      <div  className="bg-pink4 rounded-md " >
      <div className="flex w-full h-80 my-4 justify-evenly items-center">
        <svg width="200" height="200" >
          <defs>
            <clipPath id="circle-clip">
              <circle cx="100" cy="100" r="75" />
            </clipPath>
          </defs>
          <image
            xlinkHref={image1} // Correctly use the imported image
            x="25"
            y="25"
            width="150"
            height="150"
            clip-path="url(#circle-clip)"
          />
          <br/>
          <p>
            sameer
          </p>
        </svg>
        <svg width="200" height="200">
          <defs>
            <clipPath id="circle-clip">
              <circle cx="100" cy="100" r="75" />
            </clipPath>
          </defs>
          <image
            xlinkHref={image1} // Correctly use the imported image
            x="25"
            y="25"
            width="150"
            height="150"
            clip-path="url(#circle-clip)"
          />
        </svg>
        <svg width="200" height="200">
          <defs>
            <clipPath id="circle-clip">
              <circle cx="100" cy="100" r="75" />
            </clipPath>
          </defs>
          <image
            xlinkHref={image1} // Correctly use the imported image
            x="25"
            y="25"
            width="150"
            height="150"
            clip-path="url(#circle-clip)"
          />
        </svg>
      </div>
      <div className="flex justify-evenly ">
        <p1 className="bg-ping3">
            Sameer Singh
            <br/>
            <a href="sameerkhobra474@gmail.com">
                Sameerkhobra474@gmail.com
            </a>
        </p1>
        <p1 className="bg-ping3">
            Sameer
        </p1>
        <p1 className="bg-ping3">
            Sameer
        </p1>
      </div>
      </div>
    </>
  );
};

export default About;
