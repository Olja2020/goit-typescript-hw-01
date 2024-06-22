type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// function compare(top, bottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

function compare<T extends AllType>(
  top: Pick<T, "color" | "name">,
  bottom: Pick<T, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
