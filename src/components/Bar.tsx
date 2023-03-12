import React, { FunctionComponent } from "react";
import { ISkill } from "../../type";

export const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
      <div
        className="px-4 py-1 flex items-centre rounded-full bg-gradient-to-r from-green-default to-blue-600"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};
