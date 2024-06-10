import './Post.css'

import { Routes, Route, useParams } from "react-router-dom";
import posts from 'json/posts.json'
import PostModelo from "components/PostModelo";
import Markdown from "react-markdown";
import NaoEncontrada from 'pages/NaoEncontrada';
import PaginaPadrao from 'components/PaginaPadrao';

const Post = () => {
    const params = useParams();
    const post = posts.find((item) => item.id === Number(params.id));

    if (!post) {
        return <NaoEncontrada />
    }

    const postElement = (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <Markdown>
                    {post.texto}
                </Markdown>
            </div>
        </PostModelo>
    )

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao/>}>
                <Route index element={postElement}/>
            </Route>
        </Routes>
    )
}

export default Post;