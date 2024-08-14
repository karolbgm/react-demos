//IMPORTS

const {
  //renaming BrowserRouter to Router
  BrowserRouter: Router,
  Route,
  Routes,
  NavLink,
  Link,
  NavNavLink,
  Navigate,
  useNavigate,
  useParams,
  useLocation,
  useNavigation,
} = window.ReactRouterDOM;

const { useForm } = ReactHookForm;

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
  //fetch - ALWAYS A GET unless you change it
  //we always checkStatus
  //we parseJSON if we get data back
  list() {
    return fetch(url).then(checkStatus).then(parseJSON);
  },
  find(id) {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },
  add(team) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(team), //we need to turn the team data into JSON
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },
  update(team) {
    fetch(`${url}/${team.id}`, {
      method: "PUT",
      body: JSON.stringify(team),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkStatus);
  },
  //they all need checkStatus
  //update - parseJson it needs only here
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
            <Link to={`/teams/edit/${team.id}`}>Edit</Link>
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
          <h2>Teams</h2>
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
function TeamForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: loadTeam,
  });

  const [busy, setBusy] = useState(false);
  //useParams returns a params object with all the params
  // let id = params.id
  const { id } = useParams();
  const numberId = Number(id);
  const [team, setTeam] = useState({});
  const [error, setError] = useState(undefined);

  const divisions = [
    { id: 1, name: "Southeast" },
    { id: 2, name: "Atlantic" },
    { id: 3, name: "Central" },
    { id: 4, name: "Southwest" },
    { id: 5, name: "Northwest" },
    { id: 6, name: "Pacific" },
  ];

  async function loadTeam() {
    if (!numberId) {
      return Promise.resolve({});
    } else {
      try {
        return await teamAPI.find(numberId);
      } catch (error) {
        setError(error.message);
      }
    }
  }

  const navigate = useNavigate();
  async function saveTeam(team) {
    try {
      setBusy(true);
      if (!team.id) {
        let newTeam = await teamAPI.add(team);
      } else {
        await teamAPI.update(team);
      }
      //Navigate here
      navigate("/teams");
    } catch (error) {
      seterrorMessage(error.message);
    } finally {
      setBusy(false);
    }
  }

  // function saveTeam(team){
  //     console.log(team);
  // }

  return (
    <>
      {busy && <p>Saving...</p>}
      {error && <div className="alert alert-danger">{error.message}</div>}
      <form onSubmit={handleSubmit(saveTeam)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Team Name
          </label>
          <input
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          <label className="form-label" htmlFor="division">
            Team Division
          </label>
          <select
            id="division"
            className={`form-select ${errors.division ? "is-invalid" : ""}`}
            {...register("division", { required: "Division is required" })}
          >
            <option value="">Select Division</option>
            {divisions.map((division) => {
              return (
                <option key={division.id} value={division.name}>
                  {division.name}
                </option>
              );
            })}
          </select>
          {errors.division && <div className="invalid-feedback">{errors.division.message}</div>}
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" type="submit">
            Save
          </button>
          <Link className="btn btn-outline-secondary" to="/teams">
            Cancel
          </Link>
        </div>
      </form>
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
      <TeamForm />
    </>
  );
}
function EditTeamPage() {
  const { id } = useParams();
  const teamId = Number(id);
  return (
    <>
      <header className="d-flex justify-content-between mb-4">
        <h2>Edit Team</h2>
      </header>
      <hr />
      {/* {typeof id} */}
      <TeamForm />
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
              <Route path="teams/edit/:id" element={<EditTeamPage />} />
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
