/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WalletConnectImport } from './routes/wallet-connect'
import { Route as RedirectImport } from './routes/redirect'
import { Route as MultiTxImport } from './routes/multi-tx'
import { Route as DeferredImport } from './routes/deferred'
import { Route as CoinImport } from './routes/coin'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as TrySolanaConnectImport } from './routes/try/solana-connect'
import { Route as LayoutLayout2Import } from './routes/_layout/_layout-2'
import { Route as LayoutLayout2LayoutBImport } from './routes/_layout/_layout-2/layout-b'
import { Route as LayoutLayout2LayoutAImport } from './routes/_layout/_layout-2/layout-a'

// Create/Update Routes

const WalletConnectRoute = WalletConnectImport.update({
  path: '/wallet-connect',
  getParentRoute: () => rootRoute,
} as any)

const RedirectRoute = RedirectImport.update({
  path: '/redirect',
  getParentRoute: () => rootRoute,
} as any)

const MultiTxRoute = MultiTxImport.update({
  path: '/multi-tx',
  getParentRoute: () => rootRoute,
} as any)

const DeferredRoute = DeferredImport.update({
  path: '/deferred',
  getParentRoute: () => rootRoute,
} as any)

const CoinRoute = CoinImport.update({
  path: '/coin',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TrySolanaConnectRoute = TrySolanaConnectImport.update({
  path: '/try/solana-connect',
  getParentRoute: () => rootRoute,
} as any)

const LayoutLayout2Route = LayoutLayout2Import.update({
  id: '/_layout-2',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutLayout2LayoutBRoute = LayoutLayout2LayoutBImport.update({
  path: '/layout-b',
  getParentRoute: () => LayoutLayout2Route,
} as any)

const LayoutLayout2LayoutARoute = LayoutLayout2LayoutAImport.update({
  path: '/layout-a',
  getParentRoute: () => LayoutLayout2Route,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/coin': {
      id: '/coin'
      path: '/coin'
      fullPath: '/coin'
      preLoaderRoute: typeof CoinImport
      parentRoute: typeof rootRoute
    }
    '/deferred': {
      id: '/deferred'
      path: '/deferred'
      fullPath: '/deferred'
      preLoaderRoute: typeof DeferredImport
      parentRoute: typeof rootRoute
    }
    '/multi-tx': {
      id: '/multi-tx'
      path: '/multi-tx'
      fullPath: '/multi-tx'
      preLoaderRoute: typeof MultiTxImport
      parentRoute: typeof rootRoute
    }
    '/redirect': {
      id: '/redirect'
      path: '/redirect'
      fullPath: '/redirect'
      preLoaderRoute: typeof RedirectImport
      parentRoute: typeof rootRoute
    }
    '/wallet-connect': {
      id: '/wallet-connect'
      path: '/wallet-connect'
      fullPath: '/wallet-connect'
      preLoaderRoute: typeof WalletConnectImport
      parentRoute: typeof rootRoute
    }
    '/_layout/_layout-2': {
      id: '/_layout/_layout-2'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutLayout2Import
      parentRoute: typeof LayoutImport
    }
    '/try/solana-connect': {
      id: '/try/solana-connect'
      path: '/try/solana-connect'
      fullPath: '/try/solana-connect'
      preLoaderRoute: typeof TrySolanaConnectImport
      parentRoute: typeof rootRoute
    }
    '/_layout/_layout-2/layout-a': {
      id: '/_layout/_layout-2/layout-a'
      path: '/layout-a'
      fullPath: '/layout-a'
      preLoaderRoute: typeof LayoutLayout2LayoutAImport
      parentRoute: typeof LayoutLayout2Import
    }
    '/_layout/_layout-2/layout-b': {
      id: '/_layout/_layout-2/layout-b'
      path: '/layout-b'
      fullPath: '/layout-b'
      preLoaderRoute: typeof LayoutLayout2LayoutBImport
      parentRoute: typeof LayoutLayout2Import
    }
  }
}

// Create and export the route tree

interface LayoutLayout2RouteChildren {
  LayoutLayout2LayoutARoute: typeof LayoutLayout2LayoutARoute
  LayoutLayout2LayoutBRoute: typeof LayoutLayout2LayoutBRoute
}

const LayoutLayout2RouteChildren: LayoutLayout2RouteChildren = {
  LayoutLayout2LayoutARoute: LayoutLayout2LayoutARoute,
  LayoutLayout2LayoutBRoute: LayoutLayout2LayoutBRoute,
}

const LayoutLayout2RouteWithChildren = LayoutLayout2Route._addFileChildren(
  LayoutLayout2RouteChildren,
)

interface LayoutRouteChildren {
  LayoutLayout2Route: typeof LayoutLayout2RouteWithChildren
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutLayout2Route: LayoutLayout2RouteWithChildren,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof LayoutLayout2RouteWithChildren
  '/coin': typeof CoinRoute
  '/deferred': typeof DeferredRoute
  '/multi-tx': typeof MultiTxRoute
  '/redirect': typeof RedirectRoute
  '/wallet-connect': typeof WalletConnectRoute
  '/try/solana-connect': typeof TrySolanaConnectRoute
  '/layout-a': typeof LayoutLayout2LayoutARoute
  '/layout-b': typeof LayoutLayout2LayoutBRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof LayoutLayout2RouteWithChildren
  '/coin': typeof CoinRoute
  '/deferred': typeof DeferredRoute
  '/multi-tx': typeof MultiTxRoute
  '/redirect': typeof RedirectRoute
  '/wallet-connect': typeof WalletConnectRoute
  '/try/solana-connect': typeof TrySolanaConnectRoute
  '/layout-a': typeof LayoutLayout2LayoutARoute
  '/layout-b': typeof LayoutLayout2LayoutBRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/coin': typeof CoinRoute
  '/deferred': typeof DeferredRoute
  '/multi-tx': typeof MultiTxRoute
  '/redirect': typeof RedirectRoute
  '/wallet-connect': typeof WalletConnectRoute
  '/_layout/_layout-2': typeof LayoutLayout2RouteWithChildren
  '/try/solana-connect': typeof TrySolanaConnectRoute
  '/_layout/_layout-2/layout-a': typeof LayoutLayout2LayoutARoute
  '/_layout/_layout-2/layout-b': typeof LayoutLayout2LayoutBRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/coin'
    | '/deferred'
    | '/multi-tx'
    | '/redirect'
    | '/wallet-connect'
    | '/try/solana-connect'
    | '/layout-a'
    | '/layout-b'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/coin'
    | '/deferred'
    | '/multi-tx'
    | '/redirect'
    | '/wallet-connect'
    | '/try/solana-connect'
    | '/layout-a'
    | '/layout-b'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/coin'
    | '/deferred'
    | '/multi-tx'
    | '/redirect'
    | '/wallet-connect'
    | '/_layout/_layout-2'
    | '/try/solana-connect'
    | '/_layout/_layout-2/layout-a'
    | '/_layout/_layout-2/layout-b'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoutRoute: typeof LayoutRouteWithChildren
  CoinRoute: typeof CoinRoute
  DeferredRoute: typeof DeferredRoute
  MultiTxRoute: typeof MultiTxRoute
  RedirectRoute: typeof RedirectRoute
  WalletConnectRoute: typeof WalletConnectRoute
  TrySolanaConnectRoute: typeof TrySolanaConnectRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutRoute: LayoutRouteWithChildren,
  CoinRoute: CoinRoute,
  DeferredRoute: DeferredRoute,
  MultiTxRoute: MultiTxRoute,
  RedirectRoute: RedirectRoute,
  WalletConnectRoute: WalletConnectRoute,
  TrySolanaConnectRoute: TrySolanaConnectRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/coin",
        "/deferred",
        "/multi-tx",
        "/redirect",
        "/wallet-connect",
        "/try/solana-connect"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/_layout-2"
      ]
    },
    "/coin": {
      "filePath": "coin.tsx"
    },
    "/deferred": {
      "filePath": "deferred.tsx"
    },
    "/multi-tx": {
      "filePath": "multi-tx.tsx"
    },
    "/redirect": {
      "filePath": "redirect.tsx"
    },
    "/wallet-connect": {
      "filePath": "wallet-connect.tsx"
    },
    "/_layout/_layout-2": {
      "filePath": "_layout/_layout-2.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/_layout-2/layout-a",
        "/_layout/_layout-2/layout-b"
      ]
    },
    "/try/solana-connect": {
      "filePath": "try/solana-connect.tsx"
    },
    "/_layout/_layout-2/layout-a": {
      "filePath": "_layout/_layout-2/layout-a.tsx",
      "parent": "/_layout/_layout-2"
    },
    "/_layout/_layout-2/layout-b": {
      "filePath": "_layout/_layout-2/layout-b.tsx",
      "parent": "/_layout/_layout-2"
    }
  }
}
ROUTE_MANIFEST_END */
