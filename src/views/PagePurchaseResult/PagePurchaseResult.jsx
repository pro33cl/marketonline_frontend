import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';


function PagePurchaseResult() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "1rem", width: "100%"}}>
      <Spinner animation="border" role="status"></Spinner>
      <div className='fs-4 fw-bold mt-3'>Redirigiendo a medio de pago ...</div>
    </div>
    
  )
}

export default PagePurchaseResult