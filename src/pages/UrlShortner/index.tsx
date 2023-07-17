import { Box, Button, CopyButton, Flex, Input, Loader, Text } from "@mantine/core";
import { useState } from "react";

const UrlShortner = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const shortenUrl = async () => {
    if (!url) return;
    setLoading(true);
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();

    if (data?.ok) {
      const result = data?.result?.full_short_link;
      setResult(result);
    } else {
      setResult("");
    }

    setLoading(false);
  };

  return (
    <Box>
      <Text fw={"bold"} fz={"lg"} align="center">
        URL Shortner
      </Text>
      <Flex gap={5} py={20}>
        <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Type your link here" autoFocus />
        <Button onClick={() => shortenUrl()} rightIcon={loading ? <Loader color="white" size={"xs"} /> : ""}>
          GO
        </Button>
      </Flex>
      {result && (
        <Flex gap={10} align={"center"} py={20}>
          <Text>{result}</Text>
          <CopyButton value={result}>
            {({ copied, copy }) => (
              <Button color={copied ? "teal" : "blue"} onClick={copy}>
                {copied ? "Copied url" : "Copy url"}
              </Button>
            )}
          </CopyButton>
        </Flex>
      )}
    </Box>
  );
};

export default UrlShortner;
