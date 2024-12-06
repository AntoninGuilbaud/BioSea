
import { SignupFormDemo } from "./ui/Signupform";
import { ImageCardDemo } from "./ui/imageCardDemo";

const Form = () => {
    return (
        <div id="contact" className="Form flex flex-wrap h-[100vh] items-center justify-center gap-20 p-4 dark:bg-zinc-900">
            {/* Composant Image */}
            <div className="flex-1 min-w-[300px] max-w-md min-h-[550px]">
                <ImageCardDemo />
            </div>
            {/* Composant Formulaire */}
            <div className="flex-1 min-w-[300px] max-w-md max-h-max">
                <SignupFormDemo />
            </div>
        </div>
    );
};

export default Form;
