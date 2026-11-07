// Every picture the site shows, and where it is saved (client/public/images/...).
// If a file is missing, the site shows a placeholder saying which photo is needed.
// Photos of the CST guest house were taken by the team; client/public/images/README.md lists them all.
const DIR = '/images';

// Home page banner: the guest house lit up in the evening.
export const HERO_PHOTO = { file: 'guesthouse/evening.jpg', label: 'The CST guest house in the evening' };

// Sign-in page side picture.
export const SIGN_IN_PHOTO = { file: 'guesthouse/front-night.jpg', label: 'Front of the CST guest house at night' };

// The building (Home page gallery)
export const GUEST_HOUSE_PHOTOS = [
  { file: 'guesthouse/front.jpg', label: 'Front of the guest house', hint: 'Front of the building and its entrance' },
  { file: 'guesthouse/garden.jpg', label: 'Garden side', hint: 'The garden side of the building' },
  { file: 'guesthouse/back.jpg', label: 'Back of the guest house', hint: 'The back of the building' },
  { file: 'guesthouse/entrance.jpg', label: 'Main entrance', hint: 'Where guests arrive' },
];

// Shared spaces (Home page "Facilities")
export const FACILITIES = [
  { file: 'facilities/dining-room.jpg', label: 'Dining room', text: 'Sofas and dining tables for meals and meeting other guests.' },
  { file: 'facilities/canteen.jpg', label: 'Canteen', text: 'Snacks, drinks and daily needs inside the guest house.' },
  { file: 'facilities/outdoor-dining.jpg', label: 'Outdoor dining', text: 'Tables in the open courtyard, lit in the evening.' },
  { file: 'hall/hall-1.jpg', label: 'Conference hall', text: 'The 25-seat meeting hall upstairs, bookable by the day.', to: '/hall' },
  { file: 'rooms/suite-lounge.jpg', label: 'Suite 1', text: 'A private suite with bedroom, lounge, kitchenette and bathroom.', to: '/rooms' },
];

// Rooms: the guest house has standard 3-bed rooms and a suite, so photos go by room type.
const THREE_BED_PHOTOS = [
  { file: 'rooms/three-bed-1.jpg', label: '3-bed room', hint: 'The room with its 3 beds' },
  { file: 'rooms/three-bed-2.jpg', label: '3-bed room, beds', hint: 'Beds by the window' },
  { file: 'rooms/three-bed-3.jpg', label: '3-bed room, wardrobe', hint: 'Wardrobe, desk and storage' },
  { file: 'rooms/three-bed-bath.jpg', label: '3-bed room, bathroom', hint: 'Attached bathroom' },
];
const SUITE_PHOTOS = [
  { file: 'rooms/suite-bedroom.jpg', label: 'Suite bedroom', hint: 'Double bed and wardrobe' },
  { file: 'rooms/suite-lounge.jpg', label: 'Suite lounge', hint: 'Sitting area' },
  { file: 'rooms/suite-kitchen.jpg', label: 'Suite kitchenette', hint: 'Fridge, kettle and cooking corner' },
  { file: 'rooms/suite-bath.jpg', label: 'Suite bathroom', hint: 'Attached bathroom' },
  { file: 'rooms/suite-entrance.jpg', label: 'Suite entrance', hint: 'The suite door' },
];
export function roomPhotos(room) {
  return room.room_type === 'Suite' ? SUITE_PHOTOS : THREE_BED_PHOTOS;
}

// The meeting (conference) hall inside the guest house (Meeting hall page)
export const HALL_PHOTOS = [
  { file: 'hall/hall-1.jpg', label: 'Conference hall', hint: 'The long conference table and chairs for 25 people' },
  { file: 'hall/hall-3.jpg', label: 'Stairs to the conference hall', hint: 'The hall is up these stairs' },
];

// Room numbers start with the floor: 101-103 are on the ground floor, 201-203 on the first floor.
const FLOOR_NAMES = { 1: 'Ground floor', 2: 'First floor', 3: 'Second floor', 4: 'Third floor' };
export const floorOf = (roomNumber) => String(roomNumber).charAt(0);
export const floorName = (floor) => FLOOR_NAMES[floor] || `Floor ${floor}`;

// Floor plans (drawn plan where there is one) and a corridor photo for each floor.
const FLOOR_PLANS = { 1: 'floor-maps/floor-1.svg' }; // drawn from the team's sketch; add floor 2 when it is drawn
const CORRIDORS = { 1: 'floors/ground-corridor.jpg', 2: 'floors/first-corridor.jpg' };
export const hasFloorPlan = (floor) => !!FLOOR_PLANS[floor];
export function floorPlan(floor, roomNumbers) {
  return {
    file: FLOOR_PLANS[floor] || `floor-maps/floor-${floor}.svg`,
    label: `Floor plan: ${floorName(floor)}`,
    hint: `Plan of the ${floorName(floor).toLowerCase()} with rooms ${roomNumbers.join(', ')}, stairs, washrooms and exits`,
  };
}
export function floorCorridor(floor) {
  return CORRIDORS[floor] ? { file: CORRIDORS[floor], label: `${floorName(floor)} corridor`, hint: '' } : null;
}

// Campus map: not drawn yet. Until it is, the Floor map page shows the front of the guest house.
export const SITE_MAP = {
  file: 'floor-maps/campus-map.png',
  label: 'The CST guest house, Rinchending',
  hint: 'Where the guest house (with its meeting hall inside) is on the CST campus, with the main gate',
  fallback: 'guesthouse/front.jpg',
};

export const photoUrl = (file) => `${DIR}/${file}`;
