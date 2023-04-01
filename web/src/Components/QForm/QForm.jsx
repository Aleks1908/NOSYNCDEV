import React from "react";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from "react";
import './QForm.css'

const QForm = () => {
    const [formStep, setFormStep] = React.useState(0);
    const onSubmit = (data) => {
        console.log(data)
    };


    const { register, 
        handleSubmit, 
        formState: {errors} 
    } = useForm({ mode: 'all' });

    const [buttonState, setButtonState] = useState(
        'hackaubg-register-btn disabled'
    );
    const [submitPressed, setSubmitPressed] = useState(false); // eslint-disable-line
    const [submitButtonValue, setSubmitButtonValue] = useState('Register'); // eslint-disable-line



    const checkButtonAvailability = () => {        
        if (Object.keys(errors).length != 0) {
            setButtonState('hackaubg-register-btn error');
            setSubmitPressed(false);
            setSubmitButtonValue('Check inputs');
            return;
        } else if (Object.keys(errors).length == 0 && submitPressed) {
            setButtonState('hackaubg-register-btn');
            setSubmitButtonValue('Success');
            setFormStep(formStep + 1);
            console.log(Object.keys(errors));
            setSubmitPressed(false);
            
            return;
        }
        setButtonState('hackaubg-register-btn');
        setSubmitButtonValue('Submit');
    };
    console.log(formStep)
    useEffect(checkButtonAvailability, [Object.keys(errors)]);

  return (
    <div className="registration-main" id="registration">
        <h1>Questionare</h1>
        <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="reg-form"
        >
            {formStep === 0 && (<fieldset className="from-personal-info">
                <div className="send-info">
                    <label>
                        <p>I want to go to a </p>

                        <select
                            defaultValue=""
                            className="select"
                            {...register('climate', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                            </option>
                            <option value="Warm climate">Warm</option>
                            <option value="Cold climate">Cold</option>
                        
                        </select>
                        <p>place. </p>
                    </label>
                </div>
                <input
            type="submit"
            className={buttonState}
            value={submitButtonValue}
            onClick={() => {
                setSubmitPressed(true);
            }}
                />
            </fieldset>)}
            {formStep === 1 && (<fieldset className="from-personal-info">
                <div className="send-info">
                    <label>
                        <p>BRAAAT</p>
                        <select
                            defaultValue=""
                            className="select"
                            {...register('climate', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                            </option>
                            <option value="Warm climate">Warm</option>
                            <option value="Cold climate">Cold</option>
                        
                        </select>
                        <p>place. </p>
                    </label>
                </div>
                <input
            type="submit"
            className={buttonState}
            value={submitButtonValue}
            onClick={() => {
                setSubmitPressed(true);
            }}
                />
            </fieldset>)}            
        </form>
    </div>
  );
}
 export default QForm;