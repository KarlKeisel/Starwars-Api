// Will look at the key for the DisplayField and return classNames for the object.
// If no match, then DisplayField will populate with 'medium' importance classNames.

const large = "large, col-12";
const largeThin = "large, col-lg-6";
const mediumLong = "medium, col-12";
const medium = "medium, col-lg-4, col-md-6";
const smallLong = "small, col-12";
const small = "small, col-md-6";

// All possible combinations of keys that the SWApi uses. Will help in styling.
const keyMatcher = {
    "name": large,
    "height": medium,
    "mass": medium,
    "hair_color": medium,
    "skin_color": medium,
    "eye_color": medium,
    "birth_year": medium,
    "gender": mediumLong,
    "homeworld": large,
    "films": large,
    "species": large,
    "vehicles": large,
    "starships": large,
    "rotation_period": medium,
    "orbital_period": medium,
    "diameter": medium,
    "climate": medium,
    "gravity": medium,
    "terrain": medium,
    "surface_water": medium,
    "population": medium,
    "residents": large,
    "title": large,
    "episode_id": smallLong,
    "opening_crawl": `crawl, ${large}`, // Will need to scroll or be careful about size.
    "director": medium,
    "producer": medium,
    "release_date": medium,
    "characters": large,
    "planets": large,
    "classification": medium,
    "designation": medium,
    "average_height": medium,
    "skin_colors": medium,
    "hair_colors": medium,
    "eye_colors": medium,
    "average_lifespan": medium,
    "language": largeThin,
    "people": large,
    "model": largeThin,
    "manufacturer": largeThin,
    "cost_in_credits": medium,
    "length": medium,
    "max_atmosphering_speed": medium,
    "crew": medium,
    "passengers": medium,
    "cargo_capacity": medium,
    "consumables": medium,
    "vehicle_class": medium,
    "pilots": large,
    "hyperdrive_rating": medium,
    "MGLT": medium,
    "starship_class": medium,
    "created": small,
    "edited": small,
    "url": `url, ${mediumLong}`,
};

export {large, largeThin, mediumLong, medium, small, smallLong, keyMatcher}