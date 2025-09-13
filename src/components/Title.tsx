// src/components/Title.tsx
import "./Title.css";

type TitleProps = {
  str: string;
};

const Title = ({ str }: TitleProps) => {
  return <h1 className="title">{str}</h1>;
};

export default Title;