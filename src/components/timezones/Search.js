import React from "react";
import { Input, AutoComplete } from "antd";

const Search = ({
  timezones,
  selectedValue,
  setSelectedValue,
  onSelectTimezone
}) => {
  const generateOptions = (timezones) => {
    //To adapt to the format requested by the Autocomplete component of Antd
    const options = timezones.map((timezone) => {
      return {
        value: timezone.name,
        text: timezone.name
      };
    });
    return options;
  };

  return (
    <div className="search-container">
      <span className="search-title">Search Timezone:</span>
      <AutoComplete
        className="search-bar"
        options={generateOptions(timezones)}
        filterOption={(inputValue, option) =>
          option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onSelect={(value) => onSelectTimezone(value)}
        defaultValue={selectedValue}
        value={selectedValue}
        onChange={(value) => setSelectedValue(value)}
      >
        <Input.Search size="large" placeholder="Enter the name of the zone" />
      </AutoComplete>
    </div>
  );
};
export default Search;
