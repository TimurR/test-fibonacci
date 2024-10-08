import { shapeType } from "./types";

export function Shape({
  shape,
  ...props
}: { shape: shapeType } & React.HTMLAttributes<HTMLImageElement>) {
  return (
    <>
      <img className={`size-8`} src={shape.img} title={shape.name} {...props} />
    </>
  );
}
