/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly ACCESS_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}