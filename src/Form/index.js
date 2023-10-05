import "./style.css"

const Form = ({ children, annotation}) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        {children}
      </fieldset>
      <p className="from__annotation">{annotation}</p>
    </form>
  )
};

export default Form;