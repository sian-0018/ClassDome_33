import React from 'react';
const Scroll_33 = (props) => {
	return <div 
        style={{ 
        overflow: 'scroll', 
        border: '1px solid black', 
        height: '800px' }}> 
        {props.children} 
        </div>;
};
export default Scroll_33;
