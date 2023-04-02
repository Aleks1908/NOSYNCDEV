import React from "react";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import './QForm.css'

const QForm = () => {
    const requestDestinations = (data) => {
        console.log('aaa');
        console.log("HERE2", data)
        axios({
            method:'post',
            url: "http://localhost:8000/showcities", 
            data
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    const { register, 
        handleSubmit, 
        formState: {errors},
        watch
    } = useForm({ mode: 'all' });

    const [formStep, setFormStep] = React.useState(0);
    const onSubmit = (data) => {
        console.log("HERE", data)
        requestDestinations(data);
        // console.log(Object.keys(errors));

    };
    
    const values = watch();
    // console.log(values)

    useEffect(()=>{
        // console.log("USEEFF")
        Object.values(values).forEach((value) => {
          if (value === ""){
            errors.initLoad = true;
            checkButtonAvailability();
            return;
          }
        });
    }, [values]);

   

    const [buttonState, setButtonState] = useState(
        'register-btn disabled'
    );
    const [submitPressed, setSubmitPressed] = useState(false); // eslint-disable-line
    const [submitButtonValue, setSubmitButtonValue] = useState('Register'); // eslint-disable-line


    const checkButtonAvailability = () => {
        if (Object.keys(errors).length != 0) {
            setButtonState('register-btn error');
            setSubmitPressed(false);
            setSubmitButtonValue('Please fill in all inputs');
            return;
        } else if (Object.keys(errors).length == 0 && submitPressed) {
            setButtonState('register-btn');
            setSubmitButtonValue('Submit');
            setSubmitPressed(false);
            setFormStep(formStep + 1);
            return;
        }
        setButtonState('register-btn');
        setSubmitButtonValue('Submit');
    };


    useEffect(() => {
        checkButtonAvailability()
        if(Object.keys(errors).length > 1 && "initLoad" in errors){
            delete errors.initLoad;
        }
    }, [Object.keys(errors)]);


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
                        {...register('interests', {
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
            <div className="send-info">
                <label>
                    Full Name
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register('budget', {
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
            <div className="send-info">
                <label>
                    Full Name
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register('season_weather', {
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
            <div className="send-info">
                <label>
                    Full Name
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register('cultural_language_familiarity', {
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
            <div className="send-info">
                <label>
                    Full Name
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register('food_preference', {
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
                        {...register('12', {
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
            <div className="send-info">
                <label>
                    Toni
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register('99', {
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
            <div className="send-info">
                <label>
                    Toni
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register('88', {
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