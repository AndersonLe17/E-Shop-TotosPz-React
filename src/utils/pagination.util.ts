import { SelectOption } from "../domain/interfaces/input/option.interface";

export const paginationOptions: Array<SelectOption> = [
  { value: "10", label: "10" },
  { value: "25", label: "25" },
  { value: "50", label: "50" },
  { value: "100", label: "100" },
];

export const paginationLinks = (totalPages: number, page: number): Array<string> => {
  return totalPages <= 7
    ? [
        ...Array(totalPages)
          .fill(1)
          .map((v, i) => v + i),
      ]
    : totalPages === 8 && page <= 4
      ? [
          ...Array(5)
            .fill(1)
            .map((v, i) => v + i),
          "...",
          8,
        ]
      : totalPages === 8 && page > 4
        ? [
            1,
            "...",
            ...Array(9 - 4)
              .fill(4)
              .map((v, i) => v + i),
          ]
        : totalPages > 8 && page <= 4
          ? [
              ...Array(5)
                .fill(1)
                .map((v, i) => v + i),
              "...",
              totalPages,
            ]
          : totalPages > 8 && page >= totalPages - 3
            ? [
                1,
                "...",
                ...Array(totalPages + 1 - (totalPages - 4))
                  .fill(totalPages - 4)
                  .map((v, i) => v + i),
              ]
            : [1, "...", page - 1, page, page + 1, "...", totalPages];
};
