
import Input from './Input.jsx';

function ContactForm() {
    return (
        <div className="">
            <h5 className="text-xl">Contact Form</h5>
            <form className="">
                <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-2">
                    <Input label="First Name" type="text" name="firstName" placeholder="First Name" />
                    <Input label="Last Name" type="text" name="lastName" placeholder="Last Name" />
                </div>
                <Input label="Email" type="email" name="email" placeholder="contact@info.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <label className="py-2">
                    <p>Message:</p>
                    <textarea name="message" placeholder="Message" className="bg-pale-text text-background py-2 rounded-lg focus:outline-none placeholder:text-background w-full" required onInvalid={(e) => {e.target.setCustomValidity("This field is required");}} onInput={(e) => {e.target.setCustomValidity("");}}></textarea>
                </label>
                <br />
                <button type="submit" className="py-3 px-6 border rounded-full hover:text-white hover:bg-green-500">Send</button>
            </form>
        </div>
    );
}

export default ContactForm;
