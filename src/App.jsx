import { useState } from "react";
import AddPostForm from "./features/posts/AddPostForm";
import EditPostForm from "./features/posts/EditPostForm";
import PostsList from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layouts from "./components/Layouts";
import { Routes, Route, Navigate } from "react-router-dom";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
import LoginPage from "./features/users/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
         <Route path="edit/:postId" element={<EditPostForm />} /> 
        </Route>

<Route path="user">
<Route index element={<UsersList/>}/>
<Route path=":userId" element={<UserPage/>}/>
</Route>
<Route path="*" element={<Navigate to='/' replace />}/>
<Route path="login" index element={<LoginPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
