import app from "./app.module.css";
import fibonacciLogo from "./assets/icons8-fibonacci-circles-100.svg";

export default function Header() {
  return (
    <div className={app.header}>
      <img className="ml-2 size-10" src={fibonacciLogo} title="fibonacci" />
      <h2 className="ml-2 text-3xl text-white">Fibonacci Sequence</h2>
    </div>
  );
}
