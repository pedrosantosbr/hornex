import { forwardRef } from "react";
// {errors.email && <span role="alert">{errors.email.message}</span>}
type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  error?: string;
};

const Password = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => (
    <div>
      <label>{label}</label>
      <input
        type="password"
        ref={ref}
        {...props}
        className="mt-1 block h-10 w-full rounded-md border border-gray-700  bg-gray-800 px-4 py-2  text-sm text-gray-100 placeholder-gray-400 transition-shadow duration-200 invalid:border-red-500 invalid:text-red-600 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:invalid:border-red-500 focus:invalid:ring-red-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:h-12 sm:rounded-lg"
      />
      {error && <span role="alert">{error}</span>}
    </div>
  )
);

Password.displayName = "Password";
export default Password;
