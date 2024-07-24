<template>
  <div v-if="userEdit != undefined">
    <div class="w-full p-8">
      <q-card class="bg-secondary">
        <q-card-section>
          <div class="">
            <q-form ref="formEdit" class="grid sm:grid-cols md:grid-cols-2 gap-3 
              sm:m-2 md:m-5">
              <DynamicInput v-for="(inputConfig, index) in userAddInputs"
              :key="index"
              :input-config="inputConfig"
              v-model="userEdit[inputConfig.modelKey]"/>
            </q-form>
          </div>
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat @click="editUser">Save</q-btn>
          <q-btn flat @click="cancel">Cancel</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userEdit } from '../../stores/index';
import { userAddInputs } from './UserAddInputs';
import { ref } from 'vue';
import { Notify } from 'quasar';
import { useRouter } from 'vue-router';
import { store } from '../../stores/index';
import { DynamicInput } from '../../components/index';
import axiosInstance from '../../api/axios';

const router = useRouter();
const formEdit = ref();

const cancel = () => {
  router.go(-1)
}

const editUser = async() => {
    const validateFrom = await formEdit.value.validate();
    if(!validateFrom) return Notify.create({message: 'Missing data to fill in', type: 'negative'});

    axiosInstance.patch(`users/${userEdit?.value.id}`, {
      ...userEdit.value
    }).then((resp: any) => {
      if(resp.status === 200 || resp.status === 201) {
        cancel();
        store.setUserEdit({})
      }
    }).catch((error: any) => {
      Notify.create({message: 'Error creating, possibly an email already exists', type: 'negative'})
      console.log("error " , error)
    })
}

</script>

<style>

</style>