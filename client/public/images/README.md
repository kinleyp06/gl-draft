# Pictures for the G-Link website (21 in total)

Save each picture **with exactly the name below** in the folder shown. The site picks it up
automatically: the dashed "Photo needed" box is replaced by the picture. No code changes needed.

- Photos: **JPG**, landscape (wider than tall, 3:2, for example 1500 x 1000 px), under 500 KB each.
- Floor plans and the campus map: **PNG** (or JPG renamed to the name below), 4:3, clear labels.
- Take photos in daylight with the lights on and the room tidy. No people in the photos.

## Guest house (3 photos), shown on the Home page

| Save as | What to photograph |
|---|---|
| `guesthouse/exterior.jpg` | Front of the guest house building and its entrance |
| `guesthouse/entrance.jpg` | Entrance / reception, where guests arrive and check in |
| `guesthouse/washroom.jpg` | The washroom or bathroom guests use |

## Rooms (2 photos per room, 6 rooms = 12 photos), shown on the Rooms page

Named by room number. For each of **101, 102, 103, 201, 202, 203**:

| Save as | What to photograph |
|---|---|
| `rooms/101-1.jpg` | Whole room from the doorway, showing all 3 beds |
| `rooms/101-2.jpg` | One bed with the table, wardrobe or shelf next to it |

(then `rooms/102-1.jpg`, `rooms/102-2.jpg`, ... up to `rooms/203-2.jpg`). If the admin adds a new room,
add two more photos with its number.

## Meeting hall (3 photos), shown on the Meeting hall page

| Save as | What to photograph |
|---|---|
| `hall/hall-1.jpg` | Whole hall from the entrance, showing the 25 seats |
| `hall/hall-2.jpg` | The front: screen, projector or whiteboard |
| `hall/hall-3.jpg` | Close-up of the tables and chairs |

## Floor maps (3 pictures), shown on the Floor map page

| Save as | What it shows |
|---|---|
| `floor-maps/floor-1.png` | Ground floor plan: rooms 101, 102, 103, stairs, washrooms and exits |
| `floor-maps/floor-2.png` | First floor plan: rooms 201, 202, 203, stairs, washrooms and exits |
| `floor-maps/campus-map.png` | CST campus map: where the guest house and the meeting hall are, with the main gate |

Room numbers start with the floor number (1xx = ground floor, 2xx = first floor), so a new floor
3 needs `floor-maps/floor-3.png`. A floor plan can be drawn in any tool (even PowerPoint or
draw.io) and exported as an image.

The list in code is `client/src/photos.js`.
