import React, {Component} from "react";
import '../stylesheets/spinner.sass'

interface TheProps extends Object{
    loading: boolean
}

const Spinner = (props) => {

    return (
        <div className='the-spinner'>
            { /*props.loading ? <div  className='the-spinner' /> : props.children*/ }
        </div>
    )
};

export default Spinner;
