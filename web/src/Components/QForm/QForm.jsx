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
    <div className="registration-main" id="registration">
        <h1>Questionare</h1>
        <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="reg-form"
        >
            <fieldset className="from-personal-info">
                <div className="send-info">
                    <label>
                    What climate environment do you prefer? 

                        <select
                            defaultValue=""
                            className="select"
                            {...register('climate', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                                Choose climate
                            </option>
                            <option value="Warm">Warm</option>
                            <option value="Cold">Cold</option>
                        </select>
                    </label>
                    {errors.climate && (             //variables!!!!
                        <p className="error-text">
                            *This field is required
                        </p>
                    )}
                </div>
                <div className="send-info">
                    <label>
                    What accommodation do you look for?

                        <select
                            defaultValue=""
                            className="select"
                            {...register('accommodation', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                                Choose one option
                            </option>
                            <option value="High-End">High-End</option>
                            <option value="Budget">Budget</option>
                        </select>
                    </label>
                    {errors.accommodation && (                //variables!!!!!
                        <p className="error-text">
                            *This field is required
                        </p>
                    )}
                </div>
                <div className="send-info">
                    <label>
                    What city do you prefer?

                        <select
                            defaultValue=""
                            className="select"
                            {...register('city_preference', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                                Choose city type
                            </option>
                            <option value="Historic">Historic</option>
                            <option value="Cultural">Cultural</option>
                            <option value="Modern">Modern</option>
                        </select>
                    </label>
                    {errors.city_preference && (             //variables!!!!
                        <p className="error-text">
                            *This field is required
                        </p>
                    )}
                </div>
                <div className="send-info">
                    <label>
                    What type of trip are you planning?

                        <select
                            defaultValue=""
                            className="select"
                            {...register('trip_plan', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                                Choose trip type
                            </option>
                            <option value="Leisure">Leisure</option>
                            <option value="Adventure">Adventure</option>
                        </select>
                    </label>
                    {errors.trip_plan && (             //variables!!!!
                        <p className="error-text">
                            *This field is required
                        </p>
                    )}
                </div>
                <div className="send-info">
                    <label>
                    What attractions do you prefer to visit?

                        <select
                            defaultValue=""
                            className="select"
                            {...register('attractions', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                                Choose one option
                            </option>
                            <option value="Urban">Urban</option>
                            <option value="Natural">Natural</option>
                        </select>
                    </label>
                    {errors.attractions && (             //variables!!!!
                        <p className="error-text">
                            *This field is required
                        </p>
                    )}
                </div>
                <div className="send-info">
                    <label>
                    What cultural immersion do you prefer?

                        <select
                            defaultValue=""
                            className="select"
                            {...register('immersion', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                                Choose one option
                            </option>
                            <option value="Touristy">Touristy</option>
                            <option value="Off-the-beaten-track">Off-the-beaten-track</option>
                        </select>
                    </label>
                    {errors.immersion && (             //variables!!!!
                        <p className="error-text">
                            *This field is required
                        </p>
                    )}
                </div>
                <div className="send-info">
                    <label>
                    What are your food preferences

                        <select
                            defaultValue=""
                            className="select"
                            {...register('food', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                                Choose city type
                            </option>
                            <option value="Historic">Local cuisine</option>
                            <option value="International-cuisine">International cuisine</option>
                        </select>
                    </label>
                    {errors.food && (             //variables!!!!
                        <p className="error-text">
                            *This field is required
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