export const getReverseGeocodedAddress = jest
  .fn()
  .mockImplementation(async (position) => {
    // Replace this with your desired mock data
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      // Add other properties based on your actual data structure
    };
  });
