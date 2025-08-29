export const apiEndponts = {
    GET_SUGGESTED_LOCATION: () => `selfdrive/v1/search-locations/getCitiesOnCountryCode/UAE`,
    GET_INVENTORY_AT_DAILY_HOME_PAGE: (countryId: string = "68835bbacd2ef39904163d27") => `selfdrive/v1/inventory/getAllInventoryByCountry/${countryId}`,
    GET_CAR_RANTAL_LOCATION_ON_COUNTRY: (countryCode: string = "UAE") => `selfdrive/v1/car-rental-locations/getAllCarRentalLocationsOnCountry/${countryCode}`,
    GET_ALL_INVENTORY: () => `selfdrive/v1/inventory/getAllInventory`,
    GET_SINGLE_CAR_INVENTORY : (queryString : string) => `selfdrive/v1/inventory/getSingleInventory?${queryString}`,
    ADD_USER_CONTACT_QUERY: () => `selfdrive/v1/contact-us/addContactUsQuery`,
}