import ImportFormDialog from "../../Components/ImportFormDialog";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import Playground from "../../Containers/PlayGround";
import useAppContext from "../../hooks/useAppContext";
import HomePageLayout from "../../layouts/HomePageLayout";
import { useCallback, useMemo, useState, useEffect } from "react";
import Swal from "sweetalert";

function Test() {
  const [databases, setDatabases] = useState([]);

  useEffect(() => {
    // Funcția de încărcare a datelor
    fetchDatabases();
  }, []);

  const fetchDatabases = async () => {
    try {
      const response = await fetch(
        "https://localhost:7010/api/exportDatabases"
      ); // Endpoint-ul API pentru a obține lista de baze de date
      const databaseName = await response.json();
      setDatabases(databaseName);
      console.log("data2", databaseName); // Actualizăm state-ul cu datele obținute
    } catch (error) {
      console.error("Error fetching databases:", error);
    }
  };

  const handleDatabaseClick = async (databaseName) => {
    try {
      // Trimiteți numele bazei de date către endpoint-ul API
      const response = await fetch(
        "https://localhost:7010/api/exportDatabases",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ database: databaseName }),
        }
      );

      if (response.ok) {
        // Tratați răspunsul cu succes
        console.log(
          "Baza de date selectată a fost trimisă cu succes către backend."
        );
        showSuccessAlert();
      } else {
        // Tratați cazul în care solicitarea către backend a eșuat
        console.log("Solicitarea către backend a eșuat.");
        showErrorAlert();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showAlert = () => {
    Swal("Mesaj informativ", "Acesta este un mesaj informativ.", "info");
  };

  // Exemplu de utilizare a unei alerte de succes
  const showSuccessAlert = () => {
    Swal("Succes!", "Operațiunea a fost realizată cu succes.", "success");
  };

  // Exemplu de utilizare a unei alerte de eroare
  const showErrorAlert = () => {
    Swal("Eroare!", "A apărut o eroare în timpul procesării.", "error");
  };

  // Exemplu de utilizare a unei prompt-uri
  const showPrompt = () => {
    Swal("Introduceți un text:", {
      content: "input",
    }).then((value) => {
      Swal(`Ați introdus: ${value}`);
    });
  };

  return (
    <div>
      <h1>Lista cu baze de date disponibile:</h1>
      <ul>
        {databases.map((database, index) => (
          <li key={index} onClick={() => handleDatabaseClick(database)}>
            {database}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={showAlert}>Afișează alertă</button>
        <button onClick={showSuccessAlert}>Afișează alertă de succes</button>
        <button onClick={showErrorAlert}>Afișează alertă de eroare</button>
        <button onClick={showPrompt}>Afișează prompt</button>
      </div>
    </div>
  );
}

export default Test;
