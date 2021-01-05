import React, { useState, useEffect } from "react";
import { Button, Spin, notification } from "antd";
import { CloseOutlined } from "@ant-design/icons";

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
      <Button
        className="option-button"
        onClick={() => onDeleteTimezone(timezone.name)}
        danger
        size="small"
        type="text"
      >
        <CloseOutlined />
      </Button>
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
    </div>
  );
};

export default Timezone;
