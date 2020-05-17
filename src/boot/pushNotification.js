import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/messaging'
import { configuration } from 'src/config/pushNotificationConfig';

Vue.config.productionTip = false;

firebase.initializeApp(configuration);

const messaging = firebase.messaging();
messaging.usePublicVapidKey('xxxxxxxxxxx');
