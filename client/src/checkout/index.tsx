import { Primer, PrimerVaultManager } from "@primer-io/checkout-web";
import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";

interface Props {
  clientToken: string;
}

const Checkout: React.FC<Props> = ({ clientToken }) => {
  const [vaultManager, setVaultManager] = useState<PrimerVaultManager>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    Primer.showUniversalCheckout(clientToken, {
      container: "#checkout",
      locale: "fr",
      submitButton: {
        useBuiltInButton: false,
      },
      errorMessage: {
        onErrorMessageShow(message) {
          setError(message);
        },
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
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default Checkout;
