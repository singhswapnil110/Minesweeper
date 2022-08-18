import Flag from "../finish.png";
import Mine from "../bomb.png";

export const Tile = (props) => {
  console.log(props)
  //const {x,y,isFlagged,isMine,isRevealed,value,setFlag} = ...props;
  return (
    <div className="tile">
      {!isRevealed && (
        <button
          onContextMenu={(e) => {
            setFlag(x, y);
            e.preventDefault();
          }}
        >
          {isFlagged && <img src={Flag} alt="Flag" />}
        </button>
      )}
      {!isMine ? (
        <span>{value !== 0 ? value : ""}</span>
      ) : (
        <img src={Mine} alt="Mine" />
      )}
    </div>
  );
};
