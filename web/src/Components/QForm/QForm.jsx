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
        <h1>Where do you want to go?</h1>
        <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="reg-form"
        >
            <fieldset className="from-personal-info">
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
                <div className="send-info">
                    <label>
                    <p>I prefer a(n) </p>

                        <select
                            defaultValue=""
                            className="select"
                            {...register('accommodation', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                                
                            </option>
                            <option value="Luxury">Luxury</option>
                            <option value="Affordable">Affordable</option>
                        </select>
                        <p> accommodation. </p>
                    </label>
                </div>
                <div className="send-info">
                    <label>
                    <p>I am more interested in </p>

                        <select
                            defaultValue=""
                            className="select"
                            {...register('city_preference', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                            </option>
                            <option value="Historic sites">Historic sites</option>
                            <option value="Modern attractions">Modern attractions</option>
                        </select>
                        <p>.</p>
                    </label>
                </div>
                <div className="send-info">
                    <label>
                    <p>I am into </p>

                        <select
                            defaultValue=""
                            className="select"
                            {...register('trip_plan', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                            </option>
                            <option value="Leisure trip">Leisure</option>
                            <option value="Adventures trip">Adventures</option>
                        </select>
                        <p> trips. </p>
                    </label>
                </div>
                <div className="send-info">
                    <label>
                    <p>I would rather visit </p>

                        <select
                            defaultValue=""
                            className="select"
                            {...register('attractions', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                            </option>
                            <option value="Urban places">Urban</option>
                            <option value="Natural environment">Natural</option>
                        </select>
                        <p> destination. </p>
                    </label>
                </div>
                <div className="send-info">
                    <label>
                    

                        <select
                            defaultValue=""
                            className="select"
                            {...register('immersion', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                                
                            </option>
                            <option value="Touristy destination">A touristy destination</option>
                            <option value="Off-the-beaten-path">Off-the-beaten-path</option>
                        </select>
                        <p> is my way to go. </p>
                    </label>
                </div>
                <div className="send-info">
                    <label>
                    <p>I would prefer eating </p>

                        <select
                            defaultValue=""
                            className="select"
                            {...register('food', {       //variables!!!!!!!!!
                                required: true
                            })}
                        >
                            <option value="" disabled>
                            </option>
                            <option value="Local cuisine">Local cuisine</option>
                            <option value="International-cuisine">International cuisine</option>
                        </select>
                        <p> .</p>
                    </label>
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