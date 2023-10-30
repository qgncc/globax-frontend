import { ReactElement, ReactNode } from "react";
import "./List.scss";

interface IListProps {
   children?: ReactElement<IListProps>[];
}

export const List = ({ children }: IListProps) => {
   return <ul className="list">{children}</ul>;
};

interface IListItemProps {
   children?: ReactNode;
   before?: ReactNode;
   after?: ReactNode;
}

export const ListItem = ({ children, before, after }: IListItemProps) => {
   return (
      <li className="list__item">
         {before && <span className="list__iconBefore">{before}</span>}
         <span className="list__itemContent">{children}</span>
         {after && <span className="list__iconAfter">{after}</span>}
      </li>
   );
};
