import React from 'react';

const List = ({list}) =>
  <div className="list" key={list.id}>
    <h3>{list.name}</h3>
  </div>

export default List;
