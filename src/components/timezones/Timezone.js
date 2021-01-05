import React, { useState, useEffect } from "react";
import { Button, Spin, notification } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import getTimezoneByName from "../../api/getTimezoneByName";

const Timezone = ({ timezoneToShow, onDeleteTimezone }) => {
  const [loading, setLoading] = useState(false);
  const [timezone, setTimezone] = useState(timezoneToShow);

  useEffect(() => {
    setLoading(true);
    async function fetchTimezone() {
      try {
        const { data } = await getTimezoneByName(timezone.name);
        setTimezone(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        notification.error({
          message: "Error trying to fetch the details for a Timezone",
          description: `An error occurred while trying to get the timezone details of ${timezone.name}`
        });
        setLoading(false);
      }
    }

    fetchTimezone();
  }, [timezone.name]);

  return (
    <div className="timezone">
      <span className="title-timezone">{timezone.name}</span>
      {!loading ? (
        <div className="content-timezone">
          <span>{timezone.date ? timezone.date : ""}</span>
          <span>{timezone.time ? timezone.time : ""}</span>
        </div>
      ) : (
        <div className="spinner-timezone">
          <Spin />
        </div>
      )}

      <Button
        className="option-button"
        onClick={() => onDeleteTimezone(timezone.name)}
        danger
      >
        <DeleteOutlined />
        Delete
      </Button>
    </div>
  );
};

export default Timezone;
