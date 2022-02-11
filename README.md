# react-webpack-MF

A complete Webpack Module Federation Case with React. Base on [this example](https://github.com/module-federation/module-federation-examples/tree/master/complete-react-case)

# project directory

## payments-app

It is a separate MF available on the route /payments

## component-app

It is a middle-level app, which depends on modules exposed from `lib-app` : `react` ,`react-dom`. In the meantime, it also exposes components: `Dialog`, `Button` to another app called `main-app`.

It is both host and remote.

## main-app

the top-level app, which depends on `lib-app` and `component-app`.

It is a pure host.

# how to use

- `yarn install`
- `npx lerna bootstrap`
- `yarn start`

after all the commands done, open your browser at `http://localhost:3002`, open the dev-tool's network tab to see resources loading details
