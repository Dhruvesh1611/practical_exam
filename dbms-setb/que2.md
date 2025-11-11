
INSERT INTO Hotels (hotel_id, hotel_name, city, rooms_available)
VALUES 
    (1, 'Hotel Paradise', 'Mumbai', 25),
    (2, 'Sea View Resort', 'Goa', 40);


UPDATE Hotels
SET rooms_available = 30
WHERE hotel_id = 1;


DELETE FROM Hotels
WHERE hotel_id = 2;


SELECT SUM(rooms_available) AS total_rooms_available
FROM Hotels;


SELECT AVG(rooms_available) AS average_rooms_available
FROM Hotels;
