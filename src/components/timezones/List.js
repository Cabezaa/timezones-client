import React from "react";
import Timezone from "./Timezone";

const List = ({ timezones }) => {
  //   if (!timezones || timezones.length === 0) return <p>No Timezones, sorry</p>;

  timezones = [{}, {}, {}, {}, {}];
  return (
    <div className="container">
      {timezones.map((timezone) => (
        <Timezone key={timezone._id} timezone={timezone} />
      ))}
    </div>
  );
};
export default List;
