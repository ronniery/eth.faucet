import { useEffect, useState } from "react";
import { isEmpty, values } from "lodash";
import { MetaMaskInpageProvider } from "@metamask/providers";
import detectEthereumProvider from "@metamask/detect-provider";
import { provider as Web3CoreProvider } from "web3-core";
import { AbiItem } from "web3-utils";
import Contract from "web3-eth";
import Web3 from "web3";

import { Network, TruffleContract } from "../types";

type Web3Provider = {
  provider: MetaMaskInpageProvider | null;
  web3: Web3 | null;
};

type UseWeb3Hook = {
  api: Web3Provider;
  getContract: (name: string) => Promise<Contract | null>
};

const useWeb3 = (): UseWeb3Hook => {
  const [api, setApi] = useState<Web3Provider>({
    provider: null,
    web3: null,
  });

  const getContract = async (name: string): Promise<Contract | null> => {
    if (isEmpty(api.web3)) return null;

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

    const activeContract = new api.web3.eth.Contract(abi, address);
    return activeContract as unknown as Contract;
  };

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider<MetaMaskInpageProvider>();

      if (provider) {
        setApi({ web3: new Web3(provider as Web3CoreProvider), provider });
      } else {
        console.error("Please, install Metamask!!");
      }
    };

    loadProvider();
  }, []);

  return { api, getContract };
};

export default useWeb3;
