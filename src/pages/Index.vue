<template>
  <q-page class="flex flex-center">
    <div>

      <div class="q-pa-md">
        <div class="text-h5 q-pu-md">Step 1</div>
        <q-btn color="primary" @click="requestPermissions">Request Push Notification permissions</q-btn>
      </div>

      <div class="q-pa-md">
        <div class="text-h5 q-pu-md">Step 1</div>
        <q-btn color="primary" @click="sendNotification">Send Notification</q-btn>
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    requestPermissions () {
      alert('Rquest Push Notification permission here')
    },
    sendNotification () {
      alert('Send notification here')
    },
  }
}
</script>
<style lang="stylus" scoped>
  a {

  }
</style>