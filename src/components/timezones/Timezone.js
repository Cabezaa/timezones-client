import React, { useState, useEffect } from "react";
import { Button, Spin, notification } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import getTimezoneByName from "../../api/getTimezoneByName";

import useIntervalHook from "../common/useIntervalHook";

const Timezone = ({ timezoneToShow, onDeleteTimezone }) => {
  const [loading, setLoading] = useState(false);
  const [timezone, setTimezone] = useState(timezoneToShow);
  const [fetchData, setFetchData] = useState(true);

  useEffect(() => {
    async function fetchTimezone() {
      try {
        if (fetchData) {
          setLoading(true);
          const { data } = await getTimezoneByName(timezone.name);
          setTimezone(data);
          setLoading(false);
          setFetchData(false);
        }
      } catch (error) {
        console.error(error);
        notification.error({
          message: "Error trying to fetch the details for a Timezone",
          description: `An error occurred while trying to get the timezone details of ${timezone.name}`
        });
        setLoading(false);
        setFetchData(false);
      }
    }
    //Call the async function
    fetchTimezone();
  }, [timezone.name, fetchData]);

  useIntervalHook(() => {
    setFetchData(true); //This will activate the useEffect and fetch the data again
  }, 5000);

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
