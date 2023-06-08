import { scores } from "./features/table/components/TableData";
import Table from "./features/table/Table";
function App() {
  const scoresKeys = Object.keys(scores);
  const namaMahasiswa = Object.keys(scores.aspek_penilaian_1);

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(scores))}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };
  return (
    <div style={style.all}>
      <h1 style={style.headline}>Aplikasi Penilaian Mahasiswa</h1>
      <Table scoresKeys={scoresKeys} namaMahasiswa={namaMahasiswa} />
      <div style={style.buttonContainer}>
        <button style={style.button} onClick={exportData}>
          Simpan
        </button>
      </div>
    </div>
  );
}

const style = {
  headline: {
    fontSize: "40px",
    textAlign: "center",
    fontFamily: "lato",
    fontWeight: "500",
  },
  all: {
    width: "900px",
    margin: "10px auto",
  },
  button: {
    width: "70px",
    height: "30px",
    backgroundColor: "black",
    color: "white",
    marginRight: "170px",
    cursor: "pointer",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default App;
