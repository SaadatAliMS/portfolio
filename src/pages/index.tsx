import ServiceCard from "@/components/ServiceCard";
import React from "react";
import { services } from "../../data";

export const index = () => {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow ">
      <h5 className="text-justify my-3 font-medium">
        Hello there! As a full stack web developer, I am passionate about
        building interactive and responsive web applications. I have experience
        in both front-end and back-end development, and I am constantly learning
        new technologies to improve my skills. On the front-end, I have
        expertise in HTML, CSS, and JavaScript, and I am proficient in using
        popular front-end frameworks like React, Angular, and Vue.js to build
        user-friendly and dynamic web interfaces. I also have experience in
        building mobile-responsive designs using CSS frameworks like Bootstrap
        and Materialize.
      </h5>
      <div className="p-2 mt-5 bg-gray-100 flex-grow dark:bg-dark-100">
        <h6 className="text-xl my-3  font-extrabold tracking-wide">
          Services Offered
        </h6>
        <div className="grid lg:grid-cols-2 gap-6 text-justify my-3 text-xl ">
          {services.map((service) => (
            <div className="lg:col-span-1 bg-gray-300 rounded-lg shadow-lg">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default index;
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log("SERVER", services);
//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
