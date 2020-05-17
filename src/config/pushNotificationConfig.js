import firebase from 'firebase/app';
import 'firebase/messaging'

const configuration = {
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
}

firebase.initializeApp(configuration);

export const configMessaging = async () => {
  const messaging = firebase.messaging();
  const registration = await navigator.serviceWorker.register(`${process.env.BASE_URL || ''}/statics/firebase-messaging-sw.js`)
  messaging.useServiceWorker(registration)
  messaging.usePublicVapidKey('code-123');
  return messaging
}
