import { ReactNode } from "react";
import "./CardGrid.scss";

interface ICardGridProps {
   children?: ReactNode;
}

export const CardGrid = ({ children }: ICardGridProps) => {
   return <div className="cardGrid">{children}</div>;
};
