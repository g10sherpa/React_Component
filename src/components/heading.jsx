import React from 'react';

function Heading(){
    const date = new Date();
    const currentTime = date.getHours();

    let greeting;

    const customStyle = {
        color:""
    };

    if(currentTime < 12){
        greeting = "good morining";
        customStyle.color="yellow";
    }else if(currentTime<18){
        greeting="good afternoon";
        customStyle.color="red";
    }else{
        greeting = "good night";
        customStyle.color="blue";
    }

    return(
        <h1 className="heading" style={customStyle}>
            {greeting}
        </h1>
    );
}

export default Heading;







// function Heading(){
//     return <h1>Places</h1>;
// }

// export default Heading;