{
  const map = new Map();
  map.set("Name", "Agent A");
  map.set("Address", "Indonesia");

  console.info(map);
  console.info(map.get("Name"));
  console.info(map.get("Address"));
  console.info(map.get("Hobby"));

  for (const element of map) {
    console.info(`${element[0]}: ${element[1]}`);
  }

  map.forEach((value, key) => console.info(`${key} : ${value}`));
}
