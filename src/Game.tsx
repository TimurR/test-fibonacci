import polygon from "./assets/polygon.svg";
import ellipse from "./assets/ellipse.svg";
import rectangle from "./assets/rectangle.svg";
import { useState, useMemo } from "react";
import { portion, shapeType } from "./types";
import { getLastElements, shapeTypesNums } from "./utils";
import ControllPanel from "./ControllPanel";
import GameScreen from "./GameScreen";
import Modal from "./Modal";

const shapeTypes: shapeType[] = [
  { img: rectangle, name: "rectangle" },
  { img: ellipse, name: "ellipse" },
  { img: polygon, name: "polygon" },
];

export default function Game() {
  const [fbportion, setFbportion] = useState<portion[]>([]);
  const [shapeType, setShapeType] = useState(0);
  const [isDone, setIsDone] = useState(false);

  function handleModalClose() {
    restart();
    setIsDone(false);
  }

  function addPortion() {
    if (fbportion.length >= 10) {
      setIsDone(true);
      return;
    }
    setShapeType((shapeType) =>
      shapeTypesNums(shapeType, shapeTypes.length - 1)
    );
    if (fbportion.length < 2) {
      setFbportion([...fbportion, { amount: 1, shape: shapeType }]);
    } else {
      const [one, two] = getLastElements(2, fbportion);
      const newPortion: portion = {
        amount: one.amount + two.amount,
        shape: shapeType,
      };
      setFbportion([...fbportion, newPortion]);
    }
  }

  function removePortion() {
    if (fbportion.length > 0) {
      setFbportion((fbportion) => fbportion.slice(0, -1));
    }
  }

  function restart() {
    setFbportion([]);
  }
  const computedPortions = useMemo(
    () => <GameScreen fbportion={fbportion} shapeTypes={shapeTypes} />,
    [fbportion, shapeTypes]
  );

  return (
    <div className="flex flex-col grow">
      <ControllPanel
        fbportion={fbportion}
        addPortion={addPortion}
        removePortion={removePortion}
        restart={restart}
      />
      {computedPortions}
      {isDone && (
        <Modal onClose={handleModalClose}>
          <h3 className="text-xl">Current index is {fbportion.length}</h3>
          <p className="text-xs text-slate-600">The game will restart</p>
        </Modal>
      )}
    </div>
  );
}
