import { IconPencilPlus, IconSearch } from "@tabler/icons-react";
import { ButtonOutline } from "../../../components/button";
import { Input, SelectCustom } from "../../../components/input";
import { enumToOptions } from "../../../utils/enum.util";
import { Estado } from "../../../domain/enums/estado.enum";
import { PerfilFilters } from "../../../domain/interfaces/perfil/perfil.interface";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { changeFilters } from "../../../redux/features/perfil/perfil.slice";

interface PerfilesFiltersProps {
  selectHandler: (name: string, value: string) => void;
  searchHandler: (tableFilter?: PerfilFilters) => void;
  modalHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PerfilesFilters = ({ selectHandler, searchHandler, modalHandler }: PerfilesFiltersProps) => {
  const { filters } = useAppSelector((state: RootState) => state.perfil);
  const dispatch = useAppDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilters({ ...filters, [e.target.name]: e.target.value == "" ? null : e.target.value }));
  };
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="grid w-full gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <Input label="Perfil" placeholder="Ingrese el perfil" name="perfNom" onChange={changeHandler} />
        <SelectCustom label="Estado" options={enumToOptions(Estado)} name="perfEst" onSelected={selectHandler} />
      </div>
      <div className="flex h-fit justify-end gap-3">
        <ButtonOutline variant="gray" onClick={() => searchHandler()}>
          <IconSearch size={20} />
          Buscar
        </ButtonOutline>
        <ButtonOutline variant="success" onClick={modalHandler}>
          <IconPencilPlus size={20} />
          Agregar
        </ButtonOutline>
      </div>
    </div>
  );
};

export default PerfilesFilters;
