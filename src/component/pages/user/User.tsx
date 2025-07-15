import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../../api";
import { Button, Card, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const User = () => {
  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostData,
  });
  console.log("data", data);
  //   console.log("getPostData", getPostData);

  return (
    <div>
      <div className="container">
        <Row xs={6} md={6} className="g-2">
          {data?.map((item: any) => {
            const { userId, title, body } = item;
            return (
              <Card border="primary" style={{ width: "18rem" }}>
                {/* <Card.Header>Header</Card.Header> */}
                <Card.Body>
                  <Card.Title>userID: {userId}</Card.Title>
                  <Card.Text>{title}</Card.Text>
                  <Card.Text>{body}</Card.Text>
                </Card.Body>
                <Button variant="primary">Primary</Button>
                <Button variant="danger">Delete</Button>
              </Card>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default User;
