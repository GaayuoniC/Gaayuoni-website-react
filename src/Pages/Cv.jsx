import { CvPdf } from "../components/CvPdf";
import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

export function Cv() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  //function for handling the loading state
  function handleLoading(loadingState) {
    setIsLoading(loadingState);
  }

  //function to handle errors:
  function handleError() {
    setHasError(true);
    setIsLoading(false);
  }

  return (
    <>
      <h1>My CV</h1>

      {isLoading ? (
        <div css={loadingContainerStyle}>
          <ClipLoader color={"#36d7b7"} loading={isLoading} />
        </div>
      ) : hasError ? (
        <p>Opps! something went wrong, please try again later.</p>
      ) : (
        <CvPdf
          onLoadStart={() => handleLoading(true)}
          onLoadEnd={() => handleLoading(false)}
          onError={() => handleError}
        />
      )}
    </>
  );
}
//use this to install spinners 'npm install react-spinners' !!!
//Also install the @emotion/react 'npm install @emotion/react'
const loadingContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;
