import React, { useEffect } from "react";
import { PostCard } from "../components";
import { appwriteScrvice } from "../appwrite/config";
import { set } from "react-hook-form";

const AllPosts = () => {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    appwriteScrvice.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap ">
        {posts.map((post) => {
          <div key={post.$id} className="p-2 w-1/3 text-gray-900">
            <PostCard {...post} />
          </div>;
        })}
      </div>
    </div>
  );
};

export default AllPosts;
