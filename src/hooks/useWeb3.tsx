import { useEffect, useState } from "react";
import { isEqual } from "lodash";
import { providers } from "ethers";

import Web3 from "web3";

type CurrentProvider = {
  provider: providers.Provider | null;
  web3: providers.Web3Provider | Web3 | null;
};

const { PROD, VITE_LOCAL_GANACHE_SERVER } = import.meta.env;

const useWeb3 = (): CurrentProvider => {
  const [api, setApi] = useState<CurrentProvider>({
    provider: null,
    web3: null,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const { ethereum, web3 } = window;
      let provider = null;

      if (ethereum) {
        provider = ethereum;

        try {
          await provider.enable();
        } catch (e) {
          console.error("User denied account access!");
        }
      } else if (web3) {
        provider = web3;
      } else if (!isEqual(PROD, "production")) {
        provider = new Web3.providers.HttpProvider(VITE_LOCAL_GANACHE_SERVER);
      }

      setApi({
        web3: new Web3(provider),
        provider,
      });
    };

    loadProvider();
  }, []);

  return api;
};

export default useWeb3;
