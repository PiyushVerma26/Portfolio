import React from "react";

function Container({ children }) {
  return (
    <div className="shadow-2xl min-h-16 w-full rounded-2xl mt-4 p-5">
      {children}
    </div>
  );
}

export default Container;
