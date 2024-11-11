import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "./slice";
import { selectCampers } from "../campers/selectors";

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filter) => {
    return campers.filter((camper) => {
      const matchesLocation = filter.location
        ? camper.location.toLowerCase().includes(filter.location.toLowerCase())
        : true;

      const matchesForm = filter.form ? camper.form === filter.form : true;

      const matchesTransmission = filter.transmission
        ? camper.transmission === filter.transmission
        : true;

      const matchesDetails = Object.keys(filter.details).every((detail) => {
        return !filter.details[detail] || camper.details[detail];
      });

      return (
        matchesLocation && matchesForm && matchesDetails && matchesTransmission
      );
    });
  }
);
