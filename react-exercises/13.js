const {
    //renaming BrowserRouter to Router
    BrowserRouter: Router,
    Route,
    Routes,
    NavLink,
    NavNavLink,
    Navigate,
    useParams,
    useLocation,
    useNavigation,
  } = window.ReactRouterDOM;


function HomePage() {
  return (
    <>
      <h2>HomePage</h2>
    </>
  );
}
function TeamsPage() {
  return (
    <>
      <h2>TeamsPage</h2>
    </>
  );
}
function PlayersPage() {
  return (
    <>
      <h2>PlayersPage</h2>
    </>
  );
}

function NotFound() {
  return (
    <>
      <h2>Uh oh.</h2>
      <p>
        The page you requested could not be found. Is there any chance you
        were looking for one of these?
      </p>
    </>
  );
}

function App() {
  return(<>
   <Router>
      <div>
        <nav className="container mt-4 mb-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/teams">Teams</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/players">Players</NavLink>
            </li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="teams" element={<TeamsPage />} />
            <Route path="players" element={<PlayersPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  </>)
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


