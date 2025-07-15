import { useMutation } from "@tanstack/react-query";
import { Button } from "react-bootstrap";
import { deletePost } from "../../../api";
// import { useParams } from "react-router";

const Delete = () => {
  //   const { id } = useParams();
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
  });

  return (
    <div>
      <Button variant="danger btn-sm" onClick={() => deleteMutation.mutate(id)}>
        Delete
      </Button>
    </div>
  );
};

export default Delete;
