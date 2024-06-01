import { Button } from "../../../components/button";
import { Input, TextArea } from "../../../components/input";
import { cn } from "../../../config/clsx.config";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { Perfil } from "../../../domain/interfaces/perfil/perfil.interface";
import { perfilCreateThunk, perfilPaginationThunk } from "../../../redux/thunk/perfil.thunk";
import { InputPlaceholder } from "../../../components/placeholder";

interface PerfilesForm {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  modalClose: () => void;
  open: boolean;
  perfil: Perfil;
}

const PerfilesForm = ({ changeHandler, open, modalClose, perfil }: PerfilesForm) => {
  const dispatch = useAppDispatch();
  const { reqFilters, errors } = useAppSelector((state: RootState) => state.perfil);

  const { perfNom, perfDes, perfDet } = perfil;

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await dispatch(perfilCreateThunk(perfil));
    if (res.meta.requestStatus === "fulfilled") {
      modalClose();
      dispatch(perfilPaginationThunk(reqFilters));
    }
  };
  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-3">
      <div
        className={cn("transition-all", {
          "mt-1 rounded bg-danger px-2 py-1": errors && errors.filter((e) => e.error === "Business Validation").length > 0,
        })}
      >
        {errors && errors.filter((e) => e.error === "Business Validation").map((e) => <p className="font-inter text-sm font-semibold text-light">{e.msg}</p>)}
      </div>
      {!open ? (
        <div className="grid w-full gap-3 md:grid-cols-4 2xl:grid-cols-6">
          <InputPlaceholder className="md:col-span-2 2xl:col-span-3" />
          <InputPlaceholder className="md:col-span-2 2xl:col-span-3" />
          <InputPlaceholder className="md:col-span-2 2xl:col-span-3" />
          <InputPlaceholder className="md:col-span-2 2xl:col-span-3" />
          <InputPlaceholder className="col-span-full flex-col" />
        </div>
      ) : (
        <div className="grid w-full gap-3 md:grid-cols-4 2xl:grid-cols-6">
          <Input
            label="Perfil"
            attr={{ val: "nombre", prep: "del", ctx: "perfil" }}
            placeholder="Ingrese el perfil"
            name="perfNom"
            value={perfNom}
            onChange={changeHandler}
            minLength={2}
            maxLength={25}
            trim
            required
            className="flex-col md:col-span-2 2xl:col-span-3"
          />
          <Input
            label="Descripción"
            attr={{ val: "descripción", prep: "del", ctx: "perfil" }}
            placeholder="Ingrese la descripción"
            name="perfDes"
            value={perfDes}
            onChange={changeHandler}
            minLength={2}
            maxLength={128}
            trim={true}
            required
            className="flex-col md:col-span-2 2xl:col-span-3"
          />
          <TextArea
            label="Detalle"
            attr={{ val: "detalle", prep: "del", ctx: "perfil" }}
            placeholder="Ingrese el detalle"
            name="perfDet"
            value={perfDet}
            rows={3}
            onChange={changeHandler}
            minLength={2}
            maxLength={512}
            trim={true}
            required
            className="col-span-full flex-col"
          />
        </div>
      )}
      <div className="flex justify-end gap-x-3">
        <Button variant="danger" type="button" onClick={modalClose}>
          Cancelar
        </Button>
        <Button variant="success" type="submit">
          Guardar
        </Button>
      </div>
    </form>
  );
};

export default PerfilesForm;
