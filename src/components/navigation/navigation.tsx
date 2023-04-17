import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/addPet">Add Pet</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
