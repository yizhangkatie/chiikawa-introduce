import React from "react";
import { Tabs, Tab, Card, CardBody, image } from "@nextui-org/react";

export default function ThirdSix  (){
    const tabs = [
        {
          id: "photos",
          label: "労働の鎧さん",
          image:"/images/third/ro_mo.png",
          content: {
            image: "/images/third/chocolate.png",
          }
        },
        {
          id: "music",
          label: "ラーメンの鎧さん",
          image:"/images/third/ramen.jpg",
          content: {
            image: "/images/third/ra_shi.png",
          }
        },
        {
          id: "videos",
          label: "ポシェットの鎧さん",
          image:"/images/usagi.jpg",
          content: {
            image: "/images/third/ramen.jpg",
           
          }
        }
      ];
    
      return (
    <div className="relative w-full h-content flex flex-col items-center justify-center pt-12 lg:pt-16">
        <div className="flex flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id}           
            title={
            <div className="flex items-center justify-center space-x-4">
              <button className="w-64 h-20 bg-pink-200 text-lg rounded-lg flex items-center justify-center border border-black">
                <img src={item.image} alt={item.label} className="w-16 h-16" />
                {item.label}
              </button>
            </div>
            }>
           
            <Card className="p-12"> 
              <CardBody>
                <div className="flex flex-row items-center justify-center">
                  <img src={item.content.image} alt={item.label} className="w-64 h-64" />
                  {/* <p className="text-sm text-gray-700">{item.content.text}</p>  */}
                </div>
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
      </div>
    </div>
  );
}






