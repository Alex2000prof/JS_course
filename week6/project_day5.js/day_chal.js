function anagramm(first, second) {
  let normal_first = first.replace(/\s+/g, "").toLowerCase();
  let normal_second = second.replace(/\s+/g, "").toLowerCase();

  if (normal_first.length !== normal_second.length) {
    return false;
  }
  let new_first = normal_first.split("").sort().join("");
  let new_second = normal_first.split("").sort().join("");
  return new_first === new_second;
}
