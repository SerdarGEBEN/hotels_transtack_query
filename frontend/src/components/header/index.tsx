import { Link } from "react-router-dom";
import Container from "../container";

const Header = () => {
  return (
    <Container designs="border-b">
      <div className="flex justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="font-bold text-xl md:text-2xl">Tripster</h1>

          <nav className="flex gap-5 items-center">
            <Link to="/">Oteller</Link>
            <Link className="max-md:hidden" to="/">
              Popüler
            </Link>
            <Link to="/create">Oluştur</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button className="border border-blue-500 rounded-full py-1 px5 max-md:hidden">
            Kayıt Ol
          </button>
          <button className="bg-blue-900 text-white rounded-full py-1 px-5">
            Giriş Yap
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
