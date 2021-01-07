import React, { useState, useEffect } from "react";
import { notification } from "antd";

import Search from "./Search";
import List from "./List";

import Loading from "../common/Loading";

import getTimezones from "../../api/getTimezones";
import deleteTimezoneByName from "../../api/deleteTimezoneByName";
import putTimezoneByName from "../../api/putTimezoneByName";

import _ from "lodash";

const Container = () => {
  const [loading, setLoading] = useState(false);
  const [timezones, setTimezones] = useState([]);
  const [timezonesToShow, setTimezonesToShow] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function fetchTimezones() {
      try {
        const { data } = await getTimezones();

        const timezonesToShow = data.filter((timezone) => {
          //check for saved timezones to show
          return timezone.show;
        });

        setTimezonesToShow(timezonesToShow);
        setTimezones(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        notification.error({
          message: "Error when trying to GET the list of Timezones"
        });
        setLoading(false);
      }
    }

    fetchTimezones();
  }, []);

  const onDeleteTimezone = async (name) => {
    try {
      await deleteTimezoneByName(name);
      const timezonesToShowFiltered = timezonesToShow.filter((timezone) => {
        //remove the deleted timezone
        return timezone.name !== name;
      });
      setTimezonesToShow(timezonesToShowFiltered);
    } catch (error) {
      notification.error({
        message: "Error trying to delete a Timezone",
        description: `An error occurred while trying to delete the timezone ${name}`
      });
    }
  };

  const onSelectTimezone = async (name) => {
    try {
      //first we need to check if the timezone is not already selected
      //i will use lodash to be more clear and simple
      if (_.findIndex(timezonesToShow, { name: name }) === -1) {
        const { data } = await putTimezoneByName(name);
        const timezonesToShowFiltered = timezonesToShow.filter((timezone) => {
          //remove the old timezone
          return timezone.name !== name;
        });
        setTimezonesToShow([...timezonesToShowFiltered, data]);
        setSelectedValue(null);
      } else {
        //Already showing the timezone
        setSelectedValue(null);
        notification.warning({
          message: "The timezone that you are selecting it's already displayed"
        });
      }
    } catch (error) {
      notification.error({
        message: "Error trying to update a Timezone",
        description: `An error occurred while trying to update the timezone ${name}`
      });
    }
  };

  return (
    <>
      <Search
        timezones={timezones}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        onSelectTimezone={onSelectTimezone}
      />
      <Loading isLoading={loading}>
        <List timezones={timezonesToShow} onDeleteTimezone={onDeleteTimezone} />
      </Loading>
    </>
  );
};

export default Container;
