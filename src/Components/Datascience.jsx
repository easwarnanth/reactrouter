import React from 'react';
import Card from './Card';
const Datascience = ({data}) => {

        const Data=data.filter((item)=>item.head==="DATA SCIENCE")
    return (
        <div>
            <div className="container">
            
            <div className="row">
            {Data.map((item,index)=>{
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

export default Datascience;