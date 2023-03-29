import { Contract } from "../types";
import { contract as truffleContract } from "@truffle/contract";

const useContract = async (name: string): Promise<Contract> => {
  return fetch(`/contracts/${name}.json`)
    .then((response) => response.json())
    .then((response) => truffleContract(response));
};

export default useContract;
