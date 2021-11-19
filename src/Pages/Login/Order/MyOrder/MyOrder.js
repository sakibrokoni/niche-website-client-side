import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";
import ShowOrder from "../ShowOrder/ShowOrder";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user, admin } = useAuth();
  // For Status Showing
  const showBtn = false;

  useEffect(() => {
    fetch("https://rocky-sands-89317.herokuapp.com/orders/manageAllOrders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);
  // Checking With Email
  const check = myOrders.filter((myOrder) => myOrder.email === user.email);
  //   DELETE AN USER
  const handleDeleteUser = (_id) => {
    const proceed = window.confirm("Are you sure You want to delete ? ");
    if (proceed) {
      const url = `https://rocky-sands-89317.herokuapp.com/order/delete/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())

        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted SuccessFully");
            const remainingUsers = myOrders.filter((user) => user._id !== _id);
            setMyOrders(remainingUsers);
          }
        });
    }
  };
  return (
    <Container>
      {admin ? (
        <Container>
          <Row>
            <h3 className="text-center fw-bold">
              Administration Mode <br />
              {user.displayName}.
            </h3>
            <Col xs={10} md={6} className="mx-auto my-5">
              <Image
                src="https://www.creativefabrica.com/wp-content/uploads/2020/09/23/WELCOME-Graphics-5632158-1.jpg"
                rounded
                fluid
              />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          {check ? (
            <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
              {user.displayName}
              <span className="text-warning"> Orders</span>{" "}
            </h2>
          ) : (
            " "
          )}
          <Row xs={1} md={3} className="g-4" style={{ margin: "20px" }}>
            {check?.map((order) => (
              <ShowOrder
                order={order}
                key={order._id}
                handleDeleteUser={handleDeleteUser}
                showBtn={showBtn}
              ></ShowOrder>
            ))}
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default MyOrder;
