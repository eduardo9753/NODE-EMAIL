class Persona {
    name;
    email;
    phone;
    message;

    constructor(name , email , phone , message){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.message = message;
    }

    set SetName(name){this.name = name}
    set SetEmail(email){this.email = email}
    set SetPhone(phone){this.phone = phone};
    set SetMessage(message){this.message = message}

    get GetName(){ return this.name}
    get GetEmail(){ return this.email}
    get GetPhone(){return this.phone}
    get GetMessage(){return this.message}

}

module.exports = Persona;