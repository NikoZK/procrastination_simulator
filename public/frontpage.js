        const randomTimeDisplay = document.getElementById('random-time-display')
        
        function randomTime (min, max) {
            return Math.floor(Math.random() * (max - min) + min)
            }

            function timeFormat(randomTime) {
                let hours = Math.floor(randomTime / 3600)
                let missingSeconds = randomTime % 3600
                let minutes = Math.floor(missingSeconds / 60)
                let seconds = missingSeconds % 60
                return hours + " hours " + minutes + " minutes " + seconds + " seconds"
            }

        function randomTimeGenerator() {
            let yesOrTime = Math.random()

            if (yesOrTime > 0.5) {
                randomTimeDisplay.innerText = "yes"
                document.body.style.backgroundColor = '#6dc271'
            } else {
                let totalSeconds = randomTime(1, 172800)
                let formattedTime = timeFormat(totalSeconds)
                
                let now = new Date()
                let future = new Date(now.getTime() + totalSeconds * 1000)
                let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


                randomTimeDisplay.innerText = "No do it in " + formattedTime +
                "\nThat will be on " + days[future.getDay()] + " at " + future.getHours() + ":" + future.getMinutes() + ":" + future.getSeconds()
                document.body.style.backgroundColor = '#ff8585'
            }
        }