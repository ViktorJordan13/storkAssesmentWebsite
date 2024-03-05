interface VerticalCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  height: number;
  width: number;
}

const VerticalCard = ({
  title,
  description,
  image,
  url,
  height = 300,
  width = 300,
}: VerticalCardProps) => {
  return <h1>Vertical Card</h1>;
};

export { VerticalCard };
