import { Outlet, useNavigate } from "react-router-dom";
import "./style.scss";
import { Container, Text } from "@mantine/core";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <Text fw={"bold"} fz="lg" onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
          Playground
        </Text>
      </div>
      <Container className="app-container">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
