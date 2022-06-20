import React,{useEffect, useState} from "react";

const FunctionalApp =({level})=>{
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState(null);

  useEffect(()=>{
    // console.log("Component is Mounted")
    // document.title = 'Anda telah klik ${counter} kali';
    // console.log({posts})
  })

  // useEffect(()=>{
  //   console.log('Functional Component did mount')
  //   const getPosts = async () => {
  //     const fetchPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const jsonPosts = await fetchPosts.json();
  //     setPosts(jsonPosts);
  //   }  
  //   getPosts();
  // },[])

  useEffect(()=>{
    // console.log("State yang berubah adalah " )
    console.log("Counter nilainya adalah", level )
    console.log({level})
    if(level<10){
      console.log("Peringkat 1")
    }else if(level <20){
      console.log("Peringkat 2")
    }else{
      console.log("Peringkat 3")
    }
  },[ level, counter, posts])

  return (
    <div className="app functional-app">
        <h1>Functional Compnent</h1>
         <h2>Counter: {counter}</h2>
         <button onClick={()=> setCounter(counter+1)}>
            Add Counter
         </button>
    </div>
)
}


export default FunctionalApp;