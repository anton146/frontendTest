import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserModel } from '../api/interfaces'

export const useUserStore = defineStore('user', () => {
    const objectStore = ref();
    const initState = ref<UserModel>({
        "id" : "",
        "name": "",
        "mail": "",
        "password": "",
    });
    const initLoginState = ref<UserModel>({
        "name": "",
        "password": ""
    });
    const users = ref<UserModel[]>();
    const userEdit = ref<UserModel>();
    const userData = ref({...initState.value});
    const user = ref({...initLoginState.value});
    const userAdd = ref({...initState.value});

    function resetUser() {
        user.value = {...initLoginState.value};
    }

    function resetUserAdd() {
        userAdd.value = {...initState.value};
    }

    function resetUserData() {
        userData.value = {...initState.value};
    }

    function resetUserPassConfim() {
        userAdd.value.passwordconfirm = '';
    }

    function setUserData(data: any) {
        userData.value = data;
    }

    function setUsers(data: any){
        users.value = data;
    }

    function setUserEdit(data: any){
        userEdit.value = data;
    }

    return { 
        users, user, userEdit, userAdd, userData, objectStore,
        resetUser, resetUserAdd, setUserData, resetUserData, resetUserPassConfim, setUsers, setUserEdit
    }
})
