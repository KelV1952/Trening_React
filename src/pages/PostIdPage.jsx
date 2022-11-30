import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loder';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchCommByPost, isCommLoading, commError] = useFetching(
    async (id) => {
      const response = await PostService.getCommByPost(id);
      comments = setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommByPost(params.id);
  }, [params.id]);

  return (
    <div>
      <h2>Вы перешли на страницу поста id={params.id}</h2>

      <h3>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            Наименование поста:
            {post.id}. {post.title}
          </div>
        )}
      </h3>
      <div>
        {isCommLoading ? (
          <Loader />
        ) : (
          <div>
            <h4>Комментарии:</h4>
            <div>
              {comments.map((com) => (
                <div key={com.id}>
                  <div style={{ marginTop: 15 }}>
                    <h5>
                      {com.email}. {com.name}
                    </h5>
                  </div>
                  <did> {com.body} </did>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PostIdPage;
