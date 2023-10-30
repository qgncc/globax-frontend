import { ReactNode } from "react";
import "./Card.scss";
import { Header } from "../Header";
import { buildClassName } from "../../utils/ClassNameBuilder";

type CardSize = "s";
type DivElementProps = JSX.IntrinsicElements["div"];

interface ICardProps extends DivElementProps {
	header?: ReactNode;
	children?: ReactNode;
	size?: CardSize;
	width?: string;
	height?: string;
	headerAfter?: ReactNode;
	clickable?: boolean;
}

export const Card = ({
	header,
	children,
	size = "s",
	width,
	height,
	headerAfter,
	clickable,
	...props
}: ICardProps) => {
	const className = buildClassName("card cardGrid__card")
		.add(size === "s" && "cardGrid__card--s")
		.add(clickable && "clickable")
		.end();
	return (
		<div style={{ width, height }} className={className} {...props}>
			{header && (
				<Header after={headerAfter} className="card__header">
					{header}
				</Header>
			)}
			{children}
		</div>
	);
};
