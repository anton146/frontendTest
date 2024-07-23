<template>
  <div class="w-full p-5">
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="m-5">
          <q-form ref="formLogin" class="grid sm:grid-cols md:grid-cols-2 gap-3 
            sm:m-2 md:m-5">
            <DynamicInput v-for="(inputConfig, index) in loginInputs"
            :key="index"
            :input-config="inputConfig"
            v-model="user[inputConfig.modelKey]"/>
          </q-form>
        </div>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat @click="loginUser">Login</q-btn>
        <q-btn flat @click="viewCreateUser">Create User</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { Notify } from 'quasar';
import { useRouter } from 'vue-router';

import { loginInputs } from './LoginInputs'
import { DynamicInput } from '../../components/index'
import axiosInstance from '../../api/axios'

import { store, user } from '../../stores/index';
const formLogin = ref();
const router = useRouter();

const viewCreateUser = () => {
  router.push({
      name: "useradd"
  })
}

const loginUser = async() => {
    const validateFrom = await formLogin.value.validate();
    if(!validateFrom) return Notify.create({message: 'Missing data to fill in', type: 'negative'});

    axiosInstance.get(`users/${user.value.username}/${user.value.password}`).then((resp: any) => {
      if(resp.status == 200) {
        store.setUserData(resp.data);
        router.push({
          name: "home"
        })
      }
    }).catch((error: any) => {
      console.log("error " , error)
    })
}

onBeforeMount(() => {
  store.resetUser();
});

</script>

<style>

</style>