import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, fetchPosts } from '../../CRUD/Posts/PostsSlice';

const Home = () => {
  let i = 1;

  // console.log(posts);

  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchPosts());
  },[])

  let {isLoading, posts,error} = useSelector((state) => state.postsReducer);
  localStorage.setItem("data",JSON.stringify(posts) );
  var storedData = JSON.parse(localStorage.getItem("data"));
 console.log(storedData);


  const handleDelete = (id) => {
    dispatch(deletePost(id));
  }
  return (

    <div className='my-5'>
          {isLoading && <div class="flex items-center justify-center">
  <div
    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span
    >
  </div>
</div> } 
          {error && <h2>{error}</h2>  } 
          {storedData.length!=[] && 

      <h1 className='text-lg font-bold  my-3'>Comment table</h1>}
      <Link to={"/addpost"}>
        {storedData.length==[] &&
        <h1 className='text-lg font-bold  my-3'>Please Reload the Page</h1>
        
        }
        <button className="my-2 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add a Post</button></Link>
      <div className="overflow-x-auto flex justify-center ">
        <table className="table table-compact overflow-hidden my-5 ">
          <thead>
            <tr>

              <th>Id</th>
              <th>User id</th>
              <th>name</th>
              <th>body</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {

storedData?.map((data) =>{

                const{userId,id,title,body}=data;
                return(
                <tr key={id}>
   
                  <td>{id}</td>
                  <td>{userId}</td>
                  <td>{title}</td>
                  <td style={{overflow: "hidden"}} className='w-5'>. . . </td>

                  <td>
                  <Link to={"/showpost"} state={{id,title,userId,body}} >  <button className="btn btn-success">Show</button></Link>
                    <Link to={"/editpost"} state={{id,title,userId,body}} ><button className="btn btn-warning">Edit</button></Link>
                    <button onClick={() => handleDelete(id)} className="btn btn-error">Delete</button>
                  </td>
                </tr>
                )
                })
                
            }

          </tbody>

        </table>
      </div>
      
    </div>
  );
};

export default Home;