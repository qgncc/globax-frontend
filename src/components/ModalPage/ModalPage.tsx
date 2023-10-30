import { ReactNode } from "react";
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
	return (
		isOpen && (
			<div className="modalPage">
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
