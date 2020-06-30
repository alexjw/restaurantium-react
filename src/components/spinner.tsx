import React, {Component} from "react";
import '../stylesheets/spinner.sass'

interface TheProps extends Object{
    loading: boolean
}

const Spinner = (props) => {

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            { props.loading ? <div  className='the-spinner' /> : props.children }
        </div>
    )
};

export default Spinner;
