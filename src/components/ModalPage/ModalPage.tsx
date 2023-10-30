import { MouseEventHandler, ReactNode, useCallback } from "react";
import { Card } from "../Card";
import "./ModalPage.scss";
import closeIconSVG from "../../assets/icons/close.svg";

export interface IModalPageProps {
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	header?: ReactNode;
}

export const ModalPage = ({
	children,
	isOpen,
	header,
	onClose,
}: IModalPageProps) => {
	const handleOnClick = useCallback<MouseEventHandler<HTMLDivElement>>(
		(event) => {
			event.target === event.currentTarget && onClose && onClose();
		},
		[onClose],
	);
	return (
		isOpen && (
			<div className="modalPage" onClick={handleOnClick}>
				<Card
					header={header}
					headerAfter={
						<img className="clickable" src={closeIconSVG} onClick={onClose} />
					}
					width="500px"
				>
					{children}
				</Card>
			</div>
		)
	);
};
