export class Patient {
    params: Object;
    constructor(IdPacientes='',
      IdTipoDocumento='',
      NumeroDocumento='',
      NombreCompleto='',
      Apellidos='',
      Nombres='',
      FechaNacimiento='',
      Direccion='',
      Telefono='',
      Celular='',
      Genero='',
      Email='',
      IdCreadoPor='',
      IdModificadoPor='',
      FechaCreacion='',
      FechaModificacion='',
      IdEstado='') {
      this.IdPacientes = IdPacientes;
      this.IdTipoDocumento = IdTipoDocumento; 
      this.NumeroDocumento = NumeroDocumento;
      this.NombreCompleto = Apellidos+' '+Nombres;
      this.Apellidos = Apellidos;
      this.Nombres = Nombres;
      this.FechaNacimiento = FechaNacimiento;
      this.Direccion = Direccion;
      this.Telefono = Telefono;
      this.Celular = Celular;
      this.Genero = Genero;
      this.Email = Email;
      this.IdCreadoPor = IdCreadoPor;
      this.IdModificadoPor = IdModificadoPor;
      this.FechaCreacion = FechaCreacion;
      this.FechaModificacion = FechaModificacion;
      this.IdEstado = IdEstado;
      this.params = {
        "params":[
          {
            "IdEstado":{
              "condition":"AND",
              "clausula":"in",
              "value":[1,2]
            }
          }
        ],
        "limit":0,
        "orderBy":[
          {
            "campos": ["IdPacientes"],
            "orderBy":"ASC"
          }
        ]
      };
    }
    IdPacientes:string;
    IdTipoDocumento:string; 
    NumeroDocumento:string;
    NombreCompleto:string;
    Apellidos:string;
    Nombres:string;
    FechaNacimiento:string;
    Direccion:string;
    Telefono:string;
    Celular:string;
    Genero:string;
    Email:string;
    IdCreadoPor:string;
    IdModificadoPor:string;
    FechaCreacion:string;
    FechaModificacion:string;
    IdEstado:string;
}
