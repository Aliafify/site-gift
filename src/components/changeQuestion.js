import React from 'react';

function ChangeQuestion({HandelAnswer}) {
    return ( <>
     <button
        onClick={() => HandelAnswer()}
        className="btn btn-danger btn-sm"
      >
        
        1 ) C'est fini ? Clic
      </button>
    </> );
}

export default ChangeQuestion;