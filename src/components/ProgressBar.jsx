import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const ProgressBar = (props) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const { progress, strokeWidth, circleOneStroke, circleTwoStroke } =
    props;
  const center = 115 / 2;
  const radius = 115 / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);

    circleRef.current.style = "transition: stroke-dashoffset 850ms ease-in-out";
  }, [setOffset, progress, circumference, offset]);

  return (
    <>
      <svg
        className="svg bg-white dark:bg-transparent rounded-full"
        width= '115px'
        height= '115px'
      >
        <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="svg-circle"
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text x={`${center}`} y={`${center + 10}`} className="svg-circle-text">
          {progress.toFixed(1)}%
        </text>
      </svg>
    </>
  );
};

ProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired,
};

export default ProgressBar;
