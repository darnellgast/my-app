import propTypes from 'prop-types'
import { render } from 'react-dom'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button color='green' text='test'/>
        </header>
    )
}

Header.defaultsProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}


// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
