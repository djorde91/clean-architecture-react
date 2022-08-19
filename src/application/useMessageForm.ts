import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../redux/slices/userReducer';
import { FieldValues } from 'react-hook-form';
import { toast } from 'react-toastify';
import { RootState } from '../redux/store';
export function useMessageForm() {
  const dispatch = useDispatch();
  const activeUser = useSelector((state: RootState) => state.activeUser);

  function submitPost(data: FieldValues): void {
    const post = {
      text: data.newPost,
      publishDate: Date.now(),
      user: {
        username: activeUser.data.username,
      },
    };
    dispatch(addPost(post));
    toast.success('Your message was submitted!');
  }

  function handleErrors(errors: FieldValues): void {
    toast.error(errors?.newPost.message);
  }

  return { submitPost, handleErrors };
}
