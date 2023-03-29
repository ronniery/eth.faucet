import { useEffect, useState } from "react";

import detectEthereumProvider from "@metamask/detect-provider";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { provider as Web3CoreProvider } from "web3-core";
import Web3 from "web3";

type Web3Provider = {
  provider: MetaMaskInpageProvider | null;
  web3: Web3 | null;
};

const useWeb3 = (): Web3Provider => {
  const [api, setApi] = useState<Web3Provider>({
    provider: null,
    web3: null,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider<MetaMaskInpageProvider>();

      if (provider) {
        setApi({
          web3: new Web3(provider as Web3CoreProvider),
          provider,
        });
      } else {
        console.error("Please, install Metamask!!");
      }
    };

    loadProvider();
  }, []);

  return api;
};

export default useWeb3;
