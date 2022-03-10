import { FormContext } from 'App'
import Input from 'components/styled/input'
import { useContext, useEffect, useRef } from 'react'

const FormInput = ({id, label, inputProps}) =>{
    const please = useRef('')
    const {formData, setFormData} = useContext(FormContext)

    return(
        <>
            <label htmlFor={id}>{label}</label>
            <Input fullSize
                id={id}
                value={formData[id]}
                onChange={(e)=>setFormData({
                    ...formData, [id]:e.target.value
                })}
                {...inputProps}
            />
        </>
    )
}
export default FormInput