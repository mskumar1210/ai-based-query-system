/**
 * Button Component
 *
 * This is a functional React component that renders a button element.
 * The button has the following properties:
 * - `name`: Specifies the name of the button element.
 * - `className`: Applies multiple CSS classes to style the button.
 *   - `btn`: Base button styling.
 *   - `btn-primary`: Primary button styling.
 *   - `btn-outline`: Adds an outline to the button.
 *   - `btn-square`: Makes the button square-shaped.
 *   - `btn-lg`: Sets the button size to large.
 *
 * @returns {JSX.Element} A styled button element.
 */
const Button = () =>  {
    return(
        <button name="button" className="btn btn-primary btn-outline btn-square btn-lg">
            click me
        </button>
    )
}

export default Button