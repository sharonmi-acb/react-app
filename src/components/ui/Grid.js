import React from "react";

const Grid = ({ children, cols = 1, gap = 6, className = "", ...props }) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6",
  };

  const gridGap = {
    2: "gap-2",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
  };

  return (
    <div
      className={`grid ${gridCols[cols]} ${gridGap[gap]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
