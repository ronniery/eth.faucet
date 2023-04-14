/// <reference types="vite/client" />

export {};

declare global {
  interface Window {
    ethereum: import("ethers").providers.ExternalProvider;
    web3: import("ethers").providers.Web3Provider;
  }
}
