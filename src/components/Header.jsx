export default function Header({ user }) {
  return (
    <header className="app-header">
      <span className="app-brand">Northwind</span>
      <nav className="app-nav">
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
      </nav>
      <span className="app-user">{user.displayName}</span>
    </header>
  );
}
