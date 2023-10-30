import { ModalPage } from "../components/ModalPage";
import { useModals } from "../contexts/ModalContext";
import { User } from "../api/types/user.api.types";
import { Table, Tbody, Td, Th, Tr } from "../components/Table";
import { Header } from "../components/Header";
import { Paragraph } from "../components/Paragraph";
import "./UserCardModal.scss";

interface UserCardModalProps {
	isOpen?: boolean;
	onClose?: VoidFunction;
}

export const USER_MODAL_NAME = "USER_MODAL";

export const UserCardModal = ({ isOpen, onClose }: UserCardModalProps) => {
	const { props } = useModals();
	const user: User = props[USER_MODAL_NAME];
	return (
		<ModalPage isOpen={isOpen} onClose={onClose} header={user.name}>
			{user && (
				<Table>
					<Tbody>
						<Tr>
							<Th type="row">Телефон:</Th>
							<Td>{user.phone}</Td>
						</Tr>
						<Tr>
							<Th type="row">Почта</Th>
							<Td>{user.email}</Td>
						</Tr>
						<Tr>
							<Th type="row">Дата приема:</Th>
							<Td>{user.admissionDate}</Td>
						</Tr>
						<Tr>
							<Th type="row">Должность:</Th>
							<Td>{user.position}</Td>
						</Tr>
						<Tr>
							<Th type="row">Подразделение:</Th>
							<Td>{user.division}</Td>
						</Tr>
					</Tbody>
				</Table>
			)}
			<Header className="userModal__header" size="1" weight="normal">
				Дополнительная информация
			</Header>
			<Paragraph className="userModal__paragraph" mode="secondary">
				{user.additionalInfo}
			</Paragraph>
		</ModalPage>
	);
};
