import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { createNewEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent, // 자동으로 요청하지 않고, 지정해줘야함. 아래 handleSubmit함수가 실행될 때마다 요청을 전송함
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'], exact: true }); // 쿼리 무효화 - 변경을 수행할 때 아주 중요함(모든 쿼리가 최신 데이터를 사용하도록 도와줌)
      // queryClient.invalidateQueries({ queryKey: ['events'], exact: true }); exact 정확히 일치하는것만 하고싶을때 사용
      navigate('/events');
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && 'Submitting...'}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={
            error.info?.message ||
            'Failed to create event. Please check your inputs and try again.'
          }
        />
      )}
    </Modal>
  );
}
