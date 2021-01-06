import React from "react";
import Timezone from "./Timezone";
import { Empty } from "antd";

const List = ({ timezones, onDeleteTimezone }) => {
  if (!timezones || timezones.length === 0)
    return (
      <div className="empty-data">
        <Empty
          className="description"
          description={
            <span>No timezones to show. Add one in the above selector</span>
          }
        />
      </div>
    );

  return (
    <div className="list-container">
      {timezones.map((timezone) => (
        <Timezone
          key={timezone._id}
          timezoneToShow={timezone}
          onDeleteTimezone={onDeleteTimezone}
        />
      ))}
    </div>
  );
};
export default List;
