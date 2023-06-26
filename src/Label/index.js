import "./style.css"

const Label = ({title,formField}) => (
    <label className="label">
    <span className="label__text">
        {title} 
    </span>
    {formField}
  </label>
);

export default Label;