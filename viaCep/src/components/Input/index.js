//Import do Styled
import { InputText } from "./style";

export function Input  ({ 
    placeholder,
    editable,
    keyType,
    maxLength,
    fieldValue,
    onChangeText,
    onBlur = null
}) 
{
    return(
       <InputText 
       placeholder={placeholder}
       editable={editable}
       keyboardType={keyType}
       maxLength={maxLength}
       value={fieldValue}
       onChangeText={onChangeText}
       onBlur={onBlur}
       />
    )
}