declare global {
  interface Window {
    google: typeof google;
    gmapsCallback: any;
  }
}

const API_KEY = process.env.VUE_APP_GOOGLE_MAPS_API;
const CALLBACK_NAME = 'gmapsCallback';
const GOOGLE_MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`;

let initialized = !!window.google;
let resolveInitPromise: any;
let rejectInitPromise: any;

const initPromise = new Promise((resolve, reject) => {
  resolveInitPromise = resolve;
  rejectInitPromise = reject;
});

const googleMapsInit = () => {
  if (initialized) return initPromise;

  initialized = true;

  window[CALLBACK_NAME] = () => resolveInitPromise(window.google);

  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.onerror = rejectInitPromise;
  script.src = GOOGLE_MAPS_URL;

  const head = document.querySelector('head');

  if (head) {
    head.appendChild(script);
  }

  return initPromise;
};

export default googleMapsInit;
