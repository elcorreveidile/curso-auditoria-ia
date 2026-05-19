export default function Footer() {
  return (
    <footer className="border-t border-ink mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 font-mono text-xs tracking-wide text-muted">
        <div>
          <p className="text-accent text-base mb-2">[|]</p>
          <p>La Clase Digital</p>
          <p>9, 16, 23 y 30 de septiembre de 2026</p>
          <p className="italic">Formato online</p>
        </div>
        <div>
          <p className="uppercase mb-2 text-ink">Docente</p>
          <p>Javier Benítez Láinez</p>
          <p className="italic">laclasedigital.com</p>
        </div>
        <div>
          <p className="uppercase mb-2 text-ink">Más cursos</p>
          <p>
            <a href="https://laclasedigital.com" className="hover:text-accent" target="_blank" rel="noopener noreferrer">
              ↗ laclasedigital.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-ink/20 py-4 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} Javier Benítez Láinez · Todos los derechos reservados
      </div>
    </footer>
  );
}
