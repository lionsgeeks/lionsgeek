import { useEffect } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";

export const Errors = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { relative: true });
  }, []);

  return <></>;
};
