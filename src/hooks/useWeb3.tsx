import { useEffect, useState } from "react";
import { values } from "lodash";
import { MetaMaskInpageProvider } from "@metamask/providers";
import detectEthereumProvider from "@metamask/detect-provider";
import { provider as Web3CoreProvider } from "web3-core";
import { AbiItem } from "web3-utils";
import Web3 from "web3";

import { ExtendedContract, Network, TruffleContract, Web3Provider } from "../types";

type UseWeb3Hook = {
  api: Web3Provider;
  getContract: (name: string) => Promise<ExtendedContract>;
};

const useWeb3 = (): UseWeb3Hook => {
  const [api, setApi] = useState<Web3Provider>({} as Web3Provider);

  const getContract = async (name: string): Promise<ExtendedContract> => {
    const { abi, address }: { abi: AbiItem[]; address: string } = await fetch(
      `/contracts/${name}.json`
    )
      .then((response) => response.json())
      .then((contract: TruffleContract) => {
        const { abi, networks } = contract;
        const [availableNetworks] = values<Network>(networks);
        const { address } = availableNetworks;

        return { abi: abi as AbiItem[], address };
      });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const _contract = new api.web3!.eth.Contract(
      abi,
      address
    ) as ExtendedContract;
    _contract.address = address;
    return _contract;
  };

  useEffect(() => {
    const loadProvider = async () => {
      const apiConfig = {
        provider: await detectEthereumProvider<MetaMaskInpageProvider>(),
        web3: null,
        error: null,
      } as Web3Provider;

      if (apiConfig.provider) {
        apiConfig.web3 = new Web3(apiConfig.provider as Web3CoreProvider);
      } else {
        apiConfig.error = new Error("Please, install Metamask!!");
      }

      setApi(apiConfig);
    };

    loadProvider();
  }, []);

  return { api, getContract };
};

export default useWeb3;
