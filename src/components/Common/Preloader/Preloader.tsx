import React from "react";
import preloader from '../../../assets/svg/tail-spin.svg'

export const Preloader: React.FunctionComponent =() => {
    return (
        <div>
            <img src={preloader} alt="preload" />
        </div>
    )
}