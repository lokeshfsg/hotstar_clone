import React from 'react';

function ProductList(prodlist){

    const renderList = ({prodlist}) => {
        if(prodlist){
            return prodlist.map((value) => {
                return(
                    <div key={value.id} className="mat">
                        <img className="product-img" src={value.img} alt={value.name} />
                        <br/><br />
                        <h2>Type is : {value.type}</h2>
                        <br/><br />
                        <p>{value.description}</p>
                        <h4>rating : {value.rating}</h4>
                    </div>
                )
            })
        } 
    }

    return(
        <div>
           {renderList(prodlist)}
        </div>
    )
}

export default ProductList;