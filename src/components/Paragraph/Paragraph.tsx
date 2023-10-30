import { ReactNode } from "react";
import "./Paragraph.scss";
import { buildClassName } from "../../utils/ClassNameBuilder";

interface IParagraphProps {
   children?: ReactNode;
   mode: "primary" | "secondary";
   className?: string;
}

export const Paragraph = ({ children, mode, className }: IParagraphProps) => {
   const classNameStr = buildClassName("paragraph").add(className).end();

   return (
      <p
         className={classNameStr}
         style={{ color: `var(--theme--text_${mode})` }}
      >
         {children}
      </p>
   );
};
