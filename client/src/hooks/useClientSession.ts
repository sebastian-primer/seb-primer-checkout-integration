import { useEffect, useState } from "react";
import { ClientSession } from "./types";

const API_ROOT = "http://localhost:8000";

const useClientSession = () => {
  const [clientSession, setClientSession] = useState<ClientSession>();

  useEffect(() => {
    async function fetchClientSession() {
      const clientSession = await fetch(`${API_ROOT}/client-session`, {
        method: "post",
      });
      setClientSession(await clientSession.json());
    }

    fetchClientSession();
  }, []);

  return { clientSession };
};

export default useClientSession;
