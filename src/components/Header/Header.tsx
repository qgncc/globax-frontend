import { ReactNode } from "react";
import "./Header.scss";
import { buildClassName } from "../../utils/ClassNameBuilder";

interface IHeaderProps {
   children?: ReactNode;
   className?: string;
   after?: ReactNode;
   weight?: "normal" | "bold";
   size?: "1" | "2";
}

export const Header = ({
   children,
   className,
   after,
   weight = "bold",
   size = "2",
}: IHeaderProps) => {
   const classNameStr = buildClassName("header")
      .add(className)
      .add("header--" + weight)
      .add("header--size" + size)
      .end();
   return (
      <h1 className={classNameStr}>
         <span className="header__content">{children}</span>
         <span className="header__after">{after}</span>
      </h1>
   );
};
