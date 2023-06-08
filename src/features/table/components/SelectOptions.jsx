import { scores } from "./TableData";

function SelectOptions({ value, aspek, user }) {
  const constants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const changeValue = async (e) => {
    scores[aspek][user] = parseInt(e);
  };

  return (
    <select
      style={style.select}
      defaultValue={value}
      onChange={(e) => {
        changeValue(e.target.value);
      }}
    >
      {constants.map((constant) => {
        return (
          <option style={style.option} key={constant} value={constant}>
            {constant}
          </option>
        );
      })}
    </select>
  );
}
const style = {
  select: {
    width: "150px",
    borderLeft: "2px solid #DBDBDB",
    borderTop: "2px solid #DBDBDB",
    borderRight: "none",
    borderBottom: "none",
    cursor: "pointer",
  },
  option: {
    cursor: "pointer",
  },
};
export default SelectOptions;
