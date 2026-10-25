import { useState } from "react";

// Buscador: guarda su propio texto y avisa a App cada vez que cambia
export default function Buscador({
    onBuscar = (x) => {},
}) {
    const [texto, setTexto] = useState("");

    // Se ejecuta en cada tecla: actualiza el campo y avisa a App
    const buscar = (e) => {
        const value = e.target.value;
        setTexto(value);
        onBuscar(value);
    };

    // Limpia el campo (estado local) y avisa a App que la búsqueda quedó vacía
    const limpiar = () => {
        setTexto("");
        onBuscar("");
    };

    return (
        <div className="buscador">
            <input
                placeholder="Buscar por nombre o tarea..."
                value={texto}
                onChange={buscar}
            />
            {/* La ✕ solo aparece cuando hay texto; usa el mismo estilo que el botón de eliminar */}
            {texto && (
                <button type="button" className="btn-eliminar" onClick={limpiar}>
                    ✕
                </button>
            )}
        </div>
    );
}
