import { IconX } from "@tabler/icons-react";
import { Modal } from "../../../components/modal";
import PerfilesForm from "./PerfilesForm";
import { useEffect, useState } from "react";
import { Perfil } from "../../../domain/interfaces/perfil/perfil.interface";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { changeInitPerfData } from "../../../redux/features/perfil/perfil.slice";

interface PerfilesModal {
  open: boolean;
  onClose: () => void;
  mode?: string;
}

const PerfilesModal = ({ open, onClose, mode }: PerfilesModal) => {
  const { perfData } = useAppSelector((state: RootState) => state.perfil);
  const dispatch = useAppDispatch();

  const [perfil, setPerfil] = useState<Perfil>(perfData);

  useEffect(() => {
    !open && dispatch(changeInitPerfData());
  }, [open]);
  useEffect(() => setPerfil(perfData), [perfData]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  return (
    <Modal open={open} onClose={onClose} className="w-3/4 xl:w-2/4">
      <div className="flex justify-between">
        <h3 className="font-inter text-xl font-medium">{mode === undefined ? "Registar" : mode === "edit" ? "Editar" : "Detalle"} Perfil</h3>
        <button onClick={onClose}>
          <IconX size={20} />
        </button>
      </div>
      <PerfilesForm modalClose={onClose} open={open} perfil={perfil} changeHandler={changeHandler} mode={mode} />
    </Modal>
  );
};

export default PerfilesModal;
