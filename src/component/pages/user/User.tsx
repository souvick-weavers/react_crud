import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../../api';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Delete from '../delete/Delete';

const User = () => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  return (
    <div>
      <div className='container'>
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
                    <Button variant='success btn-sm'>Update</Button>
                  </td>
                  <td>
                    {/* delete */}
                    <Delete id={id} />
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
