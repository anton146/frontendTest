import { useUserStore } from './user';
import { storeToRefs } from 'pinia';

const store = useUserStore();
const { users, user, userEdit, userAdd, userData, objectStore, 
    resetUser, resetUserAdd, setUserData, resetUserData, resetUserPassConfim, setUsers, setUserEdit } = storeToRefs(store)

export {
    useUserStore, store,
    users, user, userEdit, userAdd, userData, objectStore, 
    resetUser, resetUserAdd, setUserData, resetUserData, resetUserPassConfim, setUsers, setUserEdit
};