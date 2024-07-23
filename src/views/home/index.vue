<template>
  <div v-if="userData.name != null">
    <h2>Hola {{ userData.name }}</h2>
    <br/>

    <h4>Esta es tu información</h4>
    <p>Correo: {{ userData.mail }}</p>
    <p>Creado el: {{ userData.createdAt }}</p>

    <div>
      <q-btn @click="logoutUser">Logout</q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userData } from '../../stores/index';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../../stores/index';

const router = useRouter();

const logoutUser = () => {
  store.resetUserData();
  toLogin();
}

const toLogin = () => {
  router.push({
    name: "login"
  })
}

onMounted(() => {
  if(userData.value.name === '' || userData.value.name === undefined)
    toLogin();
})

</script>

<style>

</style>