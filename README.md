# Zephyr + Module Federation challenge

Two Rspack + React apps using Module Federation, deployed with Zephyr Cloud (default integration).

- `remote/` exposes `./Button`
- `host/` consumes `remote/Button` at runtime

Zephyr plugin (`zephyr-rspack-plugin`) wraps each `rspack.config.mjs` with `withZephyr()`;
it uploads the build and rewrites the host's remote URL to the remote's Zephyr deployment.

## Deploy
```
npm install
npm run build:remote   # first build opens browser login
npm run build:host
```
Each build prints a Zephyr preview URL. In CI set `ZE_CI_TOKEN`.
