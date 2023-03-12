const posts = [
  {name: "Post1"},
  {name: "Post2"}
];

const listPost = () => {
  posts.map((posts) => {
  console.log(posts.name);  
  });
};

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
  });
  return promise1;
};

async function showPosts(){
  try{
    await addPost({ name:"Post3"});
    listPost();
  } catch(error){
    console.log(error);
  }
}

showPosts();
