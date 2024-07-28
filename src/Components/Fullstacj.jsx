import React from 'react';
import Card from './Card';

const Fullstacj = ({data}) => {
    const fsd=data.filter((item)=>item.head==="Full Stack Development")
    return (
        <div>
        
            <div className="container">
            
            <div className="row">
            {fsd.map((item,index)=>{
                return(
                    <>
                    <Card item={item} index={index} />
                    </>
                )
            })}
            </div>
        </div>
        </div>
    );
};

export default Fullstacj;