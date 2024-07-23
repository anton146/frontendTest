import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserModel } from '../api/interfaces'

export const useUserStore = defineStore('user', () => {
    const objectStore = ref();
    const initState = ref<UserModel>({
        "name": "",
        "mail": "",
        "password": "",
    });
    const initLoginState = ref<UserModel>({
        "name": "",
        "password": ""
    });
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

    return { 
        user, userAdd, userData, objectStore,
        resetUser, resetUserAdd, setUserData, resetUserData, resetUserPassConfim
    }
})
