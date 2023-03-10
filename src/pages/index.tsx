import { GetServerSidePropsContext } from "next";
import React from "react";
import services from "./api/services";

export const index = ({ services }: any) => {
  console.log("CLIENT", services);
  return <div className="text-black">Hello World</div>;
};
export default index;
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();
  console.log("SERVER", services);
  return {
    props: {
      services: data.services,
    },
  };
};
