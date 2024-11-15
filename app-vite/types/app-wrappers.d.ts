import type { ConfigureCallback } from "./configuration";

import type { BootCallback } from "./boot";
import type { PrefetchCallback } from "./prefetch";
import type { RouteCallback } from "./route";
import type { StoreCallback } from "./store";

import type {
  SsrMiddlewareCallback,
  SsrCreateCallback,
  SsrListenCallback,
  SsrCloseCallback,
  SsrServeStaticContentCallback,
  SsrRenderPreloadTagCallback
} from "./ssrmiddleware";

/** Some arguments are available only if you enable the related mode: `store` when using the Store, `ssrContext` when using SSR, etc */

export function defineConfig(callback: ConfigureCallback): ConfigureCallback;

export function defineBootFile<TState = any>(
  callback: BootCallback<TState>
): BootCallback<TState>;

export function definePreFetch<TState = any>(
  callback: PrefetchCallback<TState>
): PrefetchCallback<TState>;

export function defineRouter<TState = any>(
  callback: RouteCallback<TState>
): RouteCallback<TState>;

export function defineStore(callback: StoreCallback): StoreCallback;

export function defineSsrMiddleware(
  callback: SsrMiddlewareCallback
): SsrMiddlewareCallback;

export function defineSsrCreate(
  callback: SsrCreateCallback
): SsrCreateCallback;

export function defineSsrListen(
  callback: SsrListenCallback
): SsrListenCallback;

export function defineSsrClose(
  callback: SsrCloseCallback
): SsrCloseCallback;

export function defineSsrServeStaticContent(
  callback: SsrServeStaticContentCallback
): SsrServeStaticContentCallback;

export function defineSsrRenderPreloadTag(
  callback: SsrRenderPreloadTagCallback
): SsrRenderPreloadTagCallback;
