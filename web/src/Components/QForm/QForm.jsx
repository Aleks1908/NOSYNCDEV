import React from "react";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from "react";
import './QForm.css'

const QForm = () => {

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

            return;
        }
        setButtonState('hackaubg-register-btn');
        setSubmitButtonValue('Submit');
    };

    useEffect(checkButtonAvailability, [Object.keys(errors)]);

  return (
    //(onSubmit) on next line
    <div className="registration-main" id="registration">
        <h1>Questionare</h1>
        <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="reg-form"
        >
            <fieldset className="from-personal-info">
                
                <div className="send-info">
                    <label>
                        School/University
                        <select
                            defaultValue=""
                            className="select"
                            {...register('university', {
                                required: true
                            })}
                        >
                            <option value="" disabled>
                                Choose an School/University
                            </option>
                            <option value="AUBG">AUBG</option>
                            <option value="Sofia University">Sofia University</option>
                            <option value="Technical University - Sofia">Technical University - Sofia</option>
                            <option value="Plovdiv University">Plovdiv University</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    {errors.university && (
                        <p className="error-text">
                            *University/School is required
                        </p>
                    )}
                </div>


                
            </fieldset>
            <input
            type="submit"
            className={buttonState}
            value={submitButtonValue}
            onClick={() => {
                setSubmitPressed(true);
            }}
                />
        </form>
    </div>
  );
}
 
 export default QForm;