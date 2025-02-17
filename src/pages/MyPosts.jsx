import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import blogServices from "../appwrite/blogServices";
import { useSelector } from "react-redux";
import user from "../appwrite/authServices";

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.authSlice.userData);
  const [email, setEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  try {
    user.getAccount().then((account) => {
      if (account) {
        setEmail(account.email);
        setUserId(account.userId);
      }
    });
  } catch (error) {
    console.log(error)
  }


  useEffect(() => {
    blogServices.getMyPosts().then((posts) => {
      if (posts) {
        const userPosts = posts.documents.filter((post) => {
          return post.userId === userData.userData.$id;
        });
        setPosts(userPosts);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        
        <h1 className="text-4xl font-bold mb-4 ">My blog posts.</h1>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className=" w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MyPosts;
