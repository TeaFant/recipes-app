import React from 'react';
import PopRecepti from './PopRecepti';

function Recipe({name, steps, image, link}) {

  const style = name.length > 25 ? 
  {fontSize:17} : {name} ;

  return (
    <div className="recipes" >
      <div className="recipes-header">
      <h4 style={style}>{name}</h4>
      </div>
      <img src={image} loading="lazy" alt="food" />
      
      <PopRecepti name={name}
                  link={link}
                  steps={steps}
      />
    </div>
  );
}

export default Recipe;