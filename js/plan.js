
        // State variables
        let tripDays = 3;
        let adultCount = 2;
        let childCount = 0;
        let dailyTransCost = 0;
        let dailyLodgeCost = 0;
        let dailyMiscCost = 0;

        // Initialize state on load
        window.addEventListener('DOMContentLoaded', () => {
            setTripDays(3);
            const selectedTransport = document.querySelector('input[name="tshewangdechen-trans-radio"]:checked');
            if (selectedTransport) syncTransRadio(selectedTransport.value);

            const lodgingCard = document.getElementById('tshewangdechen-lodging-card');
            const lodgingLayout = window.matchMedia('(max-width: 575.98px)');
            const updateLodgingLayout = () => {
                if (lodgingCard) lodgingCard.classList.toggle('is-compact', lodgingLayout.matches);
            };
            updateLodgingLayout();
            lodgingLayout.addEventListener('change', updateLodgingLayout);
        });

        // 1. Duration Handlers
        function setTripDays(days) {
            tripDays = days;
            const customInput = document.getElementById('tshewangdechen-input-custom-days');
            if (customInput) customInput.value = days;

            document.getElementById('tshewangdechen-custom-days-box').classList.add('hidden');

            document.querySelectorAll('.tshewangdechen-duration-btn').forEach(btn => {
                btn.classList.remove('is-active');
            });

            const activeBtn = document.getElementById(`tshewangdechen-btn-${days}days`);
            if (activeBtn) {
                activeBtn.classList.add('is-active');
            }

            calculateBudget();
        }

        function enableCustomTripDays() {
            document.getElementById('tshewangdechen-custom-days-box').classList.remove('hidden');

            document.querySelectorAll('.tshewangdechen-duration-btn').forEach(btn => {
                btn.classList.remove('is-active');
            });

            const customBtn = document.getElementById('tshewangdechen-btn-custom');
            if (customBtn) {
                customBtn.classList.add('is-active');
            }

            const val = parseInt(document.getElementById('tshewangdechen-input-custom-days').value) || 1;
            tripDays = val;
            calculateBudget();
        }

        // 2. Traveler Counter Adjuster
        function adjustTravelerCount(type, delta) {
            if (type === 'adults') {
                adultCount = Math.max(1, Math.min(25, adultCount + delta));
                document.getElementById('tshewangdechen-input-adults').value = adultCount;
            } else if (type === 'children') {
                childCount = Math.max(0, Math.min(15, childCount + delta));
                document.getElementById('tshewangdechen-input-children').value = childCount;
            }
            calculateBudget();
        }

        // 3. Transport option handler
        function syncTransRadio(val) {
            dailyTransCost = parseFloat(val);
            document.getElementById('tshewangdechen-trans-val').innerText = `Nu. ${dailyTransCost.toLocaleString()} / day`;
            calculateBudget();
        }

        // 4. Lodging option handler
        function syncLodgePreset(val) {
            dailyLodgeCost = parseFloat(val);
            document.getElementById('tshewangdechen-lodge-val').innerText = `Nu. ${dailyLodgeCost.toLocaleString()} / night`;
            calculateBudget();
        }

        // Main Dynamic Calculation Engine
        function calculateBudget() {
            // Check custom duration
            if (!document.getElementById('tshewangdechen-custom-days-box').classList.contains('hidden')) {
                tripDays = parseInt(document.getElementById('tshewangdechen-input-custom-days').value) || 1;
            }

            const totalTravelers = adultCount + childCount;

            // 1. Transportation Subtotal
            const totalTrans = dailyTransCost * tripDays;

            // 2. Lodging Subtotal (1 room per 2 adults)
            const requiredRooms = Math.max(1, Math.ceil(adultCount / 2));
            const nightCount = Math.max(0, tripDays - 1);
            const totalLodge = dailyLodgeCost * nightCount * requiredRooms;

            // 3. Fooding Subtotal
            const foodRate = parseFloat(document.getElementById('tshewangdechen-select-food').value) || 0;
            const adultFood = foodRate * adultCount * tripDays;
            const childFood = (foodRate * 0.5) * childCount * tripDays;
            const totalFood = adultFood + childFood;

            // 4. Guide & Personal Allowance
            const guideRate = parseFloat(document.querySelector('input[name="tshewangdechen-guide-radio"]:checked').value);
            const totalGuide = guideRate * tripDays;
            const totalMisc = dailyMiscCost * totalTravelers * tripDays;
            const totalGuideMisc = totalGuide + totalMisc;

            // 5. Special Experiential Add-ons
            let totalAddons = 0;
            if (document.getElementById('tshewangdechen-addon-spa').checked) totalAddons += (1500 * totalTravelers);
            if (document.getElementById('tshewangdechen-addon-cycling').checked) totalAddons += (1200 * totalTravelers * tripDays);
            if (document.getElementById('tshewangdechen-addon-archery').checked) totalAddons += (800 * totalTravelers);
            if (document.getElementById('tshewangdechen-addon-camping').checked) totalAddons += 2000;

            // Grand Total
            const grandTotal = totalTrans + totalLodge + totalFood + totalGuideMisc + totalAddons;
            const perPerson = totalTravelers > 0 ? (grandTotal / totalTravelers) : grandTotal;

            // DOM Updates
            document.getElementById('tshewangdechen-receipt-duration-text').innerText = `${tripDays} Day${tripDays === 1 ? '' : 's'} / ${nightCount} Night${nightCount === 1 ? '' : 's'}`;
            document.getElementById('tshewangdechen-receipt-travelers-text').innerText = `${adultCount} Adult${adultCount > 1 ? 's' : ''}${childCount > 0 ? `, ${childCount} Child` : ''}`;

            document.getElementById('tshewangdechen-cost-trans').innerText = `Nu. ${Math.round(totalTrans).toLocaleString()}`;
            document.getElementById('tshewangdechen-cost-lodge').innerText = `Nu. ${Math.round(totalLodge).toLocaleString()}`;
            document.getElementById('tshewangdechen-cost-food').innerText = `Nu. ${Math.round(totalFood).toLocaleString()}`;
            document.getElementById('tshewangdechen-cost-guide-misc').innerText = `Nu. ${Math.round(totalGuideMisc).toLocaleString()}`;
            document.getElementById('tshewangdechen-cost-addons').innerText = `Nu. ${Math.round(totalAddons).toLocaleString()}`;

            document.getElementById('tshewangdechen-val-grand-total').innerText = `Nu. ${Math.round(grandTotal).toLocaleString()}`;
            document.getElementById('tshewangdechen-val-per-person').innerText = `Nu. ${Math.round(perPerson).toLocaleString()}`;
            document.getElementById('tshewangdechen-modal-total-display').innerText = `Nu. ${Math.round(grandTotal).toLocaleString()}`;

        }

        // Modal Handlers
        function openBookingInquiryModal() {
            document.getElementById('tshewangdechen-booking-modal').classList.remove('hidden');
        }

        function closeBookingInquiryModal() {
            document.getElementById('tshewangdechen-booking-modal').classList.add('hidden');
        }

        function handleInquirySubmit(e) {
            e.preventDefault();
            const name = document.getElementById('tshewangdechen-modal-name').value;
            const phone = document.getElementById('tshewangdechen-modal-phone').value;
            const total = document.getElementById('tshewangdechen-modal-total-display').innerText;

            alert(`Kadrinchey (Thank you) ${name}!\n\nYour trip budget estimate of ${total} has been submitted to Yul Go Ri. Our team will contact you at ${phone} to arrange vehicle and hotel reservations.`);
            closeBookingInquiryModal();
        }

        function openChat() {
            document.getElementById("chatbot").style.display = "block";
            document.getElementById("userInput").focus();
        }

        function closeChat() {
            document.getElementById("chatbot").style.display = "none";
        }

        function sendMessage() {
            const input = document.getElementById("userInput");
            const messages = document.getElementById("messages");
            const message = input.value.trim();

            if (message === "") return;

            const userMessage = document.createElement("div");
            userMessage.className = "user-message";
            userMessage.textContent = message;
            messages.appendChild(userMessage);
            input.value = "";

            const botMessage = document.createElement("div");
            botMessage.className = "bot-message";
            const question = message.toLowerCase();

            if (question.includes("gom kora")) {
                botMessage.textContent = "Gom Kora is a sacred pilgrimage site in Trashiyangtse, Bhutan.";
            } else if (question.includes("aja ney")) {
                botMessage.textContent = "Aja Ney is a sacred pilgrimage destination associated with Guru Rinpoche in eastern Bhutan.";
            } else if (question.includes("gasa") || question.includes("menchu") || question.includes("hot spring")) {
                botMessage.textContent = "Gasa Menchu is a natural hot spring in Gasa Dzongkhag.";
            } else if (question.includes("mebar") || question.includes("burning lake")) {
                botMessage.textContent = "Mebar Tsho is a sacred lake in Bumthang associated with the story of Terton Pema Lingpa.";
            } else if (question.includes("omba")) {
                botMessage.textContent = "Omba Ney is a sacred site in eastern Bhutan known for its natural OM rock formation.";
            } else if (question.includes("hello") || question.includes("hi")) {
                botMessage.textContent = "Hello! Welcome to Yul-Go-Ri. Ask me about Gom Kora, Aja Ney, Gasa Hot Springs, Mebar Tsho or Omba Ney.";
            } else if (question.includes("book") || question.includes("booking")) {
                botMessage.textContent = "Choose a place and press its Book Now button. This demo displays a message; a real booking form can be added later.";
            } else {
                botMessage.textContent = "I can help with Gom Kora, Aja Ney, Gasa Hot Springs, Mebar Tsho and Omba Ney. Which place would you like to know about?";
            }

            messages.appendChild(botMessage);
            messages.scrollTop = messages.scrollHeight;
        }

        document.getElementById("chatForm").addEventListener("submit", function (event) {
            event.preventDefault();
            sendMessage();
        });
