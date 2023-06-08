import TableRow from "./components/TableRow";
import { aspects } from "../../constant/constant";
function Table({ scoresKeys, namaMahasiswa }) {
  return (
    <table style={style.table}>
      <thead>
        <tr>
          <th style={style.thead}></th>
          {scoresKeys.map((scorekey, index) => {
            return <th key={scorekey}>{aspects[index]}</th>;
          })}
        </tr>
      </thead>
      <tbody style={style.tbody}>
        {namaMahasiswa.map((nama, index) => {
          return <TableRow key={nama} index={index} user={nama} />;
        })}
      </tbody>
    </table>
  );
}
const style = {
  button: {
    width: "70px",
    height: "35px",
    backgroundColor: "black",
    color: "white",
  },
};
export default Table;
