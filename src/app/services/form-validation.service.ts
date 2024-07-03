import { Injectable } from '@angular/core';

type ValidatorConfig = {
  required: string;
  minlength: string;
  maxlength: string;
  email: string;
  pattern: string;
  min: string;
  max: string;
};

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  static getErrorMessage(
    fieldName: string,
    validatorName: string,
    validatorValue?:any
  ){
    const config : ValidatorConfig = {
      required: `O campo ${fieldName} é obrigatório.`,
      minlength: `O campo ${fieldName} deve ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      maxlength: `O campo ${fieldName} deve ter no máximo ${validatorValue.requiredLength} caracteres.`,
      email: `O campo ${fieldName} deve ser um endereço de email válido`,
      pattern: `O campo ${fieldName} possui um formato inválido.`,
      min: `O campo ${fieldName} deve ser maior ou igual a ${validatorValue.min}.`,
      max: `O campo ${fieldName} deve ser menor ou igual a ${validatorValue.max}.`,
    };
    return config[validatorName as keyof ValidatorConfig];
  }
}
