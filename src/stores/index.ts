import { useUserStore } from './user';
import { storeToRefs } from 'pinia';

const store = useUserStore();
const { user, userAdd, userData, objectStore, 
    resetUser, resetUserAdd, setUserData, resetUserData, resetUserPassConfim } = storeToRefs(store)

export {
    useUserStore, store,
    user, userAdd, userData, objectStore, 
    resetUser, resetUserAdd, setUserData, resetUserData, resetUserPassConfim
};