
  
  // Crear instancias de alumnos
  const alumno1 = new Alumno("Juan");
  const alumno2 = new Alumno("María");
  
  // Crear instancias de cursos
  const curso1 = new Curso("Matemáticas");
  const curso2 = new Curso("Historia");
  
  // Agregar alumnos a los cursos
  curso1.agregarAlumno(alumno1);
  curso1.agregarAlumno(alumno2);
  curso2.agregarAlumno(alumno1);
  
  // Crear instancia de la escuela
  const escuela = new Escuela();
  
  // Agregar cursos a la escuela
  escuela.agregarCurso(curso1);
  escuela.agregarCurso(curso2);
  
  // Obtener listado de cursos de la escuela
  const cursosEscuela = escuela.obtenerCursos();
  
  // Mostrar los nombres de los cursos y los alumnos asignados
  for (let i = 0; i < cursosEscuela.length; i++) {
    const curso = cursosEscuela[i];
    console.log(`Curso ${i + 1}: ${curso.obtenerNombre()}`);
    const alumnos = curso.obtenerAlumnos();
    for (let j = 0; j < alumnos.length; j++) {
      console.log(`- Alumno ${j + 1}: ${alumnos[j].obtenerNombre()}`);
    }
    console.log("------------");
  }--