import { IconAlertOctagonFilled } from "@tabler/icons-react";
import { Button } from "../../components/button";
import { useAppDispatch } from "../../redux/hook";
import { authLogoutThunk } from "../../redux/thunk/auth.thunk";
import { useCookies } from "react-cookie";
import Modal from "../../components/modal/Modal";

interface ModalLogout {
  open: boolean;
  onClose: () => void;
}

const ModalLogout = ({ open, onClose }: ModalLogout) => {
  const dispatch = useAppDispatch();
  const [, , remove] = useCookies();

  const submitLogout = () => {
    dispatch(authLogoutThunk());
    remove("token");
  };

  return (
    <Modal open={open} onClose={onClose} className="w-2/5">
      <div className="flex flex-col content-center gap-y-3 text-center">
        <span className="mx-auto rounded-full bg-danger-200 p-2">
          <IconAlertOctagonFilled className="text-danger" />
        </span>
        <div className="flex flex-col gap-y-5 font-inter">
          <h1 className="text-3xl font-medium text-dark">Cerrar Sesión</h1>
          <p className="text-gray-900">¿Está seguro de que desea cerrar sesión?</p>
          <div className="flex justify-center gap-x-3">
            <Button variant="light" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={submitLogout}>
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalLogout;
