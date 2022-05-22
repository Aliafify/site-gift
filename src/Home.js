import { useState, useEffect } from "react";
import axios from "axios";
import Question from "./components/Question";
import Gift from "./components/Gift";
import Context from './context/context'
import ChangeQuestion from "./components/changeQuestion";

{
  /* <script src="https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"></script>; */
}

const apiEndPoint = "http://localhost:3004/posts";
const apiEndPointCadeau = "http://localhost:3005/cadeau";

// cd src
//cd data
//json-server --watch db.json --port 3004
//json-server --watch cadeau.json --port 3005

const Home = () => {
  const [question, setQuestion] = useState([]);
  const [posts, setPosts] = useState([]);
  const [order, setOrder] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [message, setMessage] = useState("");
  const [gift, setGift] = useState({ state: false, gifts: [] });
  const [chooseGift, setChooseGift] = useState('')

// change sort of Questions randomly!
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
//// Base de donnée des Question  &&& Base de donnée des Cadeau
  useEffect(() => {
    axios.get(apiEndPoint).then((res) =>{ 
      const newquestions =shuffle(res.data);
      setQuestion(newquestions);
    })
    axios.get(apiEndPointCadeau).then((res) => setPosts(res.data));
  }, []);

  // const handleDeleteQ = async (p) => {
  //   p.bool = "FALSE";
  //   await axios.put(apiEndPoint + "/" + p.id, p);
  //   const index = question.indexOf(p);
  //   question[index] = p;
  //   setQuestion([...question]);
  // };

  // const handleUpdate = async (p) => {
  //   p.bool = "TRUE";
  //   await axios.put(apiEndPoint + "/" + p.id, p);
  //   const index = question.indexOf(p);
  //   question[index] = p;
  //   setQuestion([...question]);
  // };

  // const handleDelete = async (p) => {
  //   const originalPosts = posts;
  //   const deletePosts = posts.filter((post) => post.test != p.test);
  //   setPosts(deletePosts);

  //   try {
  //     await axios.delete(apiEndPointCadeau + "/" + p.id);
  //   } catch (err) {
  //     console.error(err);
  //     console.log(err)
  //   }
  // };

  const HandelAnswer = () => {
    if (answer === question[order].bool && order !== question.length - 1) {
      setOrder(order + 1);
      setAnswer(null);
      const post = posts.filter((p) => p.id === question[order].id);
      setGift({ ...gift, gifts: [...gift.gifts, ...post] });
    }
    if (
      answer !== question[order].bool &&
      answer !== null &&
      order !== question.length - 1
    ) {
      setOrder(order + 1);
      setAnswer(null);
    }
    if (answer === null) {
      setMessage("please choose your answer frist");
    }

    if (order >= question.length - 1) {
      setGift({ ...gift, state: true });
    }
  };
  return (
    <>
    <Context.Provider value={{gift:[chooseGift,setChooseGift]}}>
    <div className="App">
      {message}
      {question.length > 0 ? (
        <Question question={question[order]} setAnswer={setAnswer} />
      ) : null}

      <button onClick={() => HandelAnswer()} className="btn btn-danger btn-sm">
        1 ) C'est fini ? Clic
      </button>
      <div>{gift.state && <Gift posts={gift.gifts} />}</div>
    </div>
    </Context.Provider>
    </>
  );
};

export default Home;
