import Parse from 'parse';

Parse.Cloud.define("key", async (request) => {
    return "hello world"
})

function excursionsCloud(){
    try {
        const rawResponse = await fetch(
          "https://parseapi.back4app.com/classes/Excursion",
          {
            method: "GET",
            headers: {
              "X-Parse-Application-Id": "JZR7qAeKjlKQTGTUsB6MS80ZfUiCpdUNaviJnH6a",
              "X-Parse-REST-API-Key": "HhE6x96owxbIObVadQXzyt2ko4kyEUDBIZ0QrZPS",
            },
          }
        );
        const content = await rawResponse.json();
        const data = [];
        for (var i in content.results) {
          let excursion = {
            title: content.results[i].destination,
            id: content.results[i].objectId,
          };
          excursions.push(excursion);
        }
        console.log(excursions);
        return excursions;
      } catch (error) {
        console.log(error);
    }
}

function duties(){
  const parseQuery = new Parse.Query("Duty");
  parseQuery.contains("excursionId", context);
  try {
    let duties = await parseQuery.find();
    // Be aware that empty or invalid queries return as an empty array
    // Set results to state variable
    setDuties(duties);
    return duties;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(error);
    return false;
  }
}