import { IconX } from "@tabler/icons-react";
import Modal from "./Modal";
import { Button } from "../button";

interface AlertModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

const AlertModal = ({ open, onClose, onConfirm, message }: AlertModalProps) => {
  return (
    <Modal open={open} onClose={onClose} className="flex w-3/4 flex-col items-center gap-5 font-inter xl:w-1/3">
      <button onClick={onClose} className="absolute end-6">
        <IconX size={20} />
      </button>
      <h3 className="text-2xl font-semibold">Alerta</h3>
      <p>{message}</p>
      <div className="flex justify-center gap-4">
        <Button variant="success" onClick={onConfirm}>
          Si
        </Button>
        <Button variant="danger" onClick={onClose}>
          No
        </Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
