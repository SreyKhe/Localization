"use client";
import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { FeatureProps } from "@/models/feature.model";

export default function CardModals({ name, description, price, imageUrl }: FeatureProps) {
  // Declare the liked state
  const [liked, setLiked] = useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center relative">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover w-full rounded"
              height={200}
              src={imageUrl}
              width={200}
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">{name}</h3>
                <h1 className="text-large font-medium mt-2">{price}</h1>
                <p className="text-small text-foreground/80">{description}</p>
              </div>
            </div>
          </div>
          <Button
                isIconOnly
                className="absolute top-2 right-2 text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((prevLiked) => !prevLiked)} // Toggle the liked state
              >
                <FaRegHeart
                  className={liked ? "text-red-500" : "text-black-500"}
                  fill={liked ? "currentColor" : ""}
                />
              </Button>
        </div>
      </CardBody>
    </Card>
  );
}
