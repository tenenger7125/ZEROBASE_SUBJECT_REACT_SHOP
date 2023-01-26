import { Routes } from "react-router-dom";

export const SRoutes = ({className, ...props}: any) => {
  return (
    <main className={className}>
      <Routes {...props} />
    </main>
  );
};
