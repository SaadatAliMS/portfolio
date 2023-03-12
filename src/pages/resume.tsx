import { Bar } from "@/components/Bar";
import React from "react";
import { languages, tolls } from "../../data";

const resume = () => {
  return (
    <div className="p-4 px-6 py-2">
      {/* education & experience */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold"> Phd Nuclear Engineering</h5>
            <p className="font-semibold">
              School of Nuclear & Power Engineering
            </p>
            <p className="my-3 ">
              I am a Nuclear Engineer turned data scientist working in nuclear
              power industry for more then 10 years.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Nuclear Imaging Scientist
            </h5>
            <p className="font-semibold">
              Pakistan Institue of Nuclear Science & Technology(PINSTECH)
            </p>
            <p className="my-3 ">
              I am a Nuclear Engineer turned data scientist working in nuclear
              power industry for more then 10 years.
            </p>
          </div>
        </div>

        {/* languages and tools */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="my-3 text-2xl font-bold">Languages & Frameworks </h5>
            <div className="my-2">
              {languages.map((language) => (
                <Bar data={language} key={language.name} />
              ))}
            </div>
          </div>
        </div>
        {/* for tools */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="my-3 text-2xl font-bold">Tools & Software </h5>
            <div className="my-2">
              {tolls.map((toll) => (
                <Bar data={toll} key={toll.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
