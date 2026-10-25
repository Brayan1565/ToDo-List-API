// Encabezado: solo muestra los totales que recibe por props
export default function Encabezado({ total = 0, pendientes = 0 }) {
    return (
        <header className="encabezado">
            <h1>Mi lista de tareas</h1>
            {/* Dos "badges" (etiquetas) con los totales */}
            <div className="totales">
                <span className="badge">Total: {total}</span>
                <span className="badge badge-pendiente">Pendientes: {pendientes}</span>
            </div>
        </header>
    );
}
