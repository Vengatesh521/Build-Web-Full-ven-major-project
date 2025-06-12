import React from "react";
import { appwriteScrvice } from "../appwrite/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, image }) => {
  console.log("PostCard", $id, title, image);
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 h-80 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteScrvice.getFilePreview(image)}
            alt={title}
            className="rounded-xl h-36"
          />
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
