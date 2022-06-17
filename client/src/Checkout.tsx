import { Primer } from "@primer-io/checkout-web";
import { useEffect } from "react";

interface Props {
  clientToken: string;
}

const Checkout: React.FC<Props> = ({ clientToken }) => {
  useEffect(() => {
    Primer.showUniversalCheckout(clientToken, {
      container: "#checkout",
    });
  }, []);

  return <div id="checkout"></div>;
};

export default Checkout;
