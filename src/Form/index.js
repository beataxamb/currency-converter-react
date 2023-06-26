import "./style.css"

const Form = ({children, annotation}) => (
    <form className="form">
    <fieldset className="form__fieldset">
      {children}
    </fieldset>
    <p className="from__annotation">{annotation}</p>
  </form>
)

export default Form;