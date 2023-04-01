import React from "react";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from "react";
import './QForm.css'

const QForm = () => {
    const [formStep, setFormStep] = React.useState(0);
    const onSubmit = (data) => {
        console.log(Object.keys(errors));
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
        console.log("HERE")        
        if (Object.keys(errors).length != 0) {
            setButtonState('hackaubg-register-btn error');
            setSubmitPressed(false);
            setSubmitButtonValue('Check inputs');
            return;
        } else if (Object.keys(errors).length == 0 && submitPressed) {
            setButtonState('hackaubg-register-btn');
            setSubmitButtonValue('Submit');
            setSubmitPressed(false);
            setFormStep(formStep + 1);
            return;
        }
        setButtonState('hackaubg-register-btn');
        setSubmitButtonValue('Submit');
    };


    useEffect(() => {
        checkButtonAvailability()
        if(Object.keys(errors).length > 1 && "initLoad" in errors){
            delete errors.initLoad;
        }
    }, [Object.keys(errors)]);


    useEffect(()=>{
        errors.initLoad = true;
        checkButtonAvailability()
    }, [formStep])

    console.log(formStep, errors)

  return (
    <div className="registration-main" id="registration">
        <h1>Questionare</h1>
        {formStep === 0 &&<form 
        onSubmit={handleSubmit(onSubmit)}
        >
            <div className="send-info">
                <label>
                    Full Name
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register('fullname', {
                            required: {
                                value: true,
                                message: '*This field is required'
                            },
                            minLength: {
                                message:
                                    '*Minimum length is 4 characters',
                                value: 4
                            },
                            maxLength: {
                                message:
                                    'Maximum length is 50 characters',
                                value: 50
                            },
                            pattern: {
                                value: /^[\t a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/,
                                message:
                                    'No special characters and trailing spaces'
                            }
                        })}
                    />
                </label>
                <p className="error-msg">
                    {errors.fullname?.message}
                </p>
            </div>
            <input
            type="submit"
            className={buttonState}
            value={submitButtonValue}
            onClick={() => {
                setSubmitPressed(true)
                checkButtonAvailability();
            }}
                />
        </form>}
        {formStep === 1 &&<form 
        onSubmit={handleSubmit(onSubmit)}
        >
            <div className="send-info">
                <label>
                    Toni
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register('a', {
                            required: {
                                value: true,
                                message: '*This field is required'
                            },
                            minLength: {
                                message:
                                    '*Minimum length is 4 characters',
                                value: 4
                            },
                            maxLength: {
                                message:
                                    'Maximum length is 50 characters',
                                value: 50
                            },
                            pattern: {
                                value: /^[\t a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/,
                                message:
                                    'No special characters and trailing spaces'
                            }
                        })}
                    />
                </label>
                <p className="error-msg">
                    {errors.fullname?.message}
                </p>
            </div>
            <input
            type="submit"
            className={buttonState}
            value={submitButtonValue}
            onClick={() => {
                setSubmitPressed(true)
                checkButtonAvailability();
            }}
                />
        </form>}
    </div>
  );
}
 export default QForm;