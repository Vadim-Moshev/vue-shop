export default function formatNumber(number, separator = " ") {
  let str = number.toString();

  if (str <= 3) {
    return str;
  }

  const restLength = str.length % 3;
  const rest = str.substr(0, restLength);
  str = str.replace(rest, "");

  const triplets = [];
  while (str !== "") {
    triplets.push(str.substr(0, 3));
    str = str.substr(3);
  }

  const separatedRest = rest === "" ? "" : rest + separator;

  return `${separatedRest}${triplets.join(separator)}`;
}
