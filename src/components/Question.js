import React from 'react';

function Question({question,setAnswer}) {
  const handelAnswer =(e)=>{
  
    setAnswer(e);

  }
    return ( <>
    <table className="table">
        <thead>
          <tr>
            <th>Questions</th>
          </tr>
        </thead>
        <tbody>
          
            <tr key={question.id}>
              <td>{question.title}</td>
              <td>
                <button value="TRUE"
                  onClick={(event)=>handelAnswer(event.target.value)}
                  className="btn btn-info btn-sm"
                >
                
                  Oui
                </button>
              </td>
              <td>
                <button
                value="FALSE"
                 onClick={(event)=>handelAnswer(event.target.value)}
                  className="btn btn-danger btn-sm"
                >
                  
                  Non
                </button>
              </td>
            </tr>
          
        </tbody>
      </table>
    </> );
}

export default Question;