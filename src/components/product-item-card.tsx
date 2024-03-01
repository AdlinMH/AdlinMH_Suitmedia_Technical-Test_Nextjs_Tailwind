import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";

interface ProductItemCardProps {
  img: string;
  tag: Record<string, string>;
  title: string;
  label: string;
}

export function ProductItemCard({ img, tag, title, label }: ProductItemCardProps) {
  return (
    <Card className="border">
      <CardHeader className="h-64">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1]"
        />
      </CardHeader>
      <CardBody>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography className="mb-2 normal-case font-bold text-sm">
            {title}
          </Typography>
        </a>
        <div className="flex items-center gap-2">
          {Object.entries(tag).map((t, i) => (
            <div className="flex items-center justify-evenly">
              {i !== 0 && (<div className="mb-2 rounded-full bg-gray-800 h-1 w-1 mx-2 mr-3" />)}
              <Typography variant="small" color="blue" className="mb-2 font-normal text-gray-700" >
                {t[0]}:
              </Typography>
              <Typography variant="small" color="blue" className="mb-2 text-gray-700 font-semibold ml-1">
                {t[1]}
              </Typography>
            </div>
          ))}
        </div>
        <Typography color="black" className="mb- font-semibold ml-1" >
          {label}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ProductItemCard;