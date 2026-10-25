import Tarjeta from "../Tarjeta/Tarjeta";

// Lista: pinta una Tarjeta por cada tarea y le pasa las funciones de App
export default function Lista({
    lista = [],
    onAlternar = () => {},
    onEliminar = () => {},
}) {
    return (
        <section className="lista">
            {lista.map((e) => (
                <Tarjeta
                    key={e.id} // el id identifica cada tarea (el index falla al eliminar o filtrar)
                    nombre={e.nombre}
                    tarea={e.tarea}
                    emoji={e.emoji}
                    completada={e.completada}
                    onAlternar={() => onAlternar(e.id)} // avisa cuál tarea se marcó
                    onEliminar={() => onEliminar(e.id)} // avisa cuál tarea borrar
                />
            ))}
        </section>
    );
}
