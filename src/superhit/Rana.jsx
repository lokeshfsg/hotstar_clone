import React from 'react';

function Rana(des){

    const renderNine = ({des}) => {
        if(des){
            return des.map((value) => {
                return(
                    <div key={value.id} className="mat">
                        <img className="product-img" src={value.img} alt={value.name} />
                        <br/><br />
                        <h2>Type is : {value.type}</h2>
                        <br/><br />
                        <p>{value.description}</p>
                        <h4>rating : {value.rating}</h4>
                        {value.video && (
                            <div>
                                <br/><br />
                                <video controls width="100%" height="auto">
                                    <source src={value.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </div>
                )
            })
        } 
    }

    return(
        <div>
           {renderNine(des)}
        </div>
    )
}

export default Rana;
