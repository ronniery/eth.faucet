export enum JSONRPCMethodsRestricted {
  ETH_REQUEST_ACCOUNTS = "eth_requestAccounts",
  WALLET_GET_PERMISSIONS = "wallet_getPermissions",
  WALLET_REQUEST_PERMISSIONS = "wallet_requestPermissions",
}

export enum JSONRPCMethodsUnrestricted {
  ETH_DECRYPT = "eth_decrypt",
  ETH_GET_ENCRYPTION_PUBLICKEY = "eth_getEncryptionPublicKey",
  WALLET_ADD_ETHEREUM_CHAIN = "wallet_addEthereumChain",
  WALLET_SWITCH_ETHEREUM_CHAIN = "wallet_switchEthereumChain",
  WALLET_REGISTER_ONBOARDING = "wallet_registerOnboarding",
  WALLET_WATCH_ASSET = "wallet_watchAsset",
}
