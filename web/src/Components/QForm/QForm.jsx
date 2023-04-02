import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import "./QForm.css";

const QForm = () => {
    
    const makeReq = (data) => {
        if (formStep == 1){
            console.log("HERE1")
            axios({
                method:'post',
                url: "http://localhost:8000/showcities", 
                data
                
            })
            .then((res) => {
                const cities = res.data.city_country_list;
                const descriptions = res.data.descriptions_list;
                setCities(cities);
                setDescriptions(descriptions);
            })
            .catch((err) => {
                console.log(err);
            })
        } else if (formStep == 2){
            console.log("HERE2")
            axios({
                method:'post',
                url: "http://localhost:8000/activities", 
                data
            })
            .then((res) => {
                console.log(res.data.activities_list);
                const activities = res.data.activities_list;
                setActivities(activities);
            })
            .catch((err) => {
                console.log(err);
            })
        } else if (formStep == 3){
            console.log("HERE3")
            // axios({
            //     method:'post',
            //     url: "http://localhost:8000/activities", 
            //     data
            // })
            // .then((res) => {
            //     console.log(res);
            // })
            // .catch((err) => {
            //     console.log(err);
            // })
        }
    }
    
        const [isFetching, setIsFetching] = useState(true);


    const { register, 
        handleSubmit, 
        formState: {errors},
        watch
    } = useForm({ mode: 'all' });

    const [formStep, setFormStep] = React.useState(0);
    const onSubmit = (data) => {
        console.log("HERE", data)
        makeReq(data);
    };
    
    const values = watch();
    useEffect(()=>{
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
    const [submitPressed, setSubmitPressed] = useState(false);
    const [submitButtonValue, setSubmitButtonValue] = useState('Register');

    const [cities, setCities] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    const [activities, setActivities] = useState([]);


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
                In three words, I would describe myself as 
                    <input
                        type="text"
                        {...register('short_description', {
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
                The most extreme free-time entertainment activity that I have done is 
                    <input
                        type="text"
                        {...register('extreme_activity', {
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
                My favorite color is
                    <input
                        type="text"
                        {...register('fav_color', {
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
                When I listen to music, I usually listen to
                    <input
                        type="text"
                        {...register('music_preference', {
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
                                message:
                                    'No special characters and trailing spaces'
                            }
                        })}
                    />
                </label>
                <label>
                genre
                </label>
                <p className="error-msg">
                    {errors.fullname?.message}
                </p>
            </div>
            <div className="send-info">
                <label>
                My biggest fears are
                    <input
                        type="text"
                        {...register('fears', {
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
            {formStep === 2 && (
                <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Select a city:</h2>
                <div className="city-container">
                  {cities.map((city, index) => (
                    <div key={index} className="city-row">
                      <input {...register('city',{ required:true})} type="radio" value={city} />
                      <label>{city}</label>
                      <p>{descriptions[index]}</p>
                    </div>
                  ))}
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
              </form>)}
              {formStep === 3 && (
                <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Select an activity :</h2>
                <div className="city-container">
                  {activities.map((activity, index) => (
                    <div key={index} className="">
                      <input {...register('activity',{ required:true})} type="radio" value={activity} />
                      <label>{activity}</label>
                    </div>
                  ))}
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
              </form>)}
        </div>
    );
}
 export default QForm;