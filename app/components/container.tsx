"use client";

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (

    // This container is just a div that gives a MAXIMUM WIDTH , AUTO HORIZONTAL MARGIN on both sides for placing the contents inside this div container in the center of the horizontal axis &  a HORIZONTAL PADDING for giving some space in the horizontal axis ( different for different screen resolutions ).
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
