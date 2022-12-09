import Alert from 'react-bootstrap/Alert'


const Footer = (props) => {

    return (
    <div>
        <Alert key="dark" variant="dark">
        {props.texto}
        </Alert>
    </div>
    )
}

export default Footer;