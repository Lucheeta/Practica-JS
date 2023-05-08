const persona = {
    nombre: "Luciana",
    edad: 44,
    apellido: "Lucero",
    sexo: "femenino",
    estadoCivil: "soltera",
    
    nombreCompleto: function() {
        return `${this.nombre} ${this.apellido}`;
    }
    
};
