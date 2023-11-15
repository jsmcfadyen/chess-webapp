import { useMemo } from "react";

const getSquareID = (rowNumber: number, i: number): string => {
    // rowNumber 0 = A, 1 = B, 2 = C...
    // i         0 = 1, 1 = 2, 2 = 3...
    return String.fromCharCode('A'.charCodeAt(0) + i) + (8 - rowNumber).toString();
}


type Props = { rowNumber: number, leftColor: 'white' | 'black' };
const BoardRow = (props: Props) => {

  const cells = useMemo(() => {
    let cells = [];
    const otherColor = props.leftColor === 'white' ? 'black' : 'white';
    for (let i = 0; i < 8; i++) {
      cells.push(
        <rect
          key={getSquareID(props.rowNumber, i)}
          x={i}
          y={props.rowNumber}
          width="12.5%"
          height="12.5%"
          fill={i % 2 ? props.leftColor : otherColor}
          onClick={() => {
            console.log(getSquareID(props.rowNumber, i))
            
          }}
        />
      );
    }
    return cells;
  }, []);

  return <g>{cells}</g>;
};
export default BoardRow;
