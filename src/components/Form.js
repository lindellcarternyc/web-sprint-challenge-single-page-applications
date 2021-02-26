import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
   & > p {
       text-align: center;
   }
`

export default function Form(props) {
    const submit = (evt) => {
        evt.preventDefault()
    }

    return (
        <FormWrapper>
            <p>Build Your Own Pizza</p>
            <img src="https://picsum.photos/400/300" alt="Pizza"/>
            <h2> Build Your Own Pizza</h2>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="size">
                        <h4>Choice of Size</h4>
                        <p>Required</p>
                    </label>
                    <select name="size">
                        <option value="personal">Personal</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra_large">Extra Large</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sauce">
                        <h4>Choice of Size</h4>
                        <p>Required</p>
                    </label>
                    <div>
                        <input name="sauce" id="red" value="Original Red" type="radio" />
                        <label htmlFor="red">Original Red</label>
                    </div>
                    
                    <div>
                        <input name="sauce" id="garlic" value="Garlic Ranch" type="radio" />
                        <label htmlFor="garlic">Garlic Ranch</label>
                    </div>
                    
                    <div>
                        <input name="sauce" id="bbq" value="BBQ Sauce" type="radio" />
                        <label htmlFor="bbq">BBQ Sauce</label>
                    </div>

                    <div>
                        <input name="sauce" id="spinach" value="Spinach Alfredo" type="radio" />
                        <label htmlFor="">Original Red</label>
                    </div>
                </div>
                <div>
                    <label>
                        <h4>Add Toppings</h4>
                        <p>Choose a few</p>
                    </label>
                    <div>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> I have a bike</label>
                    </div>
                    <div>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> I have a bike</label>
                    </div>
                    <div>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> I have a bike</label>
                    </div>
                    <div>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> I have a bike</label>
                    </div>
                </div>
                <div>
                    <label htmlFor="special">
                        <h4>Special Instructions</h4>
                    </label>
                    <input />
                </div>
                <button type="submit">Order Now</button>
            </form>
        </FormWrapper>
    )
}