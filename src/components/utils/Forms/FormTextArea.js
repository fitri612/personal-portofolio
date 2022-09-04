import { Col } from "react-bootstrap";
import ButtonClick from "../Button/Button";
const FormTextArea = ({
  size,
  className,
  rows,
  value,
  placeholder,
  onChange,
  children
}) => {
  return (
    <Col size={size} className={className}>
      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>

      <ButtonClick
        className="button s-button"
        children={children}
        type="submit"
      />
    </Col>
  );
};

export default FormTextArea;
