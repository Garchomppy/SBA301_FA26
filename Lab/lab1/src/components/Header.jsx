import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { navbar } from "../data/Navbar";

export default function Header() {
  return (
    <>
      <Nav defaultActiveKey="/home" as="ul" className="bg-dark p-2">
        {navbar.map((link, index) => (
          <Nav.Item as="li" key={index}>
            <Nav.Link href={link.path} className="text-white">
              {link.title}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <main className="flex-grow-1">
        <Container className="py-5">
          <div className="text-center mb-5 py-5 bg-primary text-white rounded-4 shadow-lg">
            <h1 className="display-4 fw-bold">
              Chào mừng đến với Website của chúng tôi
            </h1>
            <p className="lead fs-4 mt-3">
              Một ứng dụng React hiện đại, đẹp mắt và responsive.
            </p>
            <button className="btn btn-light btn-lg mt-4 px-5">
              Bắt đầu ngay
            </button>
          </div>
        </Container>
      </main>
    </>
  );
}
