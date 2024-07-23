import type {GenInputType} from "../../utils/types/GenInputType";
import { userAdd } from '../../stores/index';

const regexpEmail = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
const regexp = new RegExp(/^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z0-9\d#$@!%&*?]/);

const userAddInputs: GenInputType[] = [
    {
        label: "Name",
        inputType: "text",
        modelKey: "name",
        rules: [
            (val: any) => !!val || "Name is required",
            (val: any) =>  val.length > 0 || "Please use minimum 0 character",
        ],
        cssClass: 'col-4'
    },
    {
        label: 'Mail',
        inputType: 'text',
        modelKey: 'mail',
        rules: [
            (val: any) => !!val || "Mail is required",
            (val: any) =>  regexpEmail.test(val) || "Write a valid email",
        ],
        cssClass: 'col-4'
    },
    {
        label: 'Password',
        inputType: 'password',
        modelKey: 'password',
        rules: [
            (val: any) => !!val || "Password is required",
            (val: any) =>  regexp.test(val) || "You must enter at least 1 letter or number or lowercase or upper case",
            (val: any) =>  val.length > 9 || "Please use minimum 10 character",
            (val: any) =>  val.length < 15 || "Please use maximum 15 character",
        ],
        cssClass: 'col-4'
    },
    {
        label: 'PasswordConfirm',
        inputType: 'password',
        modelKey: 'passwordconfirm',
        rules: [
            (val: any) => !!val || "Password is required",
            (val: any) =>  val == userAdd.value.password || "Passwords are not the same",
        ],
        cssClass: 'col-4'
    }
]

export {userAddInputs}
