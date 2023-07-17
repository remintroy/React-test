import { Text } from "@mantine/core";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <Text fz={"xl"} fw={"bold"}>
        Welcome to playground
      </Text>
      <ul className="apps">
        <li onClick={() => navigate("/qrcode")}>
          <Text fw={"bold"} sx={{ textTransform: "capitalize" }}>
            qrcode generator
          </Text>
        </li>
        <li onClick={() => navigate("/url")}>
          <Text fw={"bold"} sx={{ textTransform: "capitalize" }}>
            url shortner
          </Text>
        </li>
        <li onClick={() => navigate("/")}>
          <Text fw={"bold"} sx={{ textTransform: "capitalize" }}>
            weather app
          </Text>
        </li>
        <li onClick={() => (window.location.href = "https://game.remin.tk")}>
          <Text fw={"bold"} sx={{ textTransform: "capitalize" }}>
            Fifteen puzzle
          </Text>
        </li>
      </ul>
    </div>
  );
}

export default Home;
