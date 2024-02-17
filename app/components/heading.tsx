"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}
const Heading = ({ title, subtitle, center }: HeadingProps) => {
  return <div>Heading</div>;
};

export default Heading;
