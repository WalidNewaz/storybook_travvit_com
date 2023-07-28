import { FeatureCollection } from 'geojson';
import type { Geometry } from 'geojson';

const MAPBOX_ACCESS_TOKEN: string = process.env.MAPBOX_ACCESS_TOKEN as string;

type AddressKeys =
  | 'address'
  | 'neighborhood'
  | 'postcode'
  | 'city'
  | 'county'
  | 'state'
  | 'country';

type TravvitLocationType = {
  text: string;
  geometry?: Geometry;
};

type AddressTypes = {
  [key in AddressKeys]?: TravvitLocationType;
};

export interface TravvitAddressType extends AddressTypes {
  fullName: string;
}

export const getReverseGeocodedAddress = async (
  position: GeolocationPosition,
): Promise<void | TravvitAddressType | undefined> => {
  const { latitude, longitude } = position.coords;
  try {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${MAPBOX_ACCESS_TOKEN}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data?.type === 'FeatureCollection') {
      const featureCollection = data as FeatureCollection;
      if (featureCollection.features.length === 0) {
        return;
      }
      const address: TravvitAddressType = featureCollection.features.reduce(
        (acc, feature: any) => {
          const placeName = feature.place_name;
          const placeAddress = feature.address;
          const placeType = feature.place_type[0];
          const placeText = feature.text;
          const placeGeometry = feature.geometry;
          const place = {
            text: placeText,
            geometry: placeGeometry,
          };
          if (placeType === 'address') {
            acc.fullName = placeName;
            acc.address = {
              text: `${placeAddress} ${placeText}`,
              geometry: placeGeometry,
            };
          } else {
            acc[placeType] = place;
          }
          return acc;
        },
        {} as any,
      );
      // console.log('Derived address: ', address);
      return address;
    }
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const getGeocodedAddress = (
  feature: any,
): void | TravvitAddressType | undefined => {
  if (feature?.type === 'Feature') {
    const address: TravvitAddressType = feature.context.reduce(
      (acc: any, context: any) => {
        const placeType = context.id.split('.')[0];
        const placeText = context.text;
        const place = {
          text: placeText,
        };
        acc[placeType] = place;
        return acc;
      },
      {
        fullName: feature.place_name,
        address: {
          text: `${feature.address} ${feature.text}`,
          geometry: feature.geometry,
        },
      } as any,
    );
    return address;
  }
};
