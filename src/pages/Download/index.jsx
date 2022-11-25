import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Preview from "./Preview";

function Download() {
  const componentRef = useRef();
  return (
    <>
      <Preview ref={componentRef} />
      <div className="grid place-items-center">
        <ReactToPrint
          trigger={() => (
            <button className="w-52 bg-[#1570EF] text-white text-2xl">
              Download
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
    </>
  );
}

export default Download;
