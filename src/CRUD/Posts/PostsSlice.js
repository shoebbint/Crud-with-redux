import axios from "axios";
import { useSelector } from "react-redux";
var storedData = JSON.parse(localStorage.getItem("data"));
const {createSlice, createAsyncThunk}=require("@reduxjs/toolkit");
// const initialPosts={
//     posts:[
//         {
//             id:1,title:"something",author:"abul"
//         },
//         {
//             id:2,title:"special",author:"Babul"
//         }
//     ],
// };
export const fetchPosts = createAsyncThunk("posts/fetchPosts",async()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
    return(res.data);
})


export const postsSlice  = createSlice({
    name:"posts",
    initialState:{
isLoading:false,
posts:[],
localStorage:[],
error:null,

    } ,

    reducers:{
        showPosts:(state)=>state,

        addPost:(state,action)=>{
            state.posts.push(action.payload);
            localStorage.setItem("data",JSON.stringify([...state.posts,action.payload]) );
        },
        updatePost:(state,action)=>{
            const  {id,userId,title,body}=action.payload
         const isPostExist=   state.posts.filter(post=>post.id==id);
         if(isPostExist){
            isPostExist[0].userId=userId;
            isPostExist[0].title=title;
            isPostExist[0].body=body;
         }
        },
        deletePost:(state,action)=>{
            const id= action.payload;
            state.posts= state.posts.filter(post=>post.id!=id);
        },

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading=false;
            if(storedData.length===0)
       {   
            state.posts=action.payload;
            localStorage.setItem("data",JSON.stringify([...state.posts]) );
            state.error=null;
        }
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.isLoading=false;
            state.posts=[];
            state.error=action.error.message;
        })
    },
});
export const {addPost,deletePost,updatePost,extraReducers}=postsSlice.actions;
export default postsSlice.reducer;