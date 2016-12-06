import React from 'react';

export default (props) => (
    <input defaultValue={props.defaultValue} onChange={props.editText.bind(null, props.id)} />
)