import "./Tarjeta.css";

// Tarjeta: una tarea con checkbox, información y botón de eliminar
function Tarjeta({
    nombre,
    tarea,
    emoji = "",
    completada = false,
    onAlternar = () => {},
    onEliminar = () => {},
}) {
    return (
        // Si está completada, se agrega la clase "completada" y el CSS tacha el texto
        <article className={`tarjeta ${completada ? "completada" : ""}`}>
            <input type="checkbox" checked={completada} onChange={onAlternar} />

            <div className="tarjeta-info">
                <span className="tarjeta-tarea">{tarea}</span>
                <span className="tarjeta-nombre">
                    {emoji} {nombre}
                </span>
            </div>

            <button type="button" className="btn-eliminar" onClick={onEliminar}>
                ✕
            </button>
        </article>
    );
}

export default Tarjeta;
