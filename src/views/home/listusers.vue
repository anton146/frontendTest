<template>
    <div v-if="users !== null && users !== undefined">
        <q-list bordered class="rounded-borders" style="max-width: 600px">
        <q-item-label header><h3>Created users {{ users?.length }}</h3></q-item-label>

        <q-item :key="idx" v-for="(user, idx) in users">
            <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">GitHub</q-item-label>
            </q-item-section>

            <q-item-section top>
            <q-item-label lines="1">
                <span class="text-weight-medium">{{ user.name }}</span>&nbsp;&nbsp;
                <span class="text-weight-medium">{{ user.mail }}</span>&nbsp;&nbsp;
                <span class="text-weight-medium">{{ user.createdAt }}</span>
            </q-item-label>
            </q-item-section>

            <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
                <q-btn style="background: #FF0080; color: white" class="gt-xs" size="12px" flat dense round icon="delete" @click="deleteUser(user.id)" />
                <q-btn outline style="color: goldenrod;" class="gt-xs" size="12px" flat dense round icon="edit" @click="editUser(user)" />
            </div>
            </q-item-section>
        </q-item>

        <q-separator spaced />
        </q-list>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import axiosInstance from '../../api/axios';
import { Notify } from 'quasar';
import { store, users } from '../../stores/index';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
    getAllUsers();
})

const editUser = (user: any) => {
    store.setUserEdit(user);
    router.push({
      name: "useredit"
  })
}

const deleteUser = (user: any) => {
    axiosInstance.delete(`users/${user}`).then((resp: any) => {
      if(resp.status === 200 || resp.status === 201) {
        getAllUsers();
      }
    }).catch((error: any) => {
      Notify.create({message: 'Error delete user', type: 'negative'})
      console.log("error " , error)
    })
}

const getAllUsers = () => {
    axiosInstance.get('users').then((resp: any) => {
      if(resp.status === 200 || resp.status === 201) {
        store.setUsers(resp.data);
      }
    }).catch((error: any) => {
      Notify.create({message: 'Error get all users', type: 'negative'})
      console.log("error " , error)
    })
}

</script>

<style>

</style>