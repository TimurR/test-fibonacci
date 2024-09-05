import app from "./app.module.css";
import { Shape } from "./shape";
import { portion, shapeType } from "./types";

export default function GameScreen({
  fbportion,
  shapeTypes,
}: {
  fbportion: portion[];
  shapeTypes: shapeType[];
}) {
  return (
    <div className={app.fbcontainer}>
      {fbportion.map(({ amount, shape }, i) => (
        <div key={`portion-group-${i}`} className="flex m-5">
          <span className="w-11 text-2xl">{amount}</span>
          <div className="grow flex justify-center gap-4 flex-wrap">
            {Array.from({ length: amount }, (_, i) => (
              <Shape
                shape={shapeTypes[shape]}
                key={`portion-item-${i}-${shapeTypes[shape].name}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
