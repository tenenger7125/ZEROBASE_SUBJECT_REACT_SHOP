import { SButton } from "./Button.style";

const Button = ({ children, className = "btn btn-primary" }: ChildrenType) => (
  <SButton className={className}>{children}</SButton>
);
export default Button;
