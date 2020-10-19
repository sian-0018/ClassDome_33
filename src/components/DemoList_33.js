import React from 'react';
import Card_33 from './Card_33';

const DemoList_33 = ({demo}) => {
    return (
        <div>
            {
            demo.map( (user,i) =>{ 
                return(
                    <Card_33 
                    key={i}
                    id={user.id}
                    img={user.img}
                    name={user.name} 
                    text={user.text}/>
                )
            } )

            }
        </div>
    )
}
 export default DemoList_33;