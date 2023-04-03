import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const ShowPost = () => {
    const location=useLocation();
const{id,userId,title,body}=location.state;
    // console.log(posts);
    return (
        <div>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Title : {title}</h1>
      <p>Id : {id}</p>
      <p>UserId : {userId}</p>
      <h3 class="text-3xl mb-8 leading-relaxed">Body :  {body}</h3>
      <div class="flex justify-center">
       <Link to={"/"}> <button  class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Home</button></Link>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default ShowPost;