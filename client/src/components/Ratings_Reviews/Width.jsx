import React, { useState, useEffect } from 'react';

const Width = ({chars}) => (
  <div>
    <b>Width</b>
    <div>
      <input className='feedbackChars'readOnly type="range" min="1" max="5" value={chars.characteristics.Width.value} name="width"></input>
      <div className='parent'><span className='r1'>Too narrow</span> <span className='r2'>Perfect</span> <span className='r3'>Too wide</span></div>
    </div>
  </div>
);

export default Width;