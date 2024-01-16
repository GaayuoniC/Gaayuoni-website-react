import { CvPdf } from "../components/CvPdf";
import { useState } from "react";
export function Cv() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <h1>My CV</h1>

      {isLoading ? <p> loading page... </p> : <CvPdf />}
    </>
  );
}
