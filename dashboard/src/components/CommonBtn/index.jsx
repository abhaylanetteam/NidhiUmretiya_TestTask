import React from "react"

const CommonBtn = ({type, loader,className,value, ...rest}) => {
    return (
        <React.Fragment>
            <button type={type} disabled={loader} className={className} > {loader ? "...Loading" : value} </button>
        </React.Fragment>
    )
}
export default CommonBtn