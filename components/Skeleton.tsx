import React from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={`animate-pulse w-full h-4 bg-gray-300 darrk:bg-gray-700 rounded-md ${className}`}
    ></div>
  );
};

export default Skeleton;
