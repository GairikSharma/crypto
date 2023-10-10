import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Error() {
  return (
    <>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>API fault</AlertTitle>
        <AlertDescription>
          ERR_FAILED 429 (Failed to fetch)
        </AlertDescription>
      </Alert>
    </>
  );
}

export default Error;
