<template>
  <q-page class="flex flex-center">
    <div>

      <div class="q-pa-md">
        <div class="text-h5 q-pu-md">Step 1</div>
        <q-btn color="primary" @click="requestPermissions">Request Push Notification permissions</q-btn>
      </div>

      <div class="q-pa-md">
        <div class="text-h5 q-pu-md">Step 2</div>
        <q-btn color="primary" @click="sendNotification">Send Notification</q-btn>
      </div>

    </div>
  </q-page>
</template>
<script>
  import 'firebase/messaging'
  import { configMessaging } from '@/config/pushNotificationConfig'

  export default {
    name: 'PageIndex',
    created () {
      console.log('Here this component has been created');
    },
    mounted () {
      console.log('Now the component has been brought to the DOM');
    },
    methods: {
      requestPermissions () {
        configMessaging().then((messaging) => {
          messaging.requestPermission().then(() => {
            console.log('Notification permission granted.');

            messaging.getToken().then((token) => {
              console.log('Got token!', token);
            }).catch((err) => {
              console.log('other error!', err);
            });
          }).catch((err) => {
            console.log('Unable to get permission to notify.', err);
          });
        })
      },
      sendNotification () {
        alert('Send notification here')
      },
    }
  }
</script>
