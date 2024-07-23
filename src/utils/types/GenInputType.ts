export type GenInputType = {
    label: string,
    modelKey: string,
    inputType: 'text' | 'password' | 'number' | 'textarea' | 'select' | 'date' | 'time' | 'checkbox' | 'file'
    icon?: string,
    cssClass?: string,
    rules?: {(e:string): boolean|string}[]
    options?: any[],
    selectOptionLabelKey?: string
    selectOptionValueKey?: string
    mask?: string
}
