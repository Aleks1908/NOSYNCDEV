import React from "react";
import { useForm } from 'react-hook-form';
import './QForm.css'

const QForm = () => {

const { register, 
        handleSubmit, 
        formState: {errors} }
         = useForm({ mode: 'all' });
  return (
    //(onSubmit) on next line
    <div className="registration-main" id="registration">
        <h1>Questionare</h1>
        <form onSubmit={handleSubmit()} className="reg-form">
            <fieldset className="from-personal-info">
                <div className="send-info">
                    <label>
                        School/University
                        <select
                            defaultValue={'default'}
                            className="select"
                            {...register('university', {
                                required: true
                            })}
                        >
                            <option value="default" disabled>
                                Choose an School/University
                            </option>

                            <option value="AUBG">AUBG</option>
                            <option value="Sofia University">
                                Sofia University
                            </option>
                            <option value="Technical University - Sofia">
                                Technical University - Sofia
                            </option>
                            <option value="Plovdiv University">
                                Plovdiv University
                            </option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <p className="error-msg">
                        {errors.university && (
                            <p className="error-text">
                                *University/School is required
                            </p>
                        )}
                    </p>
                </div>
                <div className="send-info">
                    <label>
                        School/University
                        <select
                            defaultValue={'default'}
                            className="select"
                            {...register('university', {
                                required: true
                            })}
                        >
                            <option value="default" disabled>
                                Choose an School/University
                            </option>

                            <option value="AUBG">AUBG</option>
                            <option value="Sofia University">
                                Sofia University
                            </option>
                            <option value="Technical University - Sofia">
                                Technical University - Sofia
                            </option>
                            <option value="Plovdiv University">
                                Plovdiv University
                            </option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <p className="error-msg">
                        {errors.university && (
                            <p className="error-text">
                                *University/School is required
                            </p>
                        )}
                    </p>
                </div>
            </fieldset>
            <input
                    type="submit"
                    value="Submit"
                    className="hackaubg-register-btn"
                />
        </form>
    </div>
  );
}
 
 export default QForm;