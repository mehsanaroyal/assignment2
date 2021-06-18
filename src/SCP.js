import React from 'react';

const SCP = ({scp}) =>
{
    return(
        
        
        <div>
            
            {
               scp.map(
                   (scp) => (


                    <div key={scp.item} className="card mb-3 bg-light">
                    <h2 className="card-title text-center text-danger"> SCP Page {scp.item}</h2>
                  <div className="text-center">
    <img src={scp.image} className="rounded img-fluid" alt=""></img></div>
    <div className="card-body">
  
    <h3 className="card-title text-dark">Class : {scp["class"]}</h3>
      <h3 className="card-title text-success">Description</h3>
      <p className="card-text">{scp["discription"]}</p>
      <h3 className="card-title text-success">Containment</h3>
      <p className="card-text">{scp["containment"]}</p>
    </div>
  </div>

                 
                   )
               )
            }

        </div>

    )
};

export default SCP;