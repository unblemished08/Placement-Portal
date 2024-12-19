import React from "react";
import image1 from "./image1.jpg"; // Correctly import the image

const About = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex w-full bg-pink5 my-4 font-medium items-center justify-center">
        <h1 className="text-xl bold py-4">This is About Page</h1>
      </div>

      {/* Main Content Section */}
      <div className="bg-pink4 rounded-md p-6">
        {/* Image Section */}
        <div className="flex w-full h-80 my-4 justify-evenly items-center gap-x-8">
          {/* Image 1 */}
          <svg width="200" height="200">
            <defs>
              <clipPath id="circle-clip1">
                <circle cx="100" cy="100" r="75" />
              </clipPath>
            </defs>
            <image
              xlinkHref={image1}
              x="25"
              y="25"
              width="150"
              height="150"
              clipPath="url(#circle-clip1)"
            />
          </svg>

          {/* Image 2 */}
          <svg width="200" height="200">
            <defs>
              <clipPath id="circle-clip2">
                <circle cx="100" cy="100" r="75" />
              </clipPath>
            </defs>
            <image
              xlinkHref={image1}
              x="25"
              y="25"
              width="150"
              height="150"
              clipPath="url(#circle-clip2)"
            />
          </svg>

          {/* Image 3 */}
          <svg width="200" height="200">
            <defs>
              <clipPath id="circle-clip3">
                <circle cx="100" cy="100" r="75" />
              </clipPath>
            </defs>
            <image
              xlinkHref={image1}
              x="25"
              y="25"
              width="150"
              height="150"
              clipPath="url(#circle-clip3)"
            />
          </svg>
        </div>

        {/* Text Section */}
        <div className="flex justify-evenly items-center gap-x-8 my-6">
          {/* Card 1 */}
          <div className="bg-pink3 p-4 rounded-md text-center w-1/4 shadow-md">
            <p className="font-medium">Sameer Singh</p>
            <a
              href="mailto:sameerkhobra474@gmail.com"
              className="text-blue-500 underline"
            >
              sameerkhobra474@gmail.com
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-pink3 p-4 rounded-md text-center w-1/4 shadow-md">
            <p className="font-medium">Sameer</p>
            <a
              href="mailto:sameerkhobra474@gmail.com"
              className="text-blue-500 underline"
            >
              12213055@nitkkr.ac.in
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-pink3 p-4 rounded-md text-center w-1/4 shadow-md">
            <p className="font-medium">Harshit Anand</p>
            <a
              href="mailto:sameerkhobra474@gmail.com"
              className="text-blue-500 underline"
            >
              12213053@nitkkr.ac.in
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
