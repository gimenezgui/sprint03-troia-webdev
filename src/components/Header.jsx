export default function Header() {
    return (
        <header className="site-header">
            <a className="brand" href="#inicio">
                TRÓIA <span>/ JOVI</span>
            </a>

            <nav aria-label="Navegação principal">
                <a href="#solucao">Solução</a>
                <a href="#publico">Público</a>
                <a href="#galeria">Galeria</a>
                <a href="#demo">Demo</a>
                <a href="#equipe">Equipe</a>
                <a href="#contato">Contato</a>
            </nav>

            <a className="header-button" href="#laboratorio">Testar agora</a>
        </header>
    );
}