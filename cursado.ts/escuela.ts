class Alumno {
    private nombres: string;
    private apellidos: string;
    
    constructor(nombres: string, apellidos: string) {
        this.nombres = nombres;
        this.apellidos = apellidos;
    }
    
    public ObtenerNombres(): string {
        return this.nombres;
    }
    
    public ObtenerApellidos(): string {
        return this.apellidos;
    }
}

class Curso {
    private Nombre: string;
    private alumnos: Alumno[];
    
    constructor(Nombre: string) {
        this.Nombre = Nombre;
        this.alumnos = [];
    }
    
    public AgregarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
    
    public ObtenerNombre(): string {
        return this.Nombre;
    }
    
    public ObtenerAlumnos(): Alumno[] {
        return this.alumnos;
    }
}

class Escuela {
    private cursos: Curso[];
    
    constructor() {
        this.cursos = [];
    }
    
    public AgregarCurso(curso: Curso): void {
        this.cursos.push(curso);
    }
    
    public ObtenerCursos(): Curso[] {
        return this.cursos;
    }
}

const alumnox = new Alumno('Emanuel', 'Ramirez');
const alumnoxx = new Alumno('Dante', 'Ruiz');

const cursox = new Curso('Programacion');
cursox.AgregarAlumno(alumnox);
cursox.AgregarAlumno(alumnoxx);

const cursoxx = new Curso('Ingles');

const escuela = new Escuela();
escuela.AgregarCurso(cursox);
escuela.AgregarCurso(cursoxx);

const cursosEscuela = escuela.ObtenerCursos();

for (let i = 0; i < cursosEscuela.length; i++) {
    const curso = cursosEscuela[i];
    console.log(`Curso ${i + 1}: ${curso.ObtenerNombre()}`);
    const alumnos = curso.ObtenerAlumnos();
    for (let j = 0; j < alumnos.length; j++) {
        console.log(`- Alumno ${j + 1}: ${alumnos[j].ObtenerNombres()} ${alumnos[j].ObtenerApellidos()}`);
    }
    console.log("------------");
}


    
















    


       


        

            
    

