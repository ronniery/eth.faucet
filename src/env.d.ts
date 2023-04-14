/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_LOCAL_GANACHE_SERVER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "@truffle/contract" {
  import { Contract } from "./types";

  export const contract: (json: string) => Contract;
}

declare module "@depay/web3-mock" {
  export default web3Mock;
}
