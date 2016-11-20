export class Cliente {
  constructor(
    public nombre: string,
    public email: string,
    public telefono?: string,
    public perfil_facebook?: string,
    public ciudad?: string,
    public id?: string
  ) { }
}
