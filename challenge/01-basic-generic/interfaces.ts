import houses from 'houses.json';
interface House {
    name: string,
    planets: string[] | string,
}

interface HouseWithID extends House {
    id: number,
}

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: (house: House) => boolean): HouseWithID[];

function findHouses(houses: House[]): HouseWithID[];
function findHouses(
    houses: House[],
    filter: (house: House) => boolean
): HouseWithID[];

import housesElement from './houses.json';

function findHouses(houses: string | House[], filter?: (house: House) => boolean): HouseWithID[] {
    let resHouses: House[] = [];
    const filterHouses: ((h: House) => boolean)[] = [];
    if (typeof houses === 'string') {
        filterHouses.push((house: House) => house.name === houses);
    }
    if (!!filter) {
        filterHouses.push(filter);
    }

    resHouses = housesElement.map(house => filterHouses.every(filter => filter(house)) ? house : false).filter(h => !!h);

    return resHouses.map((house, index) => ({ ...house, id: index }));
}

export default findHouses;