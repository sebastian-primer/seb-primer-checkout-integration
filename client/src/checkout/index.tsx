import { Primer, PrimerVaultManager } from "@primer-io/checkout-web";
import { useEffect, useState } from "react";
import SubmitButton from "./SubmitButton";

interface Props {
  clientToken: string;
}

const Checkout: React.FC<Props> = ({ clientToken }) => {
  const [vaultManager, setVaultManager] = useState<PrimerVaultManager>();

  useEffect(() => {
    Primer.showUniversalCheckout(clientToken, {
      container: "#checkout",
      submitButton: {
        useBuiltInButton: false,
      },
    }).then((vaultManager) => setVaultManager(vaultManager));
  }, []);

  const onSubmit = () => {
    vaultManager?.submit();
  };

  return (
    <div>
      <div id="checkout"></div>
      <SubmitButton onSubmit={onSubmit} />
    </div>
  );
};

export default Checkout;
