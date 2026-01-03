export default function Card({ children, className = "" }) {
    return (
        <div className={`bg-surface border border-white/10 rounded-3xl p-6 overflow-hidden relative ${className}`}>
            {children}
        </div>
    );
}
