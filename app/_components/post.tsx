"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosHeart, IoIosHeartEmpty, IoIosShareAlt } from "react-icons/io";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import "@/app/_styles/post.css";

const Post = () => {
  const [isLiked, setIsLiked] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="post-main">
      <h1 className="post-title">Hello</h1>
      <p className="post-author-date">
        <span>Author</span>
        <span> • </span>
        <span>12th Jan, 2024</span>
      </p>
      <div>
        <Image
          src="https://via.placeholder.com/150"
          width={150}
          height={150}
          loading="lazy"
          alt="Post Image"
        />
      </div>
      <p className="post-body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi unde
        error molestias. Hic, unde ad? Eum repudiandae deleniti, impedit
        doloremque repellat nisi rem voluptatem, odio asperiores praesentium
        dolor voluptatibus atque officiis, quidem nobis velit! Consequatur
        temporibus quos blanditiis optio ipsam quis fuga similique laboriosam
        assumenda facere, iusto sequi debitis iste.
      </p>
      <div className="post-action-section">
        <span>
            {isLiked ? <IoIosHeart /> : <IoIosHeartEmpty />}
        </span>
        <span>
            <FaRegComment />
        </span>
        <span>
            <IoIosShareAlt />
        </span>
        <span className="post-save-section">
            {isSaved ? <IoBookmark /> : <IoBookmarkOutline />}
        </span>
      </div>
    </div>
  );
};

export default Post;
