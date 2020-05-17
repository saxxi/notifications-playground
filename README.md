# Notification Playground (notifications-playground)

Notification Playground

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```


### Run on iOS XCode

Do not close the terminal while running, hit play button on XCode when launched.

```bash
quasar dev -m capacitor -T ios --ide
```


### Run on Android

For Android please use cordova instead of Capacitor (as we got issues on the latter).

```bash
quasar mode add cordova                         # run once
quasar dev -m cordova -T android --ide
# quasar build -m cordova -T android            # to build
```


### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
