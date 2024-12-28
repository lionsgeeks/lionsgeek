import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading = ({color}) => {
    return (
        <div className="px-[4vw] py-[0.7rem] rounded-lg  bg-[#252529]">

        <div className="animate-spin">
            <AiOutlineLoading3Quarters fill={color} />
        </div>
        </div>
    );
};


export default Loading;