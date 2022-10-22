import { render } from '@testing-library/react';
import React, {Component, useEffect, useState} from 'react';

export default

function Count(){
 const [value, setValue] = useState (0);

return (
<div>
    <p>{value}</p>
    <button className='btn' onClick={()=>setValue(value-1)}>decrease</button>
    <button className='btn' onClick={()=>setValue(value+1)}>increase</button>
</div>
);
};

