// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appConfig: {
    apiBase: 'http://localhost:8000',
    wsBase: 'ws://localhost:8000',
    vapidPulicKey: 'BNIQ6kTA0xRv7p4Hi9jfatnhB40Meo0M_KFfv54rp_GA7ip1uy2KiAT0bfz0CSwY5JjJj6lzcv306wVTf9A3NDU'
    // vapidPrivateKey: 'rLStymhFTOafB51lbrNRV-BJCpKYrwVNkEsHq_aKy-k'
  } // will be loaded at startup
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
