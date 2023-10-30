import {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import "./App.scss";
import { Card } from "./components/Card";
import { CardGrid } from "./components/CardGrid";
import { List, ListItem } from "./components/List";
import { User } from "./api/types/user.api.types";
import { UserAPI } from "./api/user.api";
import { UserCardModal } from "./modals/UserCardModal";
import PhoneSvg from "./assets/icons/cell_phone.svg";
import MailSvg from "./assets/icons/mail.svg";
import searchIconSVG from "./assets/icons/search.svg";
import { useModals } from "./contexts/ModalContext";
import { MODALS } from "./modals/names";
import { Input } from "./components/Input";
import { debounce } from "./utils/debounce";

function App() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    UserAPI.getUsers().then(
      (result) => result.isSuccess && result.data && setUsers(result.data),
    );
  }, []);
  const { open, close, isOpen } = useModals();
  const handleOpenUserInfo = (user: User) => {
    return () => {
      open(MODALS.USER_MODAL, user);
    };
  };

  const fetchFiltredUsers = useCallback(
    debounce(async (value: string) => {
      const result = await UserAPI.getUsers(value);
      if (result.isSuccess) setUsers(result.data);
    }, 200),
    [setUsers],
  );

  const handleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    async (event) => {
      console.log("EVENT: ", event);
      fetchFiltredUsers(event.target.value);
      setInput(event.target.value);
    },
    [fetchFiltredUsers, setInput],
  );

  const handleSearchClick = useCallback<
    MouseEventHandler<HTMLImageElement>
  >(async () => {
    fetchFiltredUsers(input);
  }, [fetchFiltredUsers, input]);

  return (
    <>
      <UserCardModal
        isOpen={isOpen(MODALS.USER_MODAL)}
        onClose={() => close(MODALS.USER_MODAL)}
      />

      <Input
        onChange={handleInputChange}
        value={input}
        stretched
        after={
          <img
            onClick={handleSearchClick}
            className="clickable"
            src={searchIconSVG}
            alt="Search"
          />
        }
        style={{ marginBottom: "32px" }}
      />

      {!users ? (
        "Loading..."
      ) : users.length > 0 ? (
        <CardGrid>
          {users.map((user) => {
            return (
              <Card
                onClick={handleOpenUserInfo(user)}
                key={user.name + user.phone + user.email}
                header={user.name}
                height="314px"
                clickable
              >
                <List>
                  <ListItem before={<img src={PhoneSvg} />}>
                    {user.phone}
                  </ListItem>
                  <ListItem before={<img src={MailSvg} />}>
                    {user.email}
                  </ListItem>
                </List>
              </Card>
            );
          })}
        </CardGrid>
      ) : (
        "Ничего не найдено"
      )}
    </>
  );
}

export default App;
