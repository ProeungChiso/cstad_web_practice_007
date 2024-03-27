"use client"
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { ProductType } from "@/types/product";

export default function ProductCardComponent({title, thumbnail, description}:ProductType) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-default-500">{description}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={thumbnail}
          width={512}
        />
      </CardBody>
    </Card>
  );
}
