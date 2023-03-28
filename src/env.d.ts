/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOCAL_GANACHE_SERVER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}