
import Chess_bdt45 from "../assets/Chess_bdt45.svg";
import Chess_rdt45 from "../assets/Chess_rdt45.svg";
import Chess_kdt45 from "../assets/Chess_kdt45.svg";
import Chess_ndt45 from "../assets/Chess_ndt45.svg";
import Chess_pdt45 from "../assets/Chess_pdt45.svg";
import Chess_qdt45 from "../assets/Chess_qdt45.svg";

import Chess_blt45 from "../assets/Chess_blt45.svg";
import Chess_rlt45 from "../assets/Chess_rlt45.svg";
import Chess_klt45 from "../assets/Chess_klt45.svg";
import Chess_nlt45 from "../assets/Chess_nlt45.svg";
import Chess_plt45 from "../assets/Chess_plt45.svg";
import Chess_qlt45 from "../assets/Chess_qlt45.svg";

const isCharCodeASCIINumber = (c: number) =>{
  return !(c >= 0 && c <= 127);
}
export const useGetBoardPieces = (): any[] => {
  let gamePieces: any[] = [];
  let fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  const rowsFEN = fen.split(/[\/ ]/).slice(0, 8);
  rowsFEN.map((row, rowNumber) => {
    let currColIdx = 0
    row.split("").map((fenSymbol, xx) => {
      if (isCharCodeASCIINumber(fenSymbol.charCodeAt(0))){
        currColIdx += parseInt(fenSymbol)
        return;
      }
      const svgProps = {
        height: "12.5%",
        width: "12.5%",
        y: rowNumber,
        x: currColIdx,
        key: 'p' + rowNumber + currColIdx
      }
      currColIdx++;
      switch (fenSymbol) {
        case "r":
          gamePieces.push(
            <image href={Chess_rdt45} {...svgProps}/>
          );
          return;
        case "b":
          gamePieces.push(
            <image href={Chess_bdt45} {...svgProps}/>
          );
          return;
        case "n":
          gamePieces.push(
            <image href={Chess_ndt45} {...svgProps}/>
          );
          return;
        case "k":
          gamePieces.push(
            <image href={Chess_kdt45} {...svgProps}/>
          );
          return;
        case "q":
          gamePieces.push(
            <image href={Chess_qdt45} {...svgProps}/>
          );
          return;
        case "p":
          gamePieces.push(
            <image href={Chess_pdt45} {...svgProps}/>
          );
          return;
        case "R":
          gamePieces.push(
            <image href={Chess_rlt45} {...svgProps}/>
          );
          return;
        case "B":
          gamePieces.push(
            <image href={Chess_blt45} {...svgProps}/>
          );
          return;
        case "N":
          gamePieces.push(
            <image href={Chess_nlt45} {...svgProps}/>
          );
          return;
        case "K":
          gamePieces.push(
            <image href={Chess_klt45} {...svgProps}/>
          );
          return;
        case "Q":
          gamePieces.push(
            <image href={Chess_qlt45} {...svgProps}/>
          );
          return;
        case "P":
          gamePieces.push(
            <image href={Chess_plt45} {...svgProps}/>
          );
          return;
        default:
          return;
      }
    });
  });
  return gamePieces;
};
