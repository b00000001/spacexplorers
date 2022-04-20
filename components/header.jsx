const Header = () => {
  return (
    <nav className="text-gray-300 bg-gray-900 flex justify-between">
      <div className="nav-left">Nav Left</div>
      <div>
        <div className="text-5xl flex">
          Space
          <p className="text-red-600">E</p>xplorers
        </div>
      </div>
      <div className="nav-right">Nav Right</div>
    </nav>
  );
};

export default Header;
