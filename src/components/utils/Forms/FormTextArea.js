import { Col } from "react-bootstrap";
const FormTextArea = ({
  size,
  className,
  rows,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <Col size={size} className={className}>
      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      >
      </textarea>
    </Col>
  );
};

export default FormTextArea;
