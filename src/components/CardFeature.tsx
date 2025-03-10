"use client";
import { useState } from "react";
import { FeatureProps } from "@/models/feature.model";
import { Card, CardBody, Image, Button, Modal, ModalBody, ModalHeader, ModalFooter, useDisclosure, ModalContent } from "@nextui-org/react"; // Make sure you're importing from @nextui-org/react
import Cards from "./CardModals";
import CardModals from "./CardModals";

export default function CardFeature({ name, description, price, imageUrl }: FeatureProps) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            {/* Product Card */}
            <Card className="relative rounded-lg shadow-sm border border-gray-200 bg-white group overflow-hidden">
                {/* Product Image */}
                <CardBody className="relative p-0">
                    <Image alt={name} className="object-cover rounded-lg w-full  transition-transform duration-300" src={imageUrl} width={250} height={200} />

                    {/* Hover Effect - Show "View" Button */}
                    <div className="absolute z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button color="primary" onPress={onOpen}>View</Button> {/* Use onPress for NextUI Button */}
                    </div>
                </CardBody>
            </Card>

            {/* Modal for Product Details */}
            <Modal
                size="2xl"
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                isOpen={isOpen}
                onOpenChange={onOpenChange}>
                
                <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
                        <ModalBody>
                            <CardModals 
                                name={name}
                                description={description}
                                price={price}
                                imageUrl={imageUrl}
                            />
                            
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                            Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Add Card
                            </Button>
                        </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
