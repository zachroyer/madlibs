import React from 'react';

const Input = ({title, state, name, holder}, onChange, index) => {
    return (
        <div key={index} className="input">
        <label className={`input__number ${state == '' ? 'gray' : 'red'}`}>{index + 1}</label>
        <input placeholder={holder} name={name} value={state} onChange={onChange}/>
        <label className='input__title'>{title}</label>
        </div>
    )
}

export default Input;