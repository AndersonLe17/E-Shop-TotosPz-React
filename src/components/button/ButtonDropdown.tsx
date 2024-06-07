import { IconDotsVertical, IconEdit, IconEyeFilled, IconRecycle, IconTrashFilled } from "@tabler/icons-react";
import { Card } from "../card";
import { ItemOption } from "../items";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../config/clsx.config";
import { Estado } from "../../domain/enums/estado.enum";

interface ButtonDropdownProps {
  data: any;
  actionHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  altActionHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonDropdown = ({ data, actionHandler, altActionHandler }: ButtonDropdownProps) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (!buttonRef.current?.contains(event.target as Node) && !dropdownRef.current?.contains(event.target as Node)) {
      setIsDropdown(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  useEffect(() => {
    if (isDropdown) {
      dropdownRef.current?.getBoundingClientRect().bottom! > window.innerHeight * 0.85 && setIsDown(true);
      document.addEventListener("mousedown", handleClickOutside);
    } else setIsDown(false);
  }, [isDropdown]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsDropdown((prev) => !prev)}
        className="flex size-9 items-center justify-center rounded-full transition hover:bg-gray-200"
      >
        <IconDotsVertical />
      </button>
      <div className="relative">
        <Card ref={dropdownRef} className={cn("absolute end-14 w-auto rounded-lg bg-white p-2", { hidden: !isDropdown, "bottom-10": isDown })}>
          <div className="flex flex-col font-inter text-sm">
            <ItemOption title="Ver" Icon={IconEyeFilled} data-id={data.perfCod} data-mode={"view"} itemHandler={actionHandler} />
            <ItemOption title="Editar" Icon={IconEdit} data-id={data.perfCod} data-mode={"edit"} itemHandler={actionHandler} />
            {data.perfEst == (Estado.ACTIVO as string).toLocaleUpperCase() ? (
              <ItemOption title="Inactivar" Icon={IconTrashFilled} data-id={data.perfCod} itemHandler={altActionHandler} className="text-danger" />
            ) : (
              <ItemOption title="Activar" Icon={IconRecycle} data-id={data.perfCod} itemHandler={altActionHandler} className="text-success" />
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default ButtonDropdown;
