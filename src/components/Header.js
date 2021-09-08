import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ onAdd, title, showAdd }) => {

  return (
    <div>
      <header className='header'>
        <h1>{ title }</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
      </header>
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.prototypes = {
  title: PropTypes.string.isRequired
}

export default Header
