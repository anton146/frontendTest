<template>
  <div class="w-full p-8">
    <q-card class="bg-secondary">
      <q-card-section>
        <div class="">
          <q-form ref="formAdd" class="grid sm:grid-cols md:grid-cols-2 gap-3 
            sm:m-2 md:m-5">
            <DynamicInput v-for="(inputConfig, index) in userAddInputs"
            :key="index"
            :input-config="inputConfig"
            v-model="userAdd[inputConfig.modelKey]"
            @change="() => changeOther(inputConfig)"/>
          </q-form>
        </div>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat @click="saveUser">Save</q-btn>
        <q-btn flat @click="cancel">Cancel</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { Notify } from 'quasar';
import { useRouter } from 'vue-router';
import axiosInstance from '../../api/axios';

import { userAddInputs } from './UserAddInputs';
import { DynamicInput } from '../../components/index';

import { store, userAdd } from '../../stores/index';

const router = useRouter();
const formAdd = ref();

const cancel = () => {
  router.go(-1)
}

const saveUser = async() => {
    const validateFrom = await formAdd.value.validate();
    if(!validateFrom) return Notify.create({message: 'Missing data to fill in', type: 'negative'});

    axiosInstance.post('users', {
      ...userAdd.value
    }).then((resp: any) => {
      if(resp.status === 200 || resp.status === 201) {
        router.push({
          name: "login"
        })
      }
    }).catch((error: any) => {
      Notify.create({message: 'Error creating, possibly an email already exists', type: 'negative'})
      console.log("error " , error)
    })
}

onBeforeMount(() => {
  store.resetUserAdd();
});

const changeOther = (inputConfig: any) => {
  if(inputConfig.modelKey === "password" && userAdd.value.passwordconfirm != "" && userAdd.value.passwordconfirm != undefined) {
    store.resetUserPassConfim();
  }
}
</script>

<style>

</style>