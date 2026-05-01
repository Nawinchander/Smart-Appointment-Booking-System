“A Smart Appointment Booking backend using Node.js demonstrating layered architecture, event-driven notifications, and slot caching for scalable backend design.”

Think of it like a mini version of:

Practo
Calendly

Users can:

View available slots
Book an appointment
Get confirmation notification
Frequently accessed slots are cached

System Designs Used
1. Layered Architecture
Separate:
Controllers
Services
Repositories

2. Event-Driven Architecture
When appointment booked:
Emit event "APPOINTMENT_BOOKED"
Notification listener sends confirmation

3. Caching Layer
Available slots are cached for faster read



