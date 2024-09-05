import app from "./app.module.css";
import { portion } from "./types";

export default function ControllPanel({
  fbportion,
  addPortion,
  removePortion,
  restart,
}: {
  fbportion: portion[];
  addPortion: () => void;
  removePortion: () => void;
  restart: () => void;
}) {
  return (
    <div className={app.fbpannel}>
      <div className="text-lg">
        Current index: <span className="text-2xl">{fbportion.length}</span>
      </div>
      <div className="flex flex-col gap-y-1 mr-5 md:flex-row md:mr-0">
        <button onClick={addPortion} className={app.fbbutton}>
          Add
        </button>
        <button
          disabled={fbportion.length === 0}
          onClick={removePortion}
          className={app.fbbutton}
        >
          Remove
        </button>
        <button onClick={restart} className={app.fbbuttonslate}>
          Restart
        </button>
      </div>
    </div>
  );
}
