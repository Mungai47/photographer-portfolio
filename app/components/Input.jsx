
function Input({ label, type, name, placeholder, pattern }) {
    return (
        <label className="py-2">
            <p>{label}:</p>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="bg-pale-text text-background py-2 rounded-lg focus:outline-none placeholder:text-background w-full"
                required
                pattern={pattern}
                onInvalid={(e) => {e.target.setCustomValidity("This field is required");}}
                onInput={(e) => {e.target.setCustomValidity("");}}
            />
        </label>
    );
}

export default Input;
