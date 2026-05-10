import { useNavigate } from "react-router-dom";
import "./css/OptionsAdmin.css";

function SelectType() {
  const navigate = useNavigate();

  return (
    <div className="select-container">

      <div className="select-card">
        <h1>Which table do you want to select?</h1>

        <div className="button-group">
          <button
            className="select-btn"
            onClick={() => navigate("/admin/users")}
          >
            USERS
          </button>

          <button
            className="select-btn"
            onClick={() => navigate("/admin/ongs")}
          >
            ONGS
          </button>
        </div>
      </div>

      <footer className="select-footer">
         Projeto acadêmico SENACSP 
      </footer>

    </div>
  );
}

export default SelectType;