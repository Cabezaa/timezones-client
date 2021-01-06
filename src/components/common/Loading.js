import React from "react";
import spinner from "../../assets/spinner.gif";

const LoadingText = () => {
  return (
    <div>
      <img src={spinner} alt="loading..." />
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Fetching Data from the API .... Please Wait.
      </p>
    </div>
  );
};

//Component to show a Loading State
const Loading = ({ isLoading, children }) =>
  isLoading ? <LoadingText /> : children;

export default Loading;
