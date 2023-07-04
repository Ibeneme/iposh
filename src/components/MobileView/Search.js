import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  return (
    <div
    className="nav-three-icons-show-div"
      style={{
        padding: "1em",

      }}
    >
      <h3>Good day IB</h3>
      <div
        style={{
          width: "100%",
          position: "relative",
          display: "inline-block",
          marginTop: "0.82em",
        }}
      >
        <input
          style={{
            width: "100%",
            height: '50px',
            padding: "0.8em 2.9em",
            paddingLeft: "2.5em",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          placeholder="Search for Hairs"
        />
        <BiSearch
          style={{
            position: "absolute",
            top: "50%",
            left: "0.6em",
            transform: "translateY(-50%)",
            fontSize: "1.2em",
            color: "#888",
          }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
