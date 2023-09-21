import React, { useEffect, useState } from 'react';

const totalStyle = { paddingBottom: '15px' };

export default (props) => {
  const [id, setId] = useState(0);
  

  const updateTotals = () => {
    let numId = 0;

    props.api.forEachNode(function (rowNode) {
      const data = rowNode.data;
      if(data.id) numId += data.id;
      
    });

    const totID = id;

    setId(totID);

   
  };

  useEffect(() => {
    props.api.addEventListener('modelUpdated', updateTotals);

    return () => props.api.removeEventListener('modelUpdated', updateTotals);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <span>
        <h2>
          <i className="fa fa-calculator"></i> Custom Stats
        </h2>
        <dl style={{ fontSize: 'large', padding: '30px 40px 10px 30px' }}>
          <dt style={totalStyle}>
            Total ID: <b>{id}</b>
          </dt>
          
        </dl>
      </span>
    </div>
  );
};