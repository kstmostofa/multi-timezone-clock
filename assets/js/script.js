/**
 * Multi Timezone Clock
 * A simple clock app built with Alpine.js and Tailwind CSS
 * Author: Mostafijur Rahman
 * URL: https://github.com/kstmostofa/
 * License: MIT
 * Version: 1.0.1
 */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
            },
            fontSize: {
                '10xl': '10rem',
                '11xl': '12rem',
                '12xl': '14rem',
            }
        }
    }
}
function clockApp() {
    return {
        currentTime: '00:00:00',
        showSeconds: true,
        use24Hour: false,
        showQuote: true,
        currentTheme: 'dark',
        mainClockTimezone: 'Asia/Dhaka',
        mainClockName: 'Dhaka',
        locations: [
            { name: 'New York', timezone: 'Etc/GMT+4', time: 0 },
            { name: 'London', timezone: 'Etc/GMT', time: 0 },
            { name: 'Tokyo', timezone: 'Etc/GMT-9', time: 0 }
        ],
        locationCount: 3,
        settingsOpen: false,
        addLocationOpen: false,
        notesOpen: false,
        websitesOpen: false,
        newLocationName: '',
        newLocationTimezone: '',
        showParticles: true,
        quotes: [
            "The only way to do great work is to love what you do - Steve Jobs",
            "Time is what we want most, but we often use it the least effectively - William Penn",
            "The two most powerful warriors are patience and time - Leo Tolstoy"
        ],
        currentQuote: '',
        notes: '',
        websites: [
            { url: 'https://github.com/kstmostofa/', name: 'GitHub', icon: 'github' },
            { url: 'https://www.linkedin.com/in/mostofa-me/' , name: 'LinkedIn', icon: 'linkedin' },
            { url: 'https://www.facebook.com/mostofa.me' , name: 'Facebook', icon: 'facebook' },
            { url: 'https://twitter.com/Mostofa_Me' , name: 'Twitter', icon: 'twitter' },
            { url: 'https://medium.com/@mostofa.me' , name: 'Medium', icon: 'medium' },
        ],
        themes: {
            dark: {
                background: 'bg-gray-900',
                text: 'text-white',
                sidebar: 'bg-gray-800',
                border: 'border-gray-700',
                input: 'bg-gray-700 text-white p-2 rounded w-full',
                website: 'bg-gray-700 text-white hover:bg-gray-600',
                button: 'bg-gray-700 text-white hover:bg-gray-600'
            },
            light: {
                background: 'bg-gray-100',
                text: 'text-gray-900',
                sidebar: 'bg-white',
                border: 'border-gray-300',
                input: 'bg-white text-gray-900 p-2 rounded w-full border border-gray-300',
                website: 'bg-gray-300 text-gray-900 hover:bg-gray-200',
                button: 'bg-gray-300 text-gray-900 hover:bg-gray-200'
            }
        },
        timezones: [
            { name: '', zone: 'Select Time Zone' },
            { name: 'GMT-12:00', zone: 'Etc/GMT+12' },
            { name: 'GMT-11:30', zone: 'Pacific/Niue' },
            { name: 'GMT-11:00', zone: 'Etc/GMT+11' },
            { name: 'GMT-10:30', zone: 'Pacific/Marquesas' },
            { name: 'GMT-10:00', zone: 'Etc/GMT+10' },
            { name: 'GMT-09:30', zone: 'Pacific/Marquesas' },
            { name: 'GMT-09:00', zone: 'Etc/GMT+9' },
            { name: 'GMT-08:30', zone: 'Pacific/Pitcairn' },
            { name: 'GMT-08:00', zone: 'Etc/GMT+8' },
            { name: 'GMT-07:30', zone: 'America/Phoenix' },
            { name: 'GMT-07:00', zone: 'Etc/GMT+7' },
            { name: 'GMT-06:30', zone: 'Pacific/Easter' },
            { name: 'GMT-06:00', zone: 'Etc/GMT+6' },
            { name: 'GMT-05:30', zone: 'America/Caracas' },
            { name: 'GMT-05:00', zone: 'Etc/GMT+5' },
            { name: 'GMT-04:30', zone: 'America/Caracas' },
            { name: 'GMT-04:00', zone: 'Etc/GMT+4' },
            { name: 'GMT-03:30', zone: 'America/St_Johns' },
            { name: 'GMT-03:00', zone: 'Etc/GMT+3' },
            { name: 'GMT-02:30', zone: 'America/St_Johns' },
            { name: 'GMT-02:00', zone: 'Etc/GMT+2' },
            { name: 'GMT-01:30', zone: 'Atlantic/Cape_Verde' },
            { name: 'GMT-01:00', zone: 'Etc/GMT+1' },
            { name: 'GMT+00:00', zone: 'Etc/GMT' },
            { name: 'GMT+00:30', zone: 'Africa/Monrovia' },
            { name: 'GMT+01:00', zone: 'Etc/GMT-1' },
            { name: 'GMT+01:30', zone: 'Africa/Libreville' },
            { name: 'GMT+02:00', zone: 'Etc/GMT-2' },
            { name: 'GMT+02:30', zone: 'Africa/Khartoum' },
            { name: 'GMT+03:00', zone: 'Etc/GMT-3' },
            { name: 'GMT+03:30', zone: 'Iran' },
            { name: 'GMT+04:00', zone: 'Etc/GMT-4' },
            { name: 'GMT+04:30', zone: 'Asia/Kabul' },
            { name: 'GMT+05:00', zone: 'Etc/GMT-5' },
            { name: 'GMT+05:30', zone: 'Asia/Kolkata' },
            { name: 'GMT+05:45', zone: 'Asia/Kathmandu' },
            { name: 'GMT+06:00', zone: 'Asia/Dhaka' },
            { name: 'GMT+06:30', zone: 'Asia/Yangon' },
            { name: 'GMT+07:00', zone: 'Etc/GMT-7' },
            { name: 'GMT+07:30', zone: 'Asia/Jakarta' },
            { name: 'GMT+08:00', zone: 'Etc/GMT-8' },
            { name: 'GMT+08:30', zone: 'Asia/Pyongyang' },
            { name: 'GMT+09:00', zone: 'Etc/GMT-9' },
            { name: 'GMT+09:30', zone: 'Australia/Adelaide' },
            { name: 'GMT+10:00', zone: 'Etc/GMT-10' },
            { name: 'GMT+10:30', zone: 'Australia/Lord_Howe' },
            { name: 'GMT+11:00', zone: 'Etc/GMT-11' },
            { name: 'GMT+11:30', zone: 'Pacific/Norfolk' },
            { name: 'GMT+12:00', zone: 'Etc/GMT-12' },
            { name: 'GMT+12:45', zone: 'Pacific/Chatham' },
            { name: 'GMT+13:00', zone: 'Pacific/Apia' },
            { name: 'GMT+14:00', zone: 'Pacific/Kiritimati' }
        ],
        init() {
            this.loadFromLocalStorage();
            this.updateClock();
            setInterval(() => this.updateClock(), 1000);
            this.createParticles();
            this.applyTheme();
            this.updateQuote();
            setInterval(() => this.updateQuote(), 60000); // Change quote every minute
        },
        updateClock() {
            const now = new Date();
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: !this.use24Hour,
                timeZone: this.mainClockTimezone
            };
            if (this.showSeconds) {
                options.second = '2-digit';
            }

            this.currentTime = now.toLocaleTimeString('en-GB', options).toUpperCase();
            this.updateAllLocationTime();
        },

        updateAllLocationTime() {
            for (let i = 0; i < this.locations.length; i++) {
                this.locations[i].time = this.getLocationTime(this.locations[i].timezone);
            }
        },
        getLocationTime(timezone) {
            const now = new Date();
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: !this.use24Hour,
                timeZone: timezone
            };
            return now.toLocaleTimeString('en-GB', options).toUpperCase();
        },
        applyTheme() {
            document.body.className = `h-screen flex flex-col transition-colors duration-300 overflow-hidden ${this.themes[this.currentTheme].background} ${this.themes[this.currentTheme].text}`;
        },
        createParticles() {
            const container = document.getElementById('particles-container');
            container.innerHTML = '';
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
                particle.style.animationDelay = `${Math.random() * 2}s`;
                container.appendChild(particle);
            }
        },
        saveLocation() {
            if (this.newLocationName && this.newLocationTimezone) {
                this.locations.push({ name: this.newLocationName, timezone: this.newLocationTimezone, time: this.getLocationTime(this.newLocationTimezone) });
                this.newLocationName = '';
                this.newLocationTimezone = '';
                this.addLocationOpen = false;
                this.saveToLocalStorage();
            }
        },
        deleteLocation(index) {
            this.locations.splice(index, 1);
            this.saveToLocalStorage();
        },
        updateQuote() {
            const randomIndex = Math.floor(Math.random() * this.quotes.length);
            this.currentQuote = this.quotes[randomIndex];
        },
        getWebsiteIcon(index) {
            return this.websites[index].icon || 'globe';
        },
        saveToLocalStorage() {
            this.locations = this.locations.slice(0, this.locationCount);
            const data = {
                showSeconds: this.showSeconds,
                use24Hour: this.use24Hour,
                currentTheme: this.currentTheme,
                mainClockTimezone: this.mainClockTimezone,
                mainClockName: this.mainClockName,
                locations: this.locations,
                showParticles: this.showParticles,
                quotes: this.quotes,
                notes: this.notes,
                websites: this.websites,
                showQuote: this.showQuote,
                newLocationTimezone: this.newLocationTimezone,
                locationCount: this.locationCount
            };
            localStorage.setItem('clockAppData', JSON.stringify(data));
        },
        loadFromLocalStorage() {
            const data = JSON.parse(localStorage.getItem('clockAppData'));
            if (data) {
                this.showSeconds = data.showSeconds
                this.use24Hour = data.use24Hour
                this.currentTheme = data.currentTheme
                this.mainClockTimezone = data.mainClockTimezone
                this.mainClockName = data.mainClockName
                this.locations = data.locations
                this.showParticles = data.showParticles
                this.quotes = data.quotes
                this.notes = data.notes
                this.websites = data.websites
                this.showQuote = data.showQuote,
                    this.newLocationTimezone = data.newLocationTimezone,
                    this.locationCount = data.locationCount
            }
        },
        handleKeyPress(event) {
            return;
            if (event.key === 'n' || event.key === 'N') {
                this.notesOpen = !this.notesOpen;
            } else if (event.key === 's' || event.key === 'S') {
                this.settingsOpen = !this.settingsOpen;
            } else if (event.key === 'b' || event.key === 'B') {
                this.websitesOpen = !this.websitesOpen;
            }
        }
    };
}