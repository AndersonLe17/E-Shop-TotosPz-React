import { Button } from "../../../components/button";
import { Input, TextArea } from "../../../components/input";
import { cn } from "../../../config/clsx.config";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { Perfil } from "../../../domain/interfaces/perfil/perfil.interface";
import { perfilCreateThunk, perfilPaginationThunk, perfilUpdateThunk } from "../../../redux/thunk/perfil.thunk";
import { InputPlaceholder } from "../../../components/placeholder";

interface PerfilesFormProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  modalClose: () => void;
  open: boolean;
  perfil: Perfil;
  mode?: string;
}

const PerfilesForm = ({ changeHandler, open, modalClose, perfil, mode }: PerfilesFormProps) => {
  const dispatch = useAppDispatch();
  const { reqFilters, errors, isLoading } = useAppSelector((state: RootState) => state.perfil);

  const { perfCod, perfNom, perfDes, perfDet } = perfil;

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mode === "view") return;

    const res = await dispatch(mode ? perfilUpdateThunk(perfil) : perfilCreateThunk(perfil));
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
        {errors &&
          errors
            .filter((e) => e.error === "Business Validation")
            .map((e, idx) => (
              <p key={idx} className="font-inter text-sm font-semibold text-light">
                {e.msg}
              </p>
            ))}
      </div>
      {!open || isLoading ? (
        <div className="grid w-full gap-3 md:grid-cols-4 2xl:grid-cols-6">
          <InputPlaceholder className="md:col-span-2 2xl:col-span-3" />
          <InputPlaceholder className="md:col-span-2 2xl:col-span-3" />
          <InputPlaceholder className="md:col-span-2 2xl:col-span-3" />
          <InputPlaceholder className="md:col-span-2 2xl:col-span-3" />
          <InputPlaceholder className="col-span-full flex-col" />
        </div>
      ) : (
        <div className="grid w-full gap-3 md:grid-cols-4 2xl:grid-cols-6">
          {perfCod && <input type="hidden" value={perfCod} name="perfCod" required />}
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
            readOnly={mode === "view"}
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
            readOnly={mode === "view"}
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
            readOnly={mode === "view"}
            className="col-span-full flex-col"
          />
        </div>
      )}
      <div className="flex justify-end gap-x-3">
        <Button variant="danger" type="button" onClick={modalClose}>
          {mode != "view" ? "Cancelar" : "Cerrar"}
        </Button>
        {mode !== "view" && (
          <Button variant="success" type="submit">
            Guardar
          </Button>
        )}
      </div>
    </form>
  );
};

export default PerfilesForm;
