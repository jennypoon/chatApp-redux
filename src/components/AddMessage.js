import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
  let input

  // creates an input field. When enter is pressed, dispatch AddMessage action
  return (
    <section id="new-message">
      <textarea
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          props.dispatch(input.value, 'Me o__o')
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      />
    </section>
  )
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage
