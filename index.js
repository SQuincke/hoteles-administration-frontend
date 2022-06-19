const fetchHotels = async () => {
    try {
        const hotels = await (await fetch("http://localhost:8080/api/hotel")).json();
        const hotelList = document.querySelector('[data-hotel-list]');
        document.querySelector('[data-list-header]').classList.remove('not-display');
        hotelList.innerHTML = "";
        hotels.forEach(hotel => {hotelList.append(appendHotelData(hotel))})
    } catch (e) {
        console.error(e);
    }
};

const appendHotelData = ({name, address, roomQty}) => {
    const clone = document.querySelector("[data-hotel-template]").content.cloneNode(true);
    const item = clone.querySelector('[data-hotel-item]');
    item.querySelector('[data-hotel-name]').innerText = name;
    item.querySelector('[data-hotel-address]').innerText = address;
    item.querySelector('[data-hotel-room-qty]').innerText = roomQty;
    return clone;
}