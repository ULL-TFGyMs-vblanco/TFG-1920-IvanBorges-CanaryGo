<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">
      {{$t('error_page')}}<strong>(404)</strong>
    </p>
    <q-btn
      color="primary"
      style="width:200px;"
      to="/events"
      :label="$t('back')"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
