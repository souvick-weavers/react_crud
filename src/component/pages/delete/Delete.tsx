import { Button } from 'react-bootstrap';
import { useDeleteUser } from '../../../hooks/useUserHooks';
import { useQueryClient } from '@tanstack/react-query';

// import { useParams } from "react-router";
const Delete = ({ id }: { id: string | number }) => {
  const { mutate: deleteUserMutation, isPending } = useDeleteUser();
  const queryClient = useQueryClient();

  const handleDeleteUser = (id: string | number) => {
    deleteUserMutation(id, {
      onSuccess: () => {
        // alert(`User Deleted successfully ${id}`);
        // queryClient.invalidateQueries({ queryKey: ['posts'] });
      },
    });
  };

  return (
    <div>
      <Button variant='danger btn-sm' onClick={() => handleDeleteUser(id)} disabled={isPending}>
        {isPending ? 'Deleting...' : 'Delete'}
      </Button>
    </div>
  );
};

export default Delete;
