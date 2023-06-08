import { scores } from "./TableData";
import SelectOptions from "./SelectOptions";
import userLogo from "../../../assets/user.png";
import { mahasiswa } from "../../../constant/constant";

function TableRow({ user, index }) {
  const aspekName = Object.keys(scores);

  return (
    <tr style={style.row}>
      <td style={style.content}>
        <img style={style.image} src={userLogo} alt="userLogo" />
        {mahasiswa[index]}
      </td>
      {aspekName.map((aspek, index) => {
        return (
          <td key={index}>
            <SelectOptions value={scores[aspek][user]} aspek={aspek} user={user} />
          </td>
        );
      })}
    </tr>
  );
}

const style = {
  row: {
    border: "1px solid #E0E1E2",
    padding: "1px",
    width: "100%",
  },
  image: {
    marginRight: "4px",
    width: "20px",
  },
  content: { alignContent: "center" },
};
export default TableRow;
