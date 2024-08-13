const {
  //renaming BrowserRouter to Router
  BrowserRouter: Router,
  Route,
  Routes,
  NavLink,
  Link,
  NavNavLink,
  Navigate,
  useParams,
  useLocation,
  useNavigation,
} = window.ReactRouterDOM;

const { useState, useEffect } = React;

const BASE_URL = "http://localhost:9000";

//HELPER or UTILITIES FUNCTIONS (translateStatus, checkStatus, parseJson, delay)

function translateStatusToErrorMessage(status) {
  switch (status) {
    case 401:
      return "Please sign in again.";
    case 403:
      return "You do not have permission to view the data requested.";
    default:
      return "There was an error saving or retrieving data.";
  }
}

async function checkStatus(response) {
  if (response.ok) return response;

  const httpError = {
    status: response.status,
    statusText: response.statusText,
    url: response.url,
    body: await response.text(),
  };
  console.log(`http error status: ${JSON.stringify(httpError, null, 1)}`);

  let errorMessage = translateStatusToErrorMessage(httpError.status);
  throw new Error(errorMessage);
}

function parseJSON(response) {
  return response.json();
}

function delay(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

//API OBJECT - communicates with the API or the backend
const url = `${BASE_URL}/teams`;
//fetch - then check the status to see if it's okay(if not we catch the error), then parse json
const teamAPI = {
  list() {
    return fetch(url).then(checkStatus).then(parseJSON);
  },
};

//COMPONENTS UI
function TeamList() {
  const [busy, setBusy] = useState(false);
  const [teams, setTeams] = useState([]);
  const [errorMessage, seterrorMessage] = useState(undefined);

  async function loadTeams() {
    try {
      setBusy(true);
      let data = await teamAPI.list();
      setTeams(data);
    } catch (error) {
      seterrorMessage(error.message);
    } finally {
      setBusy(false);
    }
  }

  useEffect(function () {
    loadTeams();
  }, []);

  return (
    <>
      <div className="list mt-2">
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {busy && <p>Loading...</p>}
        {teams?.map((team) => (
          <div className="card p-4 d-flex" key={team.name}>
            <div>
              <strong>{team.name}</strong>
              <div>{team.division}</div>
            </div>
            <Link className="btn btn-primary" to="edit">
              Edit Team
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
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
      <div>
        <header className="d-flex justify-content-between mb-4">
          <h2>Songs</h2>
          <Link className="btn btn-primary" to="/teams/create">
            Add Team
          </Link>
        </header>
        <hr />
        <h2>TeamsPage</h2>
        <TeamList />
      </div>
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
      <p>The page you requested could not be found. Is there any chance you were looking for one of these?</p>
    </>
  );
}
function CreateTeamPage() {
  return (
    <>
      <header className="d-flex justify-content-between mb-4">
        <h2>Create Team</h2>
      </header>
      <hr />
    </>
  );
}
function EditTeamPage() {
  return (
    <>
      <header className="d-flex justify-content-between mb-4">
        <h2>Edit Team</h2>
      </header>
      <hr />
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <div>
          <nav className="container mt-4 mb-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/teams">
                  Teams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/players">
                  Players
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="teams" element={<TeamsPage />} />
              <Route path="players" element={<PlayersPage />} />
              <Route path="teams/create" element={<CreateTeamPage />} />
              <Route path="teams/edit" element={<EditTeamPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

//RENDER APP COMPONENT
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
