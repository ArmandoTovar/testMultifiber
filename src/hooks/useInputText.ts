import {useState} from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData, TextInputProps, TextInputTextInputEventData } from 'react-native'

 const useInputText = (initial:string='')=>{
const [value,setValue]=useState<string>(initial)

const onChangeText = (text: string)=>{
    setValue(text)
}
return {
    onChangeText,
    value,
    
}
}
export default useInputText