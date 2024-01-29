const axios = require("axios");

let filteredHSSCStations = [];

async function getHSSCBusList() {
  try {
    const response = await axios.get(
      "https://kingom.skku.edu/skkuapp/getBusData.do?route=2009&_=1685209241816"
    );
    const apiData = response.data.items;

    const currentTime = new Date();

    const updatedStations = apiData
      .filter((item) => item.carNumber)
      .map((apiItem) => {
        const existingStation = filteredHSSCStations.find(
          (station) =>
            station.sequence === apiItem.sequence &&
            station.carNumber === apiItem.carNumber.slice(-4)
        );

        let stationToUpdate;

        if (existingStation) {
          stationToUpdate = existingStation;
        } else {
          stationToUpdate = {
            sequence: apiItem.sequence,
            stationName: apiItem.stationName,
            carNumber: apiItem.carNumber.slice(-4),
            eventDate: apiItem.eventDate,
          };
        }

        if (stationToUpdate.eventDate) {
          const eventDate = new Date(stationToUpdate.eventDate);
          const timeDiff = (currentTime - eventDate) / 1000;
          stationToUpdate.estimatedTime = Math.round(Math.abs(timeDiff));
        }

        return stationToUpdate;
      });

    filteredHSSCStations = updatedStations;
    console.log("Updated filteredHSSCStations: ", filteredHSSCStations);
    return filteredHSSCStations;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getHSSCBusList };
