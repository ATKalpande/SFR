import React from "react";
import ddata from "./data"

import Carousel from "react-elastic-carousel";


const breakPoints = 
[
  {
  
    itemsToShow: 1,
    
  },
  {
   
 
   itemsToShow:2,
   
  },
  {
    
    itemsToShow: 3
  },
  {
    
    itemsToShow: 4,
  },
  {
    // width:1,
    itemsToShow:5,
  },
  {
    // width:300,
    itemsToShow:6,
  },
  {
    // width:2,
    itemsToShow:7,
  },
  {
    // width:120,
    itemsToShow:8,
  },
  {
    // width:120,
    itemsToShow:9,
  },

];




export const Slider = () => {
  return (
    <>

   
    <Carousel className="" enableAutoPlay autoPlaySpeed={1500}    breakPoints={breakPoints}>
      {ddata.map((d)=>{
        return(
          <div  className="">
            
            <article key={d.id}>
              
            <a href="#">
                  <img src={d.image} alt={d.description} />
                  <h3 className="text-bold text-center mt-2">{d.text}</h3>
                </a>
                
            </article>
          </div>
        )
      })}
  {/* <Item>1</Item>
  <Item>2</Item>
  <Item>3</Item>
  <Item>4</Item>
  <Item>5</Item>
  <Item>6</Item> */}
 
</Carousel>
   
      </>
    
  );
};
