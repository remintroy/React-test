import QRCodeSVG from "qrcode.react";
import { useState } from "react";
import "./index.scss";
import { Box, Button, Flex, Input, Text, Textarea } from "@mantine/core";

const Qrcode = () => {
  const [value, setValue] = useState("Hey, there");
  const [fg, setFg] = useState("#000000");
  const [bg, setBg] = useState("#FFFFFF");

  const handleDownload = () => {
    // Get the SVG element you want to save.
    const svgElement = document.getElementsByTagName("svg")?.[0];
    if (svgElement) {
      const svgContent = new XMLSerializer().serializeToString(svgElement);
      const downloadLink = document.createElement("a");
      downloadLink.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
      downloadLink.download = "qrcode_playground.svg";
      document.body.appendChild(downloadLink);
      downloadLink.click();
    }
  };

  return (
    <Box className="qr_page">
      <Text fz={"lg"} fw={"bold"} align="center">
        QR-code generator
      </Text>
      <div className="qr_view">
        <QRCodeSVG fgColor={fg} bgColor={bg} renderAs="svg" className="qrcode" value={value} />
      </div>
      <Flex direction={"column"} gap={10}>
        <Textarea autosize placeholder="Type here qrcode content" value={value} onChange={(e) => setValue(e.target.value)} />
        <Box>
          <Text size={"sm"}>Qrcode color</Text>
          <Input type="color" value={fg} onChange={(e) => setFg(e.target.value)} />
        </Box>
        <Box>
          <Text size={"sm"}>Background color</Text>
          <Input type="color" value={bg} onChange={(e) => setBg(e.target.value)} />
        </Box>
        <Button onClick={() => handleDownload()} fullWidth mt={10}>
          Save as svg
        </Button>
      </Flex>
    </Box>
  );
};

export default Qrcode;
