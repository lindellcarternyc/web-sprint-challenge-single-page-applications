import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import * as yup from 'yup'

const FormWrapper = styled.div`
   & > p {
       text-align: center;
   }

   form > div > label:first-of-type {
    display: block;
    background-color: black;
    color: white;
    padding: 1rem;
   }

   .input-wrapper {
       padding: 1rem;
   }
`

const INITIAL_FORM_VALUES = {
    name: '',
    size: 'Large',
    sauce: 'red',
    toppings: [],
    special: ''
}

const INITIAL_FORM_ERRORS = {
    name: ''
}

const formSchema = yup.object().shape({
    name: yup.string().required().min(2),
    sauce: yup.string(),
    size: yup.string(),
    toppings: yup.array(yup.string()),
    special: yup.string()
})

export default function Form(props) {
    const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES)
    const [formErrors, setFormErrors] = useState(INITIAL_FORM_ERRORS)

    const submit = (evt) => {
        evt.preventDefault()
        
        formSchema.isValid(formValues)
            .then(() => props.onSubmit(formValues))
        
        setFormValues(INITIAL_FORM_VALUES)
    }

    const change = (evt) => {
        const { name, value } = evt.target

        if (name === 'toppings') {
            if (formValues.toppings.includes(value)) {
                return setFormValues({
                    ...formValues,
                    toppings: formValues.toppings.filter(t => t !== value)
                })
            } else {
                return setFormValues({
                    ...formValues,
                    toppings: formValues.toppings.concat(value)
                })
            }
        }
        setFormValues({
            ...formValues,
            [name]: value
        })

        yup.reach(formSchema, name)
            .validate(value)
            .then(_ => {
                setFormErrors({ ...formErrors, [name]: '' })
            })
            .catch(err => {
                setFormErrors({ ...formErrors, [name]: err.errors[0] })
            })
    }

    return (
        <FormWrapper>
            <p>Build Your Own Pizza</p>
            <img src="https://picsum.photos/400/300" alt="Pizza"/>
            <h2> Build Your Own Pizza</h2>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="name">
                        <h4>Name</h4>
                        <p>Required</p>
                    </label>
                    <div className="input-wrapper">
                        <input id="name" name="name" value={formValues.name} onChange={change}/>
                        {formErrors.name && <p>{formErrors.name}</p>}
                    </div>
                </div>
                <div>
                    <label htmlFor="size">
                        <h4>Choice of Size</h4>
                        <p>Required</p>
                    </label>
                    <div className="input-wrapper">
                        <select id="size" name="size" onChange={change} value={formValues.size}>
                            <option value="personal">Personal</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="extra_large">Extra Large</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="sauce">
                        <h4>What sauce</h4>
                        <p>Required</p>
                    </label>
                    <div className="input-wrapper">
                        <div>
                            <input name="sauce" id="red" value="Original Red" type="radio" onChange={change} />
                            <label htmlFor="red"> Original Red</label>
                        </div>
                        
                        <div>
                            <input name="sauce" id="garlic" value="Garlic Ranch" type="radio" onChange={change} />
                            <label htmlFor="garlic"> Garlic Ranch</label>
                        </div>
                        
                        <div>
                            <input name="sauce" id="bbq" value="BBQ Sauce" type="radio" onChange={change} />
                            <label htmlFor="bbq"> BBQ Sauce</label>
                        </div>

                        <div>
                            <input name="sauce" id="spinach" value="Spinach Alfredo" type="radio" onChange={change} />
                            <label htmlFor=""> Spinach Alfredo</label>
                    </div>
                    </div>    
                </div>
                <div>
                    <label>
                        <h4>Add Toppings</h4>
                        <p>Choose a few</p>
                    </label>
                    <div className="input-wrapper">
                        <div>
                            <input type="checkbox" id="pineapple" name="toppings" value="pineapple" onChange={change} checked={formValues.toppings.includes('pineapple')}/>
                            <label htmlFor="pineapple"> Pineapple</label>
                        </div>
                        <div>
                            <input type="checkbox" id="mushroom" name="toppings" value="mushroom" />
                            <label htmlFor="mushroom"> Mushrooms</label>
                        </div>
                        <div>
                            <input type="checkbox" id="pepperoni" name="toppings" value="pepperoni" />
                            <label htmlFor="pepperoni"> Pepperoni</label>
                        </div>
                        <div>
                            <input type="checkbox" id="anchovies" name="toppings" value="anchovies" />
                            <label htmlFor="anchovies"> Anchovies</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="special">
                        <h4>Special Instructions</h4>
                    </label>
                    <div className="input-wrapper">
                        <input name="special" onChange={change} value={formValues.special} />
                    </div>
                </div>
                <button type="submit">Order Now</button>
            </form>
        </FormWrapper>
    )
}