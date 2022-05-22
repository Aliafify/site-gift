import React,{useContext} from 'react';
import Context from './../context/context';

function ChoosenGift() {
    const {gift} = useContext(Context);
    const[Gift , setGift] =gift ;
    return ( <>
    <h1>
        Congratulations 
    </h1>

    <div>
        <h3>
            You got {Gift}
        </h3>
    </div>
    
    </> );
}

export default ChoosenGift;