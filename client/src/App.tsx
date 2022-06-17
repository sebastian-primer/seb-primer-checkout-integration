import useClientSession from "./hooks/useClientSession";
import Checkout from "./Checkout";

function App() {
  const { clientSession } = useClientSession();

  if (!clientSession || !clientSession.clientToken) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Here is the checkout:</h1>
      <Checkout clientToken={clientSession.clientToken} />
    </div>
  );
}

export default App;
