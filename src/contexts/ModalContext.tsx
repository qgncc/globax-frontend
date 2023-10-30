import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import { log } from "../utils/log";

type ModalsStructure = {
	[name: string]: boolean;
};

type ModalsList = {
	[name: string]: { isOpen: boolean; props: Record<string, any> };
};

interface IModalContext {
	isOpen: (name: string) => boolean;
	open: (name: string, props?: object) => void;
	close: (name: string) => void;
	props: Record<string, any>;
}

const ModalContext = createContext<IModalContext>({
	isOpen: () => false,
	open: () => {},
	close: () => {},
	props: {},
});

interface IModalProviderProps {
	children?: ReactNode;
	structure: ModalsStructure;
}

export const ModalProvider = ({ structure, children }: IModalProviderProps) => {
	const [modals, setModals] = useState<ModalsList>(() =>
		Object.entries(structure).reduce(
			(acc, [key, val]) => ({ ...acc, [key]: { isOpen: val, props: {} } }),
			{},
		),
	);

	const isOpen = useCallback((name: string) => modals[name].isOpen, [modals]);
	const open = useCallback(
		(name: string, props: object = {}) => {
			log("Openning modal with props: ", props);
			setModals((modals) => ({ ...modals, [name]: { isOpen: true, props } }));
			document.body.style.overflowY = "hidden";
		},
		[setModals],
	);
	const close = useCallback(
		(name: string) => {
			setModals((modals) => ({
				...modals,
				[name]: { props: {}, isOpen: false },
			}));
			document.body.style.overflowY = "auto";
		},
		[setModals],
	);

	const props = useMemo(
		() =>
			Object.entries(modals).reduce(
				(acc, [key, value]) => ({ ...acc, [key]: value.props }),
				{},
			),
		[modals],
	);

	return (
		<ModalContext.Provider
			value={{
				props,
				isOpen,
				open,
				close,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export function useModals() {
	return useContext(ModalContext);
}
