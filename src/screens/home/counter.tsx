
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
 
interface Props {
  count: number;
  lastName?: string;
}

const Counter: React.FC<Props> = ({
  count,
  lastName
}) => {
    return (
      <div>
        {lastName} : {count}
      </div>
    )
}
 
export default Counter;
