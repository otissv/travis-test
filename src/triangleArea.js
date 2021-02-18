exports.triangleArea = function triangleArea(...args) {
  const [Ax, Ay] = args[0] || [];
  const [Bx, By] = args[1] || [];
  const [Cx, Cy] = args[2] || [];

  if (
    !Ax ||
    !Ay ||
    !Bx ||
    !By ||
    !Cx ||
    !Cy ||
    typeof Ax !== "number" ||
    typeof Ay !== "number" ||
    typeof Bx !== "number" ||
    typeof By !== "number" ||
    typeof Cx !== "number" ||
    typeof Cy !== "number"
  ) {
    throw new Error("Incorrect vertices");
  } else {
    return ((Ax * (By - Cy) + Bx * (Cy - Ay) + Cx * (Ay - By)) / 2) * -1;
  }
};
