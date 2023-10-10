import {VALID_MEMORY_OPTIONS} from "firebase-functions";

export const BATCH = {
  runWith: {
    fetchUrData: {
      timeoutSeconds: 300,
      memory: VALID_MEMORY_OPTIONS[1],
    },
    transferBigQuery: {
      timeoutSeconds: 300,
      memory: VALID_MEMORY_OPTIONS[1],
    },
  },
  schedule: {
    fetchUrData: "*/30 * * * *",
    transferBigQuery: "0 5 * * *",
  },
};
