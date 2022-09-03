import { Col } from "react-bootstrap";

const FormInput = ({size, sm, className, type, value, placeholder, onChange}) => {
  return (
    <Col size={size} sm={sm} className={className}>
      <input type={type} value={value} placeholder={placeholder} onChange={onChange} />
    </Col>
  )
}

export default FormInput;

