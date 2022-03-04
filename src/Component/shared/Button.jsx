import React from 'react'
import PropTypes from 'prop-types'


export default function Button({children,type,version, isDisabled}) {
  return (
    <div>
        <button className={`btn btn-${version}`} 
        type={type} 
        disabled={isDisabled} >
            {children}
        </button>
    </div>
  )
}

Button.defaultProps={
    version:'primary',
    type:'button',
    isDisabled:false

}
Button.propTypes={
    children:PropTypes.node.isRequired,
    isDisabled:PropTypes.bool,
    version:PropTypes.string,
    version:PropTypes.string,
}