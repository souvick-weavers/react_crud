import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPosts } from "../../../api";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Delete from "../delete/Delete";

const User = () => {
  //   const getPostData = async () => {
  //     try {
  //       const res = await fetchPosts();
  //       return res.status === 200 ? res.data : [];
  //     } catch (error) {
  //       console.log(error);
  //       return [];
  //     }
  //   };

  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  //   console.log("data", data);
  //  console.log("getPostData", getPostData);

  const queryClient = useQueryClient();
  //   delete
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      //   console.log(data, id);
      queryClient.setQueryData(["posts"], (currElement: any) => {
        return currElement?.filter((post: any) => post.id !== id);
      });
    },
  });

  return (
    <div>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>sl.no</th>
              <th>user_id</th>
              <th>title</th>
              <th>body</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item: any, index: number) => {
              const { id, title, body } = item;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{body}</td>
                  <td>
                    <Button variant="success btn-sm">Update</Button>
                  </td>
                  <td>
                    {/* delete */}
                    {/* <Delete /> */}

                    <Button
                      variant="danger btn-sm"
                      onClick={() => deleteMutation.mutate(id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default User;
