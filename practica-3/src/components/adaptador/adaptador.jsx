function adaptar (usuarios) {
    return usuarios.map((usuarios) => ({
        id: usuarios.id,
        nombre: usuarios.name,
        tarea: usuarios.company.catchPhrase,
        emoji: "👤",
        completada: false,
    }));
}

export default adaptar;