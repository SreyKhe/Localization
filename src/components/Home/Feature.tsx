"use client"
import React, { useState } from 'react';
import featurItem from "@/data/featureItem.json";
import { FeatureProps } from '@/models/feature.model';
import CardFeature from '../CardFeature';
import {Pagination, PaginationItem, PaginationCursor} from "@heroui/pagination";

export default function FeatureHome() {
  const itemPerPage = 7;
  const [currentPage , setCurrentPage] = useState(1);
  const startIn = (currentPage - 1) *itemPerPage;
  const currentItems = featurItem.slice(startIn, startIn+itemPerPage);
  const handlePageChange = (page:number)=>{
    setCurrentPage(page);
  }
    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Featured Products ✨
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5">
                {currentItems.map((item: FeatureProps, index: number) => (
                    <div key={index} className=" transition-transform duration-300 items-center flex justify-center">
                        <CardFeature  
                          name={item.name}
                          description={item.description}
                          price={item.price}
                          imageUrl={item.imageUrl}
                        />
                    </div>
                ))}
            </div>
            <div className="my-5 flex justify-end">
              <Pagination 
                initialPage={currentPage}
                total={Math.ceil(featurItem.length / itemPerPage)}
                onChange={handlePageChange}
                // itemsPerPage={itemsPerPage}
                />
            </div>
        </div>
    );
}

