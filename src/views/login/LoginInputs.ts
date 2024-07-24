import type {GenInputType} from "../../utils/types/GenInputType";

const loginInputs: GenInputType[] = [
    {
        label: "Name",
        inputType: "text",
        modelKey: "username",
        rules: [
            (val: any) => !!val || "Name is required",
            (val: any) =>  val.length > 0 || "Please use minimum 0 character",
            (val: any) =>  val.length < 15 || "Please use maximum 15 character",
        ],
        cssClass: 'col-4'
    },
    {
        label: 'Password',
        inputType: 'password',
        modelKey: 'password',
        rules: [
            (val: any) => !!val || "Username is required",
            (val: any) =>  val.length > 0 || "Please use minimum 0 character"
        ],
        cssClass: 'col-4'
    }
]

export {loginInputs}
