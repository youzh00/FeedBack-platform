import PropTypes from 'prop-types'
import '../index.css'

////////////////////////
export default function Header({text}) {
  return (
    <header>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}


////////////////////////
Header.defaultProps={
    text:'Feed-Back UI',
}

Header.propTypes={
    text: PropTypes.string,
}