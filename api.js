document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservation-form');
    const reservationList = document.getElementById('reservation-list');

    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const branch = document.getElementById('branch').value;
        const reservationDate = document.getElementById('reservation-date').value;
        const notes = document.getElementById('notes').value;

        if (name && email && phone && reservationDate) {
            const reservationItem = document.createElement('li');
            reservationItem.innerHTML = `<strong>Adı:</strong> ${name}<br>
                                        <strong>Email:</strong> ${email}<br>
                                        <strong>Telefon Numarası:</strong> ${phone}<br>
                                        <strong>Şube Seçimi:</strong> ${branch}<br>
                                        <strong>Rezervasyon Günü ve Saati:</strong> ${reservationDate}<br>
                                        <strong>Eklemek İstediği Not:</strong> ${notes}`;
            reservationList.appendChild(reservationItem);

         
            // POST isteği için Axios kullanımı
            axios.post('/api/reservations', {
                name,
                email,
                phone,
                branch,
                reservationDate,
                notes
            })
                .then(response => {
                    console.log('Rezervasyon oluşturuldu:', response.data);
                })
                .catch(error => {
                    console.error('Rezervasyon oluşturulurken hata oluştu:', error);
                });
              
        } else {
            alert('Lütfen gerekli tüm alanları doldurun.');
        }
       

        reservationForm.reset();
    });
});

