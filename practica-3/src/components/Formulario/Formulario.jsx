import { useState } from "react";

// Formulario: pide nombre y tarea, y se los entrega a App con onAgregar
export default function Formulario({
    onAgregar = (nombre, tarea) => {}
}) {
    const [nombre, setNombre] = useState("");
    const [tarea, setTarea] = useState("");

    const guardar = () => {
        // Si alguno de los dos campos está vacío, no hacemos nada
        if (nombre.trim().length === 0 || tarea.trim().length === 0) return;

        onAgregar(nombre, tarea);

        // Limpiamos los campos después de agregar
        setNombre("");
        setTarea("");
    };

    return (
        <section id="container">
            <h3>Mi lista de tarea virtual</h3>
            <div className="container">
                <input
                    id="nombre"
                    type="text"
                    placeholder="Asignar tarea a..."
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    id="tarea"
                    type="text"
                    placeholder="tarea"
                    value={tarea}
                    onChange={(e) => setTarea(e.target.value)}
                />
                <button type="button" onClick={guardar}>
                    Agregar
                </button>
            </div>
        </section>
    );
}
