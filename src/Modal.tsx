import { PropsWithChildren } from "react";
import app from "./app.module.css";

export default function Modal(
  props: PropsWithChildren<{ onClose: () => void }>
) {
  const { onClose, children } = props;

  return (
    <div className="fixed inset-0 z-10 p-8 text-black bg-gray-700/90 flex">
      <div className="relative w-full max-w-sm mx-auto self-center">
        <div className="overflow-hidden bg-white rounded shadow-xl p-5 flex flex-col">
          <div className="p-4">{children}</div>
          <button onClick={onClose} className={`${app.fbbutton} self-end`}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
