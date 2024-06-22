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
function compare<T extends keyof AllType>(
  top: Pick<AllType, T>,
  bottom: Pick<AllType, T>
): Pick<AllType, T> {
  return {
    ...top,
    ...bottom,
  } as Pick<AllType, T>;
}
