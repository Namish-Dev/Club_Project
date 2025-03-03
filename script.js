document.addEventListener("DOMContentLoaded", function () {
    const eventList = document.getElementById("event-list");
    const totalEvents = document.getElementById("total-events");
    const addEventBtn = document.getElementById("add-event-btn");

    let events = [
        { name: "Team Meeting", attendees: 1 },
        { name: "Product Launch", attendees: 3 },
        { name: "Training Workshop", attendees: 0 },
        { name: "Hello world", attendees: 0 }
    ];

    function renderEvents() {
        eventList.innerHTML = "";
        events.forEach((event, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${event.name}</td>
                <td>${event.attendees}</td>
                <td>
                    <button class="attend-btn" onclick="increaseAttendees(${index})">
                        ✅ Attend
                    </button>
                </td>
            `;
            eventList.appendChild(row);
        });

        totalEvents.textContent = `Total Events: ${events.length}`;
    }

    window.increaseAttendees = function (index) {
        events[index].attendees += 1;
        renderEvents();
    };

    addEventBtn.addEventListener("click", function () {
        const eventName = prompt("Enter event name:");
        if (eventName) {
            events.push({ name: eventName, attendees: 0 });
            renderEvents();
        }
    });

    renderEvents();
});
