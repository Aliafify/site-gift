import React,{useContext} from "react";
import { Link } from "react-router-dom";
import Context from './../context/context';

function Gift({ posts }) {
    const onClick =(e)=>{
      setGift(e);
      document.getElementById('gift').style={backgroundColor:"blue"}
    }
    const {gift} = useContext(Context);
    const[Gift , setGift] =gift ;
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Listes des cadeaux à acheter</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <h3 value={post.title} onClick={(event)=>{setGift(event.target.value)}}>{post.title}</h3>
               {post.pic && <img alt='picture' src={post.pic} width="250px" height="250px"/>}
                <Link className="gift-link"  to="/gift" >
                  Git Your Gift
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Gift;
