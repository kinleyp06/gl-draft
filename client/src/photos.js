// Every picture the site shows, and where to save it. Until a picture is saved in
// client/public/images/..., the site shows a placeholder that says which photo is needed.
// The full list (21 pictures) is also in client/public/images/README.md.
const DIR = '/images';

// 3 pictures of the guest house itself (Home page)
export const GUEST_HOUSE_PHOTOS = [
  { file: 'guesthouse/exterior.jpg', label: 'Guest house from outside', hint: 'Front of the building and its entrance, in daylight' },
  { file: 'guesthouse/entrance.jpg', label: 'Entrance and reception', hint: 'Where guests arrive and check in' },
  { file: 'guesthouse/washroom.jpg', label: 'Washroom', hint: 'The washroom or bathroom guests use' },
];

// 2 pictures per room (6 rooms = 12 pictures), named by room number
export function roomPhotos(roomNumber) {
  return [
    { file: `rooms/${roomNumber}-1.jpg`, label: `Room ${roomNumber}: whole room`, hint: 'From the doorway, showing all 3 beds' },
    { file: `rooms/${roomNumber}-2.jpg`, label: `Room ${roomNumber}: bed and furniture`, hint: 'One bed with the table, wardrobe or shelf next to it' },
  ];
}

// 3 pictures of the meeting hall (Meeting hall page)
export const HALL_PHOTOS = [
  { file: 'hall/hall-1.jpg', label: 'Meeting hall: whole room', hint: 'From the entrance, showing the 25 seats' },
  { file: 'hall/hall-2.jpg', label: 'Meeting hall: front', hint: 'Screen, projector or whiteboard at the front' },
  { file: 'hall/hall-3.jpg', label: 'Meeting hall: seating', hint: 'Close-up of the tables and chairs' },
];

// Room numbers start with the floor: 101-103 are on the ground floor, 201-203 on the first floor.
const FLOOR_NAMES = { 1: 'Ground floor', 2: 'First floor', 3: 'Second floor', 4: 'Third floor' };
export const floorOf = (roomNumber) => String(roomNumber).charAt(0);
export const floorName = (floor) => FLOOR_NAMES[floor] || `Floor ${floor}`;

// 1 floor plan per floor (2 floors = 2 pictures) + 1 campus map
export function floorPlan(floor, roomNumbers) {
  return {
    file: `floor-maps/floor-${floor}.png`,
    label: `Floor plan: ${floorName(floor)}`,
    hint: `Plan of the ${floorName(floor).toLowerCase()} with rooms ${roomNumbers.join(', ')}, stairs, washrooms and exits marked`,
  };
}
export const SITE_MAP = {
  file: 'floor-maps/campus-map.png',
  label: 'Campus map',
  hint: 'Where the guest house and the meeting hall are on the CST campus, with the main gate',
};

export const photoUrl = (file) => `${DIR}/${file}`;
