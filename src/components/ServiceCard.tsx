import { title } from "process";
import React, { FunctionComponent } from "react";
import { IService } from "../../type";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { title, about, Icon },
}) => {
  const creatMarkup = () => {
    return { __html: about };
  };
  return (
    <div className="p-2 flex items-center space-x-4">
      <Icon className=" text-green-default h-10 w-10 pl-2 " />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={creatMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
