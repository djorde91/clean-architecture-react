import { Button } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { useMessageForm, useTimeline } from '../../../application';

function MessageForm() {
  const { register, handleSubmit, reset } = useForm();
  const { submitPost, handleErrors } = useMessageForm();
  const { watchActiveUserPosts } = useTimeline();

  watchActiveUserPosts();

  const onValid = (data: FieldValues): void => {
    submitPost(data);
    reset();
  };

  const onInvalid = (errors: FieldValues): void => {
    handleErrors(errors);
  };

  return (
    <form
      data-testid="submitPost"
      data-cy="submitPost"
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="flex flex-col"
    >
      <textarea
        {...register('newPost', {
          required: 'Your tweet cannot be empty!',
          minLength: {
            value: 10,
            message: 'Your tweet is too short! Write more than 10 characters',
          },
          maxLength: {
            value: 140,
            message:
              'Your tweet is too long! It cannot be longer than 140 characters',
          },
        })}
        name="newPost"
        placeholder="Time to tweet something!"
        className="border-2 p-2 mb-3"
        rows={5}
      ></textarea>
      <Button
        data-cy="submitPost"
        type="submit"
        className="w-full sm:w-2/5 self-end"
        variant="contained"
        color="success"
      >
        Post
      </Button>
    </form>
  );
}

export default MessageForm;
