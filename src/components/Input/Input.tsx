import { ReactNode } from "react";
import "./Input.scss";
import { buildClassName } from "../../utils/ClassNameBuilder";

type ElementAtts = JSX.IntrinsicElements["input"];

interface IInputProps extends ElementAtts {
	before?: ReactNode;
	after?: ReactNode;
	stretched?: boolean;
}

export const Input = ({
	before,
	className,
	after,
	stretched,
	...props
}: IInputProps) => {
	const classNameStr = buildClassName("inputBlock")
		.add(className)
		.add(stretched && "inputBlock--stretched")
		.end();
	return (
		<div className={classNameStr} {...props}>
			{before && <span className="inputBlock__before">{before}</span>}
			<input className="inputBlock__input" />
			{after && <span className="inputBlock__after">{after}</span>}
		</div>
	);
};
