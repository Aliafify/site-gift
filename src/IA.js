import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

<script src="https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"></script>;

const apiEndPoint = "http://localhost:3004/posts";
const apiEndPointCadeau = "http://localhost:3005/cadeau";

// cd src
//cd data
//json-server --watch cadeau.json --port 3005

const IA = () => {
  const [posts, setPosts] = useState([]);
  const [question, setQuestion] = useState([]);

  //// Base de donnée des Question
  useEffect(() => {
    const updateData = async () => {
      const newQuestion = await axios.get(apiEndPoint);
      setQuestion(newQuestion.data);
    };
    updateData();
  }, []);

  //// Base de donnée des Cadeau
  useEffect(() => {
    const updateData = async () => {
      const newPosts = await axios.get(apiEndPointCadeau);
      setPosts(newPosts.data);
    };
    updateData();
  }, []);

  const handleDelete = async (p) => {
    const originalPosts = posts;
    const deletePosts = posts.filter((post) => post.test != p.test);
    setPosts(deletePosts);

    try {
      await axios.delete(apiEndPointCadeau + "/" + p.id);
    } catch (ex) {
      setPosts(originalPosts);
    }
  };

  const Rep_quest = async (p) => {
    for (let i = 0; i < posts.length; i++) {
        console.log("test");
        if (question[i].bool != "TRUE") {
          console.log("nouveau if");
          for (let j = 0; j < posts.length; j++) {
            if (question[i].tag != posts[j].test) {
              console.log("marche" + { i });
              console.log(posts[i]);
              handleDelete(posts[i]);
            }
          }
      }
    }
  };

  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th>Cadeaux</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => Rep_quest(posts)}
        className="btn btn-danger btn-sm"
      >
        {" "}
        Actualiser Cadeaux 
      </button>
    </div>
  );
};

export default IA;
