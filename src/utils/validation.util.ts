import { AttrValidation } from "../domain/interfaces/input/valid.interface";
import { identifyGender } from "./string.util";

export const validHandler = (e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>, valid: string, attr: AttrValidation) => {
  switch (valid) {
    case "badInput":
      return msgBadInput(e, attr);
    case "customError":
      return msgCustomError(e, attr);
    case "patternMismatch":
      return msgPatternMismatch(e, attr);
    case "rangeOverflow":
      return msgRangeOverflow(e, attr);
    case "rangeUnderflow":
      return msgRangeUnderflow(e, attr);
    case "stepMismatch":
      return msgStepMismatch(e, attr);
    case "tooLong":
      return msgTooLong(e, attr);
    case "tooShort":
      return msgTooShort(e, attr);
    case "typeMismatch":
      return msgTypeMismatch(e, attr);
    case "valid":
      return msgValid(e, attr);
    case "valueMissing":
      return msgValueMissing(e, attr);
    default:
      return "";
  }
};

const customValidHandler = (valid: string, attr: AttrValidation) => {
  switch (valid) {
    case "valueBlank":
      return msgValueBlank(attr);
    default:
      return "";
  }
};

export const msgBadInput = (_e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>, attr: AttrValidation) => {
  return `El valor ingresado en ${attr} no es válido`;
};

export const msgCustomError = (e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>, attr: AttrValidation) => {
  return customValidHandler(e.target.validationMessage, attr);
};

export const msgPatternMismatch = (_e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>, attr: AttrValidation) => {
  return `El valor ingresado en ${attr} no es válido`;
};

export const msgRangeOverflow = (_e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>, attr: AttrValidation) => {
  return `El valor ingresado en ${attr} es mayor al permitido`;
};

export const msgRangeUnderflow = (_e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>, attr: AttrValidation) => {
  return `El valor ingresado en ${attr} es menor al permitido`;
};

export const msgStepMismatch = (_e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>, attr: AttrValidation) => {
  return `El valor ingresado en ${attr} no es válido`;
};

export const msgTooLong = (e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>, attr: AttrValidation) => {
  return `${identifyGender(attr.val)} ${attr.val} ${attr.prep} ${attr.ctx} debe de contener hasta ${e.target.maxLength} caracteres.`;
};

export const msgTooShort = (e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>, attr: AttrValidation) => {
  return `${identifyGender(attr.val)} ${attr.val} ${attr.prep} ${attr.ctx} debe de contener al menos ${e.target.minLength} caracteres.`;
};

export const msgTypeMismatch = (_e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>, attr: AttrValidation) => {
  return `El valor ingresado en ${attr} no es válido`;
};

export const msgValid = (_e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>, attr: AttrValidation) => {
  return `El valor ingresado en ${attr} es válido`;
};

export const msgValueMissing = (_e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>, attr: AttrValidation) => {
  return `${identifyGender(attr.val)} ${attr.val} ${attr.prep} ${attr.ctx} es requerido.`;
};

export const msgValueBlank = (attr: AttrValidation) => {
  return `${identifyGender(attr.val)} ${attr.val} ${attr.prep} ${attr.ctx} no debe contener espacios en blanco.`;
};

export const validStates: Array<
  | "badInput"
  | "customError"
  | "patternMismatch"
  | "rangeOverflow"
  | "rangeUnderflow"
  | "stepMismatch"
  | "tooLong"
  | "tooShort"
  | "typeMismatch"
  | "valid"
  | "valueMissing"
> = [
  "badInput",
  "customError",
  "patternMismatch",
  "rangeOverflow",
  "rangeUnderflow",
  "stepMismatch",
  "tooLong",
  "tooShort",
  "typeMismatch",
  "valid",
  "valueMissing",
];
