export default function Footer() {
    return (
      <footer className="bg-neutral p-10 text-neutral-content">
        <div className="footer m-auto max-w-7xl">
          <div>
            <span className="footer-title">Serviços</span>
            <a className="link-hover link">Branding</a>
            <a className="link-hover link">Design</a>
            <a className="link-hover link">Marketing</a>
            <a className="link-hover link">Anuncios</a>
          </div>
          <div>
            <span className="footer-title">Empresa</span>
            <a className="link-hover link">Sobre nós</a>
            <a className="link-hover link">Contato</a>
            <a className="link-hover link">Vagas</a>
            <a className="link-hover link">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Jurídico</span>
            <a className="link-hover link">Termos de uso</a>
            <a className="link-hover link">Política de privacidade</a>
            <a className="link-hover link">Política de cookies</a>
          </div>
        </div>
      </footer>
    );
  }
  