import React, { useMemo } from 'react';

export default (props) => {
  const data = useMemo(
    () => props.api.getDisplayedRowAtIndex(props.rowIndex).data,
    []
  );

  return (
    <div
      className="custom-tooltip"
      style={{ backgroundColor: props.color || 'white' }}
    >
    <p>
        <span>Name: </span> {data.name}
      </p>
      <p>
        <span>Email:{data.email}</span>
      </p>
    </div>
  );
};