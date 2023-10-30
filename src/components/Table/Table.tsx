import { ReactNode } from "react";
import "./Table.scss";
import { buildClassName } from "../../utils/ClassNameBuilder";

interface ITableProps {
   children?: ReactNode;
}

export const Table = ({ children }: ITableProps) => {
   return <table className="table">{children}</table>;
};

interface ITdProps {
   children?: ReactNode;
}

export const Td = ({ children }: ITdProps) => {
   return <td className="td table__td">{children}</td>;
};

interface ITrProps {
   children?: ReactNode;
}

export const Tr = ({ children }: ITrProps) => {
   return <tr className="tr table__tr">{children}</tr>;
};

interface IThProps {
   children?: ReactNode;
   type: "col" | "row";
}

export const Th = ({ children, type }: IThProps) => {
   const classNameStr = buildClassName("th table__th")
      .add("th--" + type)
      .end();
   return (
      <th className={classNameStr} scope={type}>
         {children}
      </th>
   );
};

interface ITbodyProps {
   children?: ReactNode;
}

export const Tbody = ({ children }: ITbodyProps) => {
   const classNameStr = buildClassName("tbody table__tbody").end();
   return <tbody className={classNameStr}>{children}</tbody>;
};
