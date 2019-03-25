export class Patient {
    constructor(id = '', 
                type_documents = '', 
                documents = '', 
                name = '', 
                birthdate = '',
                address = '',
                phone = '',
                cellphone = '',
                gender = '',
                email = '') {
        this.id = id;
        this.type_documents = type_documents; 
        this.documents = documents; 
        this.name = name; 
        this.birthdate = birthdate;
        this.address = address;
        this.phone = phone;
        this.cellphone = cellphone;
        this.gender = gender;
        this.email = email;
    }
    id: string;
    type_documents: string;
    documents: string;
    name: string;
    birthdate: string;
    address: string;
    phone: string;
    cellphone: string;
    gender: string;
    email: string;
    user_created :Date;
    users_update :Date;
    createdAt:Date;
    updatedAt:Date;
}
