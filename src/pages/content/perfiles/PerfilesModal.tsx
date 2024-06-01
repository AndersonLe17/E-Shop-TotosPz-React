import { IconX } from "@tabler/icons-react";
import { Modal } from "../../../components/modal";
import PerfilesForm from "./PerfilesForm";
import { useEffect, useState } from "react";
import { Perfil } from "../../../domain/interfaces/perfil/perfil.interface";

interface PerfilesModal {
  open: boolean;
  onClose: () => void;
}

const PerfilesModal = ({ open, onClose }: PerfilesModal) => {
  const [perfil, setPerfil] = useState<Perfil>({ perfNom: "", perfDes: "", perfDet: "" });

  useEffect(() => {
    !open && setPerfil({ perfNom: "", perfDes: "", perfDet: "" });
  }, [open]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  return (
    <Modal open={open} onClose={onClose} className="w-3/4 xl:w-2/4">
      <div className="flex justify-between">
        <h3 className="font-inter text-xl font-medium">Registro de Perfil</h3>
        <button onClick={onClose}>
          <IconX size={20} />
        </button>
      </div>
        <PerfilesForm modalClose={onClose} open={open} perfil={perfil} changeHandler={changeHandler} />
    </Modal>
  );
};

export default PerfilesModal;
